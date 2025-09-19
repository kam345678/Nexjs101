
import PortfolioForm from "../portfolio/component/PortfolioForm";
import PortfolioTable from "../portfolio/component/PortfolioTable";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-950 p-8">
      <h1 className="text-3xl font-bold text-white mb-6">
        📑 Portfolio Submission (TCAS69)
      </h1>
      <PortfolioForm />
      <PortfolioTable />
    </main>
  );
}