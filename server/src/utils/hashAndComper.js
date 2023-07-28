//  const bcrypt = require('bcryptjs') 


//  export const hash = ({plaintext , salt = process.env.SALT_ROUND }={})=>{
//     const hashResult = bcrypt.hashSync(plaintext , parseInt(salt))
//     return hashResult
//  }

//  export const compare = ({plaintext ,hashVale }={})=>{
//     const match = bcrypt.compareSync(plaintext , hashVale)
//     return match
//  }