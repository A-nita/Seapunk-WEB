import React from "react";
type Props = {
  title: string;
  value: number;
  mod: string;
};

export default function Atributo({ title, value, mod }: Props) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl p-4 h-24 w-24 bg-cyan-900">
      <span className="text-amber-200 text-xs font-medium">{title}</span>

      <span className="text-amber-200 text-2xl font-semibold">{mod}</span>
      <span className="text-amber-200 text-xs font-medium">{value}</span>
    </div>
  );
}
