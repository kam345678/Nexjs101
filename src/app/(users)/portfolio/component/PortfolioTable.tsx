"use client";
import Link from "next/link";
import { usePortfolioStore } from "../../../../store/portfolioStore";
import { useState } from "react";

export default function PortfolioTable() {
  const portfolios = usePortfolioStore((s) => s.portfolios);
  const [sortByGPA, setSortByGPA] = useState<"asc" | "desc" | null>(null);
  const [sortByOrder, setSortByOrder] = useState<"asc" | "desc" | null>(null);

  // Sort portfolios based on selected sort type
  const sorted = [...portfolios].sort((a, b) => {
    if (sortByGPA) {
      return sortByGPA === "asc" ? a.gpa - b.gpa : b.gpa - a.gpa;
    }
    if (sortByOrder) {
      return sortByOrder === "asc" ? Number(a.id) - Number(b.id) : Number(b.id) - Number(a.id);
    }
    return 0;
  });

  return (
    <div className="mt-6">
      <button
        onClick={() => {
          // Clear order sort before toggling GPA sort
          setSortByOrder(null);
          setSortByGPA(sortByGPA === "asc" ? "desc" : "asc");
        }}
        className="mb-2 bg-purple-600 text-white px-4 py-1 rounded-xl mr-2"
      >
        จัดเรียงตาม GPA {sortByGPA === "asc" ? "⬆️" : "⬇️"}
      </button>
      <button
        onClick={() => {
          // Clear GPA sort before toggling order sort
          setSortByGPA(null);
          setSortByOrder(sortByOrder === "asc" ? "desc" : "asc");
        }}
        className="mb-2 bg-green-600 text-white px-4 py-1 rounded-xl"
      >
        จัดเรียงตามลำดับ {sortByOrder === "asc" ? "⬆️" : "⬇️"}
      </button>

      <table className="w-full border border-gray-600 text-white">
        <thead className="bg-gray-800">
          <tr>
            <th className="p-2">ลำดับ</th>
            <th className="p-2">ชื่อ</th>
            <th className="p-2">โรงเรียน</th>
            <th className="p-2">GPA</th>
            <th className="p-2">รายละเอียด</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((p, index) => (
            <tr key={p.id} className="border-t border-gray-700 text-center">
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{p.firstName} {p.lastName}</td>
              <td className="p-2">{p.school}</td>
              <td className="p-2">{p.gpa.toFixed(2)}</td>
              <td className="p-2">
                <Link href={`/portfolio/detail/${p.id}`} className="text-blue-400 hover:underline">
                  ดูเพิ่มเติม
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}