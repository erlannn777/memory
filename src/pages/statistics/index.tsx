import React from "react";
import { Cell, Pie, PieChart } from "recharts";
import AreaChart from "./AreaChart";

const Statistics = () => {
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
      <div className="mx-24 bg-white mt-3">
        <div className="w-full flex justify-between">
          <AreaChart />

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
        <div className="w-full mt-12">
          <div className="w-full text-center">
            <span>Статистика категорий услуг</span>
          </div>
          <div className="w-full flex flex-wrap items-start justify-center">
            <div className="w-64 h-60 shadow-xl rounded-2xl flex flex-col justify-around p-4 m-4">
              <div className="w-full break-words">
                <span>Похороны домашних животных</span>
              </div>
              <div className="w-full flex justify-between">
                <span className="text-slate-500">Просмотрено</span>
                <span className="break-words font-semibold text-cyan-500">
                  22 397
                </span>
              </div>
              <div className="w-full flex justify-between">
                <span className="text-slate-500">Сделано заказов</span>
                <span className="break-words font-semibold text-cyan-500">
                  601
                </span>
              </div>
              <div className="w-full flex justify-between">
                <span className="text-slate-500">Оборот</span>
                <span className="break-words font-semibold text-cyan-500">
                  314 555
                </span>
              </div>
            </div>
            <div className="w-64 h-60 shadow-xl rounded-2xl flex flex-col justify-around p-4 m-4">
              <div className="w-full break-words">
                <span>Похороны домашних животных</span>
              </div>
              <div className="w-full flex justify-between">
                <span className="text-slate-500">Просмотрено</span>
                <span className="break-words font-semibold text-cyan-500">
                  22 397
                </span>
              </div>
              <div className="w-full flex justify-between">
                <span className="text-slate-500">Сделано заказов</span>
                <span className="break-words font-semibold text-cyan-500">
                  601
                </span>
              </div>
              <div className="w-full flex justify-between">
                <span className="text-slate-500">Оборот</span>
                <span className="break-words font-semibold text-cyan-500">
                  314 555
                </span>
              </div>
            </div>
            <div className="w-64 h-60 shadow-xl rounded-2xl flex flex-col justify-around p-4 m-4">
              <div className="w-full break-words">
                <span>Похороны домашних животных</span>
              </div>
              <div className="w-full flex justify-between">
                <span className="text-slate-500">Просмотрено</span>
                <span className="break-words font-semibold text-cyan-500">
                  22 397
                </span>
              </div>
              <div className="w-full flex justify-between">
                <span className="text-slate-500">Сделано заказов</span>
                <span className="break-words font-semibold text-cyan-500">
                  601
                </span>
              </div>
              <div className="w-full flex justify-between">
                <span className="text-slate-500">Оборот</span>
                <span className="break-words font-semibold text-cyan-500">
                  314 555
                </span>
              </div>
            </div>
            <div className="w-64 h-60 shadow-xl rounded-2xl flex flex-col justify-around p-4 m-4">
              <div className="w-full break-words">
                <span>Похороны домашних животных</span>
              </div>
              <div className="w-full flex justify-between">
                <span className="text-slate-500">Просмотрено</span>
                <span className="break-words font-semibold text-cyan-500">
                  22 397
                </span>
              </div>
              <div className="w-full flex justify-between">
                <span className="text-slate-500">Сделано заказов</span>
                <span className="break-words font-semibold text-cyan-500">
                  601
                </span>
              </div>
              <div className="w-full flex justify-between">
                <span className="text-slate-500">Оборот</span>
                <span className="break-words font-semibold text-cyan-500">
                  314 555
                </span>
              </div>
            </div>
            <div className="w-64 h-60 shadow-xl rounded-2xl flex flex-col justify-around p-4 m-4">
              <div className="w-full break-words">
                <span>Похороны домашних животных</span>
              </div>
              <div className="w-full flex justify-between">
                <span className="text-slate-500">Просмотрено</span>
                <span className="break-words font-semibold text-cyan-500">
                  22 397
                </span>
              </div>
              <div className="w-full flex justify-between">
                <span className="text-slate-500">Сделано заказов</span>
                <span className="break-words font-semibold text-cyan-500">
                  601
                </span>
              </div>
              <div className="w-full flex justify-between">
                <span className="text-slate-500">Оборот</span>
                <span className="break-words font-semibold text-cyan-500">
                  314 555
                </span>
              </div>
            </div>
            <div className="w-64 h-60 shadow-xl rounded-2xl flex flex-col justify-around p-4 m-4">
              <div className="w-full break-words">
                <span>Похороны домашних животных</span>
              </div>
              <div className="w-full flex justify-between">
                <span className="text-slate-500">Просмотрено</span>
                <span className="break-words font-semibold text-cyan-500">
                  22 397
                </span>
              </div>
              <div className="w-full flex justify-between">
                <span className="text-slate-500">Сделано заказов</span>
                <span className="break-words font-semibold text-cyan-500">
                  601
                </span>
              </div>
              <div className="w-full flex justify-between">
                <span className="text-slate-500">Оборот</span>
                <span className="break-words font-semibold text-cyan-500">
                  314 555
                </span>
              </div>
            </div>
            <div className="w-64 h-60 shadow-xl rounded-2xl flex flex-col justify-around p-4 m-4">
              <div className="w-full break-words">
                <span>Похороны домашних животных</span>
              </div>
              <div className="w-full flex justify-between">
                <span className="text-slate-500">Просмотрено</span>
                <span className="break-words font-semibold text-cyan-500">
                  22 397
                </span>
              </div>
              <div className="w-full flex justify-between">
                <span className="text-slate-500">Сделано заказов</span>
                <span className="break-words font-semibold text-cyan-500">
                  601
                </span>
              </div>
              <div className="w-full flex justify-between">
                <span className="text-slate-500">Оборот</span>
                <span className="break-words font-semibold text-cyan-500">
                  314 555
                </span>
              </div>
            </div>
            <div className="w-64 h-60 shadow-xl rounded-2xl flex flex-col justify-around p-4 m-4">
              <div className="w-full break-words">
                <span>Похороны домашних животных</span>
              </div>
              <div className="w-full flex justify-between">
                <span className="text-slate-500">Просмотрено</span>
                <span className="break-words font-semibold text-cyan-500">
                  22 397
                </span>
              </div>
              <div className="w-full flex justify-between">
                <span className="text-slate-500">Сделано заказов</span>
                <span className="break-words font-semibold text-cyan-500">
                  601
                </span>
              </div>
              <div className="w-full flex justify-between">
                <span className="text-slate-500">Оборот</span>
                <span className="break-words font-semibold text-cyan-500">
                  314 555
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
