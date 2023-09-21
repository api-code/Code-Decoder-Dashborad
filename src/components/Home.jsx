import React from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

function Home() {
  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "April",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "July",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <>
      <main className="main-container">
        <div className="main-title">
          <h3>DASHBOARD</h3>
        </div>

        <div className="main-cards">
          <div className="card">
            <div className="card-inner">
              <h3>Total Accounts Recevible</h3>
              {/* <BsFillArchiveFill className="card_icon" /> */}
            </div>
            <h1>$6,621,280</h1>
          </div>
          <div className="card">
            <div className="card-inner">
              <h3>Total Account Payable</h3>
              {/* <BsFillGrid3X3GapFill className="card_icon" /> */}
            </div>
            <h1>$1,630,270</h1>
          </div>
          <div className="card">
            <div className="card-inner">
              <h3>Equity Ratio</h3>
              {/* <p>75.38%</p> */}
              {/* <BsPeopleFill className="card_icon" /> */}
            </div>
            <h1>75.38%</h1>
          </div>
          <div className="card">
            <div className="card-inner">
              <h3>Debt Equity</h3>
              {/* <BsFillBellFill className="card_icon" /> */}
            </div>
            <h1>1.10%</h1>
          </div>
        </div>
        <div className="main-cards">
          <div className="card">
            <div className="card-inner">
              <h3>Current Ratio</h3>
              <BsFillArchiveFill className="card_icon" />
            </div>
            <h1>300</h1>
          </div>
          <div className="card">
            <div className="card-inner">
              <h3>DSI</h3>
              <p>[Daily Salary Inventory]</p>
              <BsFillGrid3X3GapFill className="card_icon" />
            </div>
            <h1>12</h1>
          </div>
          <div className="card">
            <div className="card-inner">
              <h3>DSO</h3>
              <p>[Days Salary Outstanding]</p>
              <BsPeopleFill className="card_icon" />
            </div>
            <h1>33</h1>
          </div>
          <div className="card">
            <div className="card-inner">
              <h3>DPO</h3>
              <p>[Days Payble Outstanding]</p>
              <BsFillBellFill className="card_icon" />
            </div>
            <h1>42</h1>
          </div>
        </div>

        <div className="charts">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>

          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>

          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>

          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={730} height={250} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </main>
    </>
  );
}

export default Home;