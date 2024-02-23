import React from "react";
type Props = {
  title: string;
  description: string;
};

export default function Info({ title, description }: Props) {
  return (
    <div className="flex flex-col items-start m-2 py-1 rounded-lg bg-cyan-950 w-full">
      <h3 className="text-lg px-8 pt-1 leading-none font-semibold">
        {description}
      </h3>
      <p className="text-xs text-amber-200 pl-1 leading-none">{title}</p>
    </div>
  );
}
