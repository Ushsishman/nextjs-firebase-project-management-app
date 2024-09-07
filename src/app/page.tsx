"use client";
import Header from "@/layouts/Header";

export default function Home() {
  return (
    <div className="col-span-4">
      <Header currentPage="Dashboard" />
      <div>
        <p>Main part</p>
        <p>Welcome</p>
      </div>
    </div>
  );
}
