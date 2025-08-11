"use client";
import React from "react";
import Link from "next/link";

export default function ExplorePrototypeModalContent() {
  const fakeSections = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Markets", path: "/markets" },
  ];

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <h2 className="text-2xl font-bold text-center">Explore the Prototype</h2>
      <p className="text-center text-sm text-muted-foreground">
        Jump into different sections and see how the interface behaves.
      </p>
      <nav className="flex flex-col gap-2">
        {fakeSections.map((sec, i) => (
          <Link
            key={i}
            href={sec.path}
            className="border rounded-xl px-4 py-2 hover:bg-accent hover:text-white transition"
          >
            {sec.name}
          </Link>
        ))}
      </nav>

      <div className="text-center">
        <p>This is a visual prototype. No live data connected.</p>
      </div>
    </div>
  );
}
