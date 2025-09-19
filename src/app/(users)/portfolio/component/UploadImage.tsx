"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Props {
  onChange: (images: string[]) => void;
  resetSignal?: boolean;
}

export default function UploadImage({ onChange, resetSignal }: Props) {
  const [images, setPreview] = useState<string[]>([]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files) {
    const files = Array.from(e.target.files);
    const urls = files.map((f) => URL.createObjectURL(f));
    setPreview((prev) => {
      // cleanup URL เก่าก่อน
      prev.forEach((u) => URL.revokeObjectURL(u));
      return urls;
    });
    onChange(urls);
  }
};

  useEffect(() => {
    // cleanup current images' object URLs
    images.forEach((u) => URL.revokeObjectURL(u));
    setPreview([]);
    onChange([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetSignal]);

  return (
    <div className="mt-4">
      <input type="file" multiple accept="image/*" onChange={handleUpload} />
      <div className="grid grid-cols-3 gap-2 mt-2">
        {images.map((img, idx) => (
          <div key={idx} className="relative w-32 h-32">
          <Image
          src={img}
          alt={`upload-${idx}`}
          fill
          className="object-cover rounded-lg"/>
          </div>
        ))}
      </div>
    </div>
  );
}