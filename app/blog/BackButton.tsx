"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="text-3xl font-bold text-gray-800 dark:text-white hover:text-[#f0a04b] transition-colors duration-200"
    >
      &lt;
    </button>
  );
}
