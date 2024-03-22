"use client";

import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const fetchDataFromApi = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/users", {
        headers: {
          Accept: "application/json",
          method: "GET",
        },
      });
      if (response) {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="text-3xl text-blue-500 font-bold">Hello</div>
      <button
        className="mt-10 p-2 border rounded-md bg-slate-600"
        onClick={() => fetchDataFromApi()}
      >
        {isLoading ? "Loading..." : "Call my api"}
      </button>
    </main>
  );
}
