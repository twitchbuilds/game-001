"use client";
import { useEffect, useState } from "react";

export default function Visits() {
  const [n, setN] = useState<number | null>(null);
  useEffect(() => {
    fetch("/api/visits").then((r) => r.json()).then((d) => setN(d.visits)).catch(() => {});
  }, []);
  return <p className="visits">{n === null ? " " : `You are visitor #${n.toLocaleString()}`}</p>;
}
