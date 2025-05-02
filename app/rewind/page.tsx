"use client";
import BuildWithForgeZone from "@/components/BuildWithForgeZone";
import React, { useState, useEffect } from "react";

export default function RewindPage() {
  const [loading, setLoading] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);

  // a fake loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // a fake button loading state
  const handleButtonClick = () => {
    setBtnLoading(true);
    const timer = setTimeout(() => {
      setBtnLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  };
  return (
    <div className="root">
      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-screen py-12">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="container max-w-7xl mx-auto px-4">
          <div className="header">
            <div className="header-title mb-6">
              <h1 className="text-4xl font-bold">Hello your name</h1>
            </div>

            <div className="bg-gradient-to-r bg-[#111] border-white/50 border-2 border-dashed rounded-xl shadow-lg p-8 mb-10">
              <div className="flex items-center space-x-6">
                <img
                  src="https://i.postimg.cc/3xY2cWpD/pfp.png"
                  alt="Profile picture"
                  className="rounded-full w-24 h-24 border-2"
                  width={96}
                  height={96}
                />
                <div className="text-white">
                  <h2 className="text-2xl font-bold">your name</h2>
                  <p className="text-indigo-100">email@forgezone.funny</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-6">
                <div className="p-3 bg-black/30 rounded-lg">
                  <p className="text-gray-400">Tracks</p>
                  <p className="text-2xl font-bold">50</p>
                </div>
                <div className="p-3 bg-black/30 rounded-lg">
                  <p className="text-gray-400">Artists</p>
                  <p className="text-2xl font-bold">50</p>
                </div>
                <div className="p-3 bg-black/30 rounded-lg">
                  <p className="text-gray-400">Genres</p>
                  <p className="text-2xl font-bold">15</p>
                </div>
              </div>
            </div>

            <div className="button-container flex justify-center my-8">
              <button
                disabled={btnLoading}
                type="button"
                className="button"
                onClick={handleButtonClick}
              >
                {btnLoading ? "Generating..." : "Generate My Rewind"}
              </button>
            </div>
          </div>
        </div>
      )}
      <BuildWithForgeZone />
    </div>
  );
}
