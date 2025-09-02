"use client";

import { useEffect, useState } from "react";
import ComesInGoesOutUnderline from "@/components/fancy/text/underline-comes-in-goes-out";
import { Sun, Moon } from "lucide-react";
interface FoodData {
	[key: string]: {
		name: string;
	};
}

export default function BlogClient({ foodData }: { foodData: FoodData }) {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
		if (!isDarkMode) {
			document.documentElement.classList.add("dark");
			document.body.style.backgroundColor = "#313338";
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			document.body.style.backgroundColor = "#ffffff";
			localStorage.setItem("theme", "light");
		}
	};

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
		<div>
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
			<div className="fixed bottom-4 right-4">
				<button
					onClick={toggleDarkMode}
					className="p-3 rounded-lg bg-gray-100 dark:bg-[#2b2d31] hover:bg-gray-200 dark:hover:bg-[#36393f] transition-all duration-300 cursor-target"
					aria-label="Toggle dark mode"
				>
					{isDarkMode ? (
						<Sun className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-500" />
					) : (
						<Moon className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
					)}
				</button>
			</div>
		</div>
	);
}
