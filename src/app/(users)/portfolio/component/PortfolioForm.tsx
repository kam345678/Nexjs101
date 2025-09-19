"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePortfolioStore } from "../../../../store/portfolioStore";
import UploadImage from "../component/UploadImage";
import { useState } from "react";

const schema = z.object({
  firstName: z.string().min(1, "กรุณากรอกชื่อ"),
  lastName: z.string().min(1, "กรุณากรอกนามสกุล"),
  address: z.string().min(1,"กรุณากรอกข้อมูล"),
  phone: z.string().regex(/^[0-9]{10}$/, "เบอร์โทรไม่ถูกต้อง"),
  school: z.string().min(1,"กรุณากรอกข้อมูล"),
  gpa: z.number().min(0).max(4,"กรุณากรอกข้อมูล"),
  talent: z.string().min(1,"กรุณากรอกข้อมูล"),
  reason: z.string().min(5,"กรุณากรอกข้อมูล"),
  faculty: z.string().min(1,"กรุณากรอกข้อมูล"),
  major: z.string().min(1,"กรุณากรอกข้อมูล"),
  university: z.string().min(1,"กรุณากรอกข้อมูล"),
});

type FormData = z.infer<typeof schema>;

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        reject("Failed to convert file to base64");
      }
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

export default function PortfolioForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "สมชาย",
      lastName: "ใจดี",
      gpa: 4,
      address:"151 ม.10 อ.สันทราย เชียงใหม่",
      phone:"0944752130",
      school:"สาธิต",
      talent:"เล่นบาส",
      reason:"อยากเป็น โปรแกรมเมอร์",
      faculty: "วิทยาศาสตร์",
      major:"วิทยาการคอมพิวเตอร์",
      university:"แม่โจ้",
    }
  });

  const addPortfolio = usePortfolioStore((s) => s.addPortfolio);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [pdfFile, setPdfFile] = useState<string | null>(null);
  const [resetSignal, setResetSignal] = useState(false); 

  const onSubmit = async (data: FormData) => {
    const formattedGpa = parseFloat(data.gpa.toFixed(2));
    // Convert each File to base64 string
    const base64Images = await Promise.all(imageFiles.map(fileToBase64));
    addPortfolio({ ...data, gpa: formattedGpa, images: base64Images, pdf: pdfFile || undefined });
    reset();
    setImageFiles([]);
    setPdfFile(null);
    setResetSignal(prev => !prev); 
  };

  const handleClear = () => {
    reset({
      firstName: "",
      lastName: "",
      address: "",
      phone: "",
      school: "",
      gpa: 0,
      talent: "",
      reason: "",
      faculty: "",
      major: "",
      university: "",
    });
    setImageFiles([]);
    setPdfFile(null);
    setResetSignal(prev => !prev);
  };

  const handlePdfUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const fileUrl = URL.createObjectURL(file);
      setPdfFile(fileUrl);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 bg-gray-900 rounded-xl text-white shadow-lg"
    >
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label>ชื่อ:</label>
          <input {...register("firstName")} placeholder="กรอกชื่อ" className="p-2 rounded text-white" />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
        </div>
        <div>
          <label>นามสกุล:</label>
          <input {...register("lastName")} placeholder="กรอกนามสกุล" className="p-2 rounded text-white" />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
        </div>
        
        <div>
          <label>ที่อยู่:</label>
          <input {...register("address")} placeholder="ป้อนที่อยู่" className="col-span-2 p-2 rounded text-white w-150" />
          {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
        </div>
        <div>
          <label>เบอร์โทร:</label>
          <input {...register("phone")} placeholder="ป้อนเบอร์โทร" className="p-2 rounded text-white" />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>
        <div>
          <label>โรงเรียน:</label>
          <input {...register("school")} placeholder="โรงเรียน" className="p-2 rounded text-white" />
          {errors.school && <p className="text-red-500 text-sm">{errors.school.message}</p>}
        </div>
        <div>
          <label>GPA:</label>
          <input type="number" step="0.01" {...register("gpa", { valueAsNumber: true })} placeholder="GPA" className="p-2 rounded text-white" />
          {errors.gpa && <p className="text-red-500 text-sm">{errors.gpa.message}</p>}
        </div>
        <div>
          <label>ความสามารถพิเศษ:</label>
          <input {...register("talent")} placeholder="ความสามารถพิเศษ" className="col-span-2 p-2 rounded text-white" />
          {errors.talent && <p className="text-red-500 text-sm">{errors.talent.message}</p>}
        </div>
        <div>
          <div className="flex iteme-center">
            <label className="p-2">เหตุผลในการสมัคร:</label>
            <textarea {...register("reason")} placeholder="เหตุผลในการสมัคร" className="col-span-2 p-2 rounded text-white w-150" />
          </div>
          {errors.reason && <p className="text-red-500 text-sm">{errors.reason.message}</p>}
        </div>
       
        <div>
          <label>คณะที่เลือก:</label>
          <input {...register("faculty")} placeholder="คณะที่เลือก" className="p-2 rounded text-white w-100" />
          {errors.faculty && <p className="text-red-500 text-sm">{errors.faculty.message}</p>}
        </div>
        <div>
          <label>สาขาที่เลือก:</label>
          <input {...register("major")} placeholder="สาขาที่เลือก" className="p-2 rounded text-white w-100" />
          {errors.major && <p className="text-red-500 text-sm">{errors.major.message}</p>}
        </div>
        <div>
          <label>มหาวิทยาลัย:</label>
          <input {...register("university")} placeholder="มหาวิทยาลัย" className="p-2 rounded text-white w-100" />
          {errors.university && <p className="text-red-500 text-sm">{errors.university.message}</p>}
        </div>
      </div>

      <div className="flex">
        <label className="mt-4">รูปถ่าย 1.5 นิ้ว : </label>
        {/* 👇 ส่ง resetSignal ไปที่ UploadImage */}
        <UploadImage onChange={setImageFiles} resetSignal={resetSignal} />
      </div>

      <div className="flex items-center mt-4">
        <label className="mr-2">ไฟล์ PDF (Resume/Portfolio): </label>
        <input type="file" accept="application/pdf" onChange={handlePdfUpload} />
      </div>

      {pdfFile &&(
       <p className="text-green-400 mt-2">📄 เลือกไฟล์แล้ว (PDF)</p>
      )}

      <div className="flex gap-4">
        <button type="button" onClick={handleClear} className="mt-4 w-50 bg-red-600 hover:bg-red-700 p-2 rounded-xl">
          clear
        </button>
        <button type="submit" className="mt-4 w-full bg-blue-600 hover:bg-blue-700 p-2 rounded-xl">
          เพิ่ม Portfolio
        </button>
      </div>
    </form>
  );
}