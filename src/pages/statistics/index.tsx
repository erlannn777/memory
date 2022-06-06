import React from "react";
import {
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const data2 = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const data = [
    { name: "Поиск мест захоронения", value: 400 },
    { name: "Похороны животных", value: 300 },
    { name: "Ритуальный транспорт", value: 200 },
    { name: "Груз 200", value: 100 },
    { name: "Хоспесы", value: 800 },
  ];
  const COLORS = ["green", "blue", "red", "orange", "purple"];
  return (
    <div>
      <div className="mx-24 bg-white">
        <div className="w-full flex justify-between">
          <ResponsiveContainer>
            <LineChart width={200} height={500} data={data2}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" padding={{ left: 0, right: 0 }} />
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
          <div className="w-80 rounded-3xl border p-3">
            <div className="w-full text-center">
              <span className="font-medium text-sm">
                Общая статистика заказов на услуги
              </span>
            </div>
            <div className="flex justify-center">
              <PieChart width={170} height={220}>
                <Pie
                  data={data}
                  cx={85}
                  cy={100}
                  innerRadius={64}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </div>
            <div className="flex">
              <div className="flex flex-col">
                {COLORS.map((color, index) => (
                  <div
                    key={index}
                    style={{ background: `${color}` }}
                    className="w-2 h-2 m-3"
                  ></div>
                ))}
              </div>
              <div className="flex flex-col">
                {data.map((item, index) => (
                  <span key={index} className="m-1.5 text-sm font-light">
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
