import React from "react";
import Image from "next/legacy/image";
import Info from "./infos";

export default function Background() {
  return (
    <div className="flex flex-row items-center justify-center">
      <Image
        src="/../assets/Alex.jpeg"
        alt="Seapunk"
        layout="fill"
        objectFit="cover"
        className="w-10 h-10 rounded-lg"
      />
      {/* <div className="bg-red-800 h-36 w-36 rounded-3xl"></div> */}
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
