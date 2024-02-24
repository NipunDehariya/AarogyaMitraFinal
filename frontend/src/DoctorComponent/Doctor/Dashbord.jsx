import React  from 'react'
import { Link } from 'react-router-dom';
import './Style.css'
import { PieChart, Pie} from "recharts";
import { ComposedChart, Line,Area,Bar, XAxis,  YAxis,CartesianGrid, Tooltip,Legend,Scatter} from "recharts";
import {
  AreaChart,
  ResponsiveContainer
} from "recharts";


const data = [
    {
      name: "Page A",
      uv: 590,
      pv: 800,
      amt: 1400,
      cnt: 490
    },
    {
      name: "Page B",
      uv: 868,
      pv: 967,
      amt: 1506,
      cnt: 590
    },
    {
      name: "Page C",
      uv: 1397,
      pv: 1098,
      amt: 989,
      cnt: 350
    },
    {
      name: "Page D",
      uv: 1480,
      pv: 1200,
      amt: 1228,
      cnt: 480
    },
    {
      name: "Page E",
      uv: 1520,
      pv: 1108,
      amt: 1100,
      cnt: 460
    },
    {
      name: "Page F",
      uv: 1400,
      pv: 680,
      amt: 1700,
      cnt: 380
    }
  ];
  const data2 = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];


const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 }
];

const data02 = [
  { name: "Group A", value: 2400 },
  { name: "Group B", value: 4567 },
  { name: "Group C", value: 1398 },
  { name: "Group D", value: 9800 },
  { name: "Group E", value: 3908 },
  { name: "Group F", value: 4800 }
];

export default function Dashbord() {
 
  // let sidebar = document.querySelector(".sidebar");
  // let sidebarBtn = document.querySelector(".sidebarBtn");
  // sidebarBtn = function ()  {
  //   sidebar.classList.toggle("active");
  //   if (sidebar.classList.contains("active")) {
  //     sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  //   } else
  //     sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  // }

  return <>
 <>
  <div className="sidebar bg-danger">
    <div className="logo-details">
    <img src="logo.png" alt="" width="150" height="70"></img>
      <span className="logo_name">
        <span
          style={{ color: "rgb(250, 250, 100)", fontSize: 13, fontWeight: 100 }}
        >
          {" "}
          for Doctor
        </span>
      </span>
    </div>
    <ul className="nav-links">
      <li>
        <Link to='/Dashbord'>
        <i className="fa-sharp fa-solid fa-house"></i>
          <span className="links_name">Home</span>
        </Link>
      </li>
      <li>
        <Link to='/Schedule'>
        <i className="fa-solid fa-list-ul"></i>
          <span className="links_name">Schedule</span>
        </Link>
      </li>
      <li>
        <Link to='/Appointments'>
        <i class="fa-solid fa-chart-pie"></i>
          <span className="links_name">Appointments</span>
        </Link>
      </li>
      <li>
        <Link to='/patiant'>
        <i className="fa-regular fa-user"></i>
          <span className="links_name">My patient</span>
        </Link>
      </li>
      <li>
            <Link to='/PatiantOnlineSession'>
              <i class="fa-regular fa-user"></i>
              <span className="links_name">Online Sessions</span>
            </Link>
          </li>
      <li>
        <Link to='/Setting'>
        <i class="fa-solid fa-gear"></i>
          <span className="links_name">Settings</span>
        </Link>
      </li>
      <li>
            <Link to='/AddHistory'>
            <i class="fa-solid fa-file-medical"></i>
              <span className="links_name">Medical Reports</span>
            </Link>
          </li>
      <li className="log_out">
        <Link to="/log">
        <i class="fa-solid fa-right-from-bracket"></i>
          <span className="links_name">Log out</span>
        </Link>
      </li>
    </ul>
  </div>
  <section className="home-section">
    <nav>
      
      <form>
  <label for="search-input">Search:</label>
  <input type="text" id="search-input" name="search-input"/>
  <button type="submit">Search</button>
</form>

    </nav>
    <div className="home-content">
      <div className="overview-boxes">
        <div className="box bg-danger">
          <div className="right-side ">
            <div className="box-topic">Appointments</div>
            <div className="number">200</div>
            <div className="indicator"></div>
          </div>
        </div>
        <div className="box bg-info">
          <div className="right-side">
            <div className="box-topic">Total Patient</div>
            <div className="number">600</div>
            <div className="indicator"></div>
          </div>
        </div>
        <div className="box bg-warning">
          <div className="right-side">
            <div className="box-topic">Video Call</div>
            <div className="number">300</div>
            <div className="indicator"></div>
          </div>
        </div>
        <div className="box bg-success">
          <div className="right-side">
            <div className="box-topic">Clinic Consulting</div>
            <div className="number">100</div>
            <div className="indicator"></div>
          </div>
        </div>
      </div>
     
     <div className='container'>
   <div className='row'>
     <div className='col-md-6'>
     <ComposedChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="pv" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      <Scatter dataKey="cnt" fill="red" />
    </ComposedChart>
     </div>
     <div className='col-md-6 '  >
     <ResponsiveContainer>
        <AreaChart
          data={data2}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
     </div>
     <div clasName= ' col-md-6'>
     <PieChart width={1000} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data01}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />
      <Pie
        dataKey="value"
        data={data02}
        cx={500}
        cy={200}
        innerRadius={40}
        outerRadius={80}
        fill="#82ca9d"
      />
      <Tooltip />
    </PieChart>
     </div>
   </div>
     </div>
      
    </div>
  </section>
  <div className="button">
    <Link href="#">See All</Link>
  </div>
</>


   </>
}
