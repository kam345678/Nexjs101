import { create } from "zustand";

export interface Portfolio {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  school: string;
  gpa: number;
  talent?: string;
  reason: string;
  faculty: string;
  major:string;
  university: string;
  images: string[];
  pdf?: string;
}

interface PortfolioStore {
  portfolios: Portfolio[];
  addPortfolio: (portfolio: Omit<Portfolio,"id">) => void;
}

export const usePortfolioStore = create<PortfolioStore>((set) => ({
  portfolios: [{id: "1",
                firstName: "ก่ำ",
                lastName: "ลุคำ",
                address: "63 หมู่4 ต.หนองหาร อ.สันทราย จ.เชียงใหม่ 50290",
                phone: "0944752130",
                school: "ฝางชนูปถัมภ์",
                gpa: 3.91,
                talent: "เล่นดนตรีได้ในระดับเบื้องต้น",
                reason: "เป็นคนชอบเทคโนโลยีคอมพิวเตอร์อยู่แล้ว",
                faculty: "วิทยาศาสตร์",
                major:"วิทยาการคอมพิวเตอร์",
                university: "วิทยาลัยแม่โจ้",
                images:["/Images/Unknown.jpeg"] },
  ],
  addPortfolio: (portfolio) =>
    set((state) => ({
      portfolios: [...state.portfolios, { ...portfolio, id: String(state.portfolios.length + 1) }],
      
    })),
}));