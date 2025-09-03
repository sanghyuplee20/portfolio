"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
	const router = useRouter();

	return (
		<button
			onClick={() => router.back()}
			className="cursor-pointer select-none text-3xl font-bold text-gray-800 dark:text-white hover:text-[#f0a04b] dark:hover:text-[#f0a04b] transition-colors duration-200"
			aria-label="Go back"
		>
			&lt;
		</button>
	);
}
