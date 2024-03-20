import React, { useState } from "react";

type ContadorProps = {
  type: "Vida" | "Mana";
  atual?: number;
  max?: number;
  temp?: number;
};

export default function Contador({ type, atual, max }: ContadorProps) {
  // const [temp, setTemp] = useState("0");
  return (
    <div className="flex flex-row items-center justify-center bg-cyan-950 rounded-lg">
      <div className="flex flex-col gap-2 w-20 p-4">
        <button className="border-2 border-amber-200 rounded-lg py-1 font-bold">
          +
        </button>
        <input
          type="text"
          className="rounded-lg bg-cyan-950 border-2 border-amber-200 flex-1 text-center py-1 focus:outline-none"
          // como remover os botoes de aumentar e diminuito do input?
        />
        <button className="border-2 border-amber-200 rounded-lg font-bold py-1">
          -
        </button>
      </div>

      <div className="flex items-center justify-between flex-col px-2 py-4 h-full">
        <div className="flex flex-row gap-4">
          <div className="flex flex-col items-center justify-end gap-4 pt-1">
            <span className="text-amber-200">Atuais</span>
            <span className="text-3xl font-semibold">{atual}</span>
          </div>
          <div className="flex flex-col items-center justify-end">
            <span className="text-3xl font-semibold text-amber-200">/</span>
          </div>
          <div className="flex flex-col items-center justify-end gap-4 pt-1">
            <span className="text-amber-200">Max.</span>
            <span className="text-3xl font-semibold">{max}</span>
          </div>
          <div className="flex flex-col items-center justify-end ml-4 gap-4 pt-1">
            <span className="text-amber-200">Temp.</span>
            <input
              className="text-3xl font-semibold w-10 bg-cyan-950 focus:outline-none text-center"
              type="text"
              placeholder="--"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center text-2xl font-bold text-amber-200 pr-10">
          {type}
        </div>
      </div>
    </div>
  );
}
