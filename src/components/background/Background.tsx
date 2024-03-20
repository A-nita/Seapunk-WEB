import React from "react";
import Image from "next/image";
import Info from "./infos";

export default function Background() {
  return (
    <div className="flex flex-row items-center justify-center">
      <div
        className="rounded-xl overflow-hidden"
        style={{ width: 140, height: 140 }}
      >
        <Image
          src="/Alex.jpeg"
          alt="Alex"
          width={140}
          height={140}
          className="rounded-xl"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <div className="px-2">
        <div>
          <div className="flex flex-row justify-between">
            <Info title="Raça" description="Sereia" />
            <Info title="Origem" description="Maruja" />
          </div>
          <div className="flex flex-row justify-between">
            <Info title="Classe" description="Barda" />
            <Info title="Divindade" description="Oceano" />
          </div>
        </div>
        <div className="w-full">
          <h2 className="ml-2 text-xl  font-bold text-center">
            Alexandria Tidalwave
          </h2>
        </div>
      </div>
    </div>
  );
}
