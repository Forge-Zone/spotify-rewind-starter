"use client";
import BuildWithForgeZone from "@/components/BuildWithForgeZone";
import React, { useState, useEffect } from "react";

export default function RewindPage() {
  return (
    <div className="root">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="header">
          <div className="header-title mb-6">
            <h1 className="text-4xl font-bold">Hello your name</h1>
          </div>
        </div>
      </div>
      <BuildWithForgeZone />
    </div>
  );
}
