import React, { useState } from "react";
import Contador from "@/components/Contador";
import Background from "@/components/background/Background";
import Atributo from "@/components/atributo";

export default function Home() {
  return (
    <main className="flex  min-h-screen flex-row items-start justify-start gap-10 p-5 bg-slate-950">
      {/* esquerda da tela */}
      <div className="flex flex-col gap-3 min-h-fulls">
        {/* header */}
        <div className="flex flex-row gap-4">
          <Background />
          <Contador type="Vida" atual={37} max={59} temp={11} />
          <Contador type="Mana" atual={0} max={44} temp={2} />
        </div>
        {/* status bar */}
        <div className="flex flex-col w-full items-start justify-center">
          <h2 className="text-3xl text-amber-200 font-semibold mb-1">Status</h2>
          <div className="flex flex-row w-full gap-5">
            <div className="flex flex-row bg-cyan-950 h-20  min-w-3/5 w-3/5 p-4 rounded-3xl"></div>
            <input
              className="flex flex-row bg-cyan-950 h-20   w-2/5 p-4 rounded-3xl focus:outline-none"
              type="text"
            />
          </div>
        </div>
        <div
          className="flex-1 min-h-full h-64
        min-w-full rounded-3xl bg-cyan-950 p-2"
        >
          <div className="flex justify-around px-4 py-2">
            <span className="text-lg font-bold">Ações</span>
            <span className="text-lg font-medium text-amber-200">Magias</span>
            <span className="text-lg font-medium text-amber-200">
              Inventário
            </span>
            <span className="text-lg font-medium text-amber-200">Armas</span>
            <span className="text-lg font-medium text-amber-200">
              Anotações
            </span>
            <span className="text-lg font-medium text-amber-200">
              Características
            </span>
          </div>
          <div className="bg-slate-900 flex-1 h-full min-h-full"></div>
        </div>
      </div>
      {/* atributos */}
      <div className="flex flex-col gap-4 items-center">
        {/* level */}
        <div className="flex flex-col items-center justify-center bg-amber-200 rounded-3xl p-4 h-28 w-28">
          <span className="text-slate-950 text-6xl font-bold">10</span>
          <span className="text-slate-950 text-lg font-semibold">Level</span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-3xl p-4 h-28 w-28 border-2 border-cyan-950">
          <span className="text-amber-200 text-6xl font-semibold">19</span>
          <span className="text-amber-200 text-lg font-medium">Defesa</span>
        </div>
        <div className="flex flex-col items-center justify-center rounded-3xl p-2 gap-4 bg-cyan-950">
          <Atributo title="FOR" mod="+2" value={12}></Atributo>
          <Atributo title="DES" mod="+3" value={16}></Atributo>
          <Atributo title="CON" mod="+2" value={12}></Atributo>

          <Atributo title="INT" mod="-1" value={8}></Atributo>
          <Atributo title="SAB" mod="-1" value={9}></Atributo>
          <Atributo title="CAR" mod="+5" value={20}></Atributo>
        </div>
      </div>
    </main>
  );
}
