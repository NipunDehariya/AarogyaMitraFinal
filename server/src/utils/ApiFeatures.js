class ApiFeatures{
    constructor(mongooseQuery,queryString){
        this.mongooseQuery = mongooseQuery;
        this.queryString = queryString;
      
    }

    paginate(){
    //pagination
    let page=this.queryString.page*1 || 1;
    if(page<0) page=1;
    let limit=10;
    let skip=(page-1)*limit;
    this.mongooseQuery.skip(skip).limit(limit)
    this.page=page;
    return this;
    }

    filter(){
     //filter >>do filtter by ay 7aga in url
    let queryString={...this.queryString}
    let excludedQuery=['page','sort','keyword','fields']
    excludedQuery.forEach((elm) => {
        delete queryString[elm]
    });
    // queryString.JSON.stringify(queryString)
    // queryString=queryString.replace(/\b(gte|gt|lte|lt)\b/g,(match) => `$${match}`);
    // queryString.JSON.parse(queryString);
    // this.mongooseQuery.find(queryString);
    return this;
    }

    sort(){    
    if(this.queryString.sort){
        ///sort
        let sortedBy=this.queryString.sort.split(',').join(' ')
        this.mongooseQuery.sort(sortedBy)
    }
    return this;
    }

    search(){
        if(this.queryString.keyword){
            ///search
            let keyword=this.queryString.keyword
            this.mongooseQuery.find({ $or:[{nmae:{$regex:keyword, $options:"i"}},
                                      {description:{$regex:keyword, $options:"i"}},
            ],});
        }
        return this;
    }

    fields(){
    ///selected fields
    if(this.queryString.fields){
        let fields=this.queryString.fields.split(',').join(' ')
        this.mongooseQuery.select(fields)
    }
    return this;
    }
}


module.exports=ApiFeatures;