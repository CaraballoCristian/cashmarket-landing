"use client";
import React from "react";

export default function WatchDemoModalContent() {
  return (
    <div className="flex flex-col gap-8 w-full md:min-w-[600px] lg:min-w-[800px] ">
      <h2 className="text-2xl font-bold text-center">Watch the Demo</h2>
      <div className="aspect-video rounded-xl overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Platform Demo"
          allowFullScreen
          className="w-full h-full"
        />
      </div>

      {/* Disclaimer */}
      <div className="text-center">
        <p>This is a visual prototype. The video is for demo purposes.</p>
      </div>
    </div>
  );
}
