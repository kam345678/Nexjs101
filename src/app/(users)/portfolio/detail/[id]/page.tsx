"use client";
import { useParams } from "next/navigation";
import { usePortfolioStore } from "../../../../../store/portfolioStore";

export default function PortfolioDetail() {
  const { id } = useParams();
  const portfolio = usePortfolioStore((s) =>
    s.portfolios.find((p) => p.id === id)
  );

  if (!portfolio) return <div className="p-4 text-red-400">ไม่พบข้อมูล</div>;
  console.log("portfolio.images", portfolio.images);

  
  return (
    <div className="min-h-screen bg-gray-950 p-8 text-white flex " >
        <div>
          {portfolio.images.length > 0 && (
            <div className="grid grid-cols-3 gap-2 mt-4">
              {portfolio.images.map((img, i) => (
                <div key={i} className="relative w-70 h-100 ">
                  <img
                    src={img}
                    alt="portfolio"
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          )}
          <h1 className="text-2xl font-bold mb-2 mt-5">
            {portfolio.id}. {portfolio.firstName} {portfolio.lastName}
          </h1>
          <p>📍 ที่อยู่: {portfolio.address}</p>
          <p>📞 เบอร์โทร: {portfolio.phone}</p>
          <p>🏫 โรงเรียน: {portfolio.school}</p>
          <p>📊 GPA: {portfolio.gpa.toFixed(2)}</p>
          <p>🎯 ความสามารถพิเศษ: {portfolio.talent}</p>
          <p>💡 เหตุผล: {portfolio.reason}</p>
          <p>📚 คณะที่เลือก: {portfolio.faculty}</p>
          <p>📚 สาขาที่เลือก: {portfolio.major}</p>
          <p>🏛️ มหาวิทยาลัย: {portfolio.university}</p>
          
          <a
              href={portfolio.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline mb-4"
            >
              📄 ดูไฟล์ portfolio PDF
          </a>
        </div>

        <div className="min-h-screen w-full">
          {portfolio.pdf ? (
            <div className="ml-8 h-full">
              <iframe
                src={portfolio.pdf}
                className="w-full h-full rounded-lg"
                title="PDF Preview"
              />
            </div>
          ) : (
            <div className="ml-8 h-full flex items-center justify-center text-red-500 text-lg font-semibold">
              ❌ ยังไม่ได้อัปโหลด Portfolio PDF
            </div>
          )}
        </div>
      </div>
  );
}