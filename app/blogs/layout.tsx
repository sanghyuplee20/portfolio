"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [mounted, setMounted] = useState(false);

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
		setMounted(true);
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

	// Prevent hydration mismatch
	if (!mounted) {
		return <div>{children}</div>;
	}

	return (
		<div className="relative">
			{children}

			{/* Dark mode toggle */}
			<div className="fixed bottom-4 right-4 z-50">
				<button
					onClick={toggleDarkMode}
					className="p-3 rounded-lg bg-gray-100 dark:bg-[#2b2d31] hover:bg-gray-200 dark:hover:bg-[#36393f] transition-all duration-300 cursor-target shadow-lg"
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
