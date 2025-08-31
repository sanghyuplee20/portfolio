"use client";

import { useEffect, useState } from "react";
import ComesInGoesOutUnderline from "@/components/fancy/text/underline-comes-in-goes-out";

interface FoodData {
	[key: string]: {
		name: string;
	};
}

export default function BlogClient({ foodData }: { foodData: FoodData }) {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;
		if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
			setIsDarkMode(true);
			document.documentElement.classList.add("dark");
			document.body.style.backgroundColor = "#313338";
		} else {
			document.body.style.backgroundColor = "#ffffff";
		}
	}, []);

	return (
		<ul className="gap-2 text-black dark:text-white text-lg sm:text-l lg:text-xl flex flex-col">
			{Object.keys(foodData).map((foodName) => (
				<li key={foodName}>
					<a href={`/blog/${foodName}`}>
						<ComesInGoesOutUnderline>
							{foodData[foodName].name}
						</ComesInGoesOutUnderline>
					</a>
				</li>
			))}
		</ul>
	);
}
