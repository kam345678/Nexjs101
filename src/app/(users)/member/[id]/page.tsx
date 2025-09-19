"use client";
import { useParams } from "next/navigation";

export default function MemberPage() {
  const params = useParams();
  const id = params?.id;

  return (
    <div>
      <h1 className="text-2xl font-bold text-red-500">
        Member Detail Page id: {id}
      </h1>
    </div>
  );
}