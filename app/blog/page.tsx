import { promises as fs } from "fs";
import BlogClient from "./BlogClient";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-jetbrains-mono",
});

export default async function Blog() {
    const file = await fs.readFile(
		process.cwd() + "/app/blog/blogs.json",
		"utf8"
	);
	const foodData = JSON.parse(file);
	return (
		<div
			className={`${jetbrainsMono.className} min-h-screen flex flex-col lg:flex-col bg-white dark:bg-[#313338] transition-colors duration-300 p-8 lg:p-12 gap-8`}
		>
			<div className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight cursor-target text-gray-900 dark:text-white">
				<h1 className="text-[#f0a04b]">Blog</h1>
			</div>
			<div></div>
			<video
				autoPlay
				loop
				muted
				playsInline
				className="w-64 h-64 rounded-4xl"
			>
				<source src="/cat-cooking.webm" type="video/webm" />
				Your browser does not support the video tag.
			</video>

			<BlogClient foodData={foodData} />
		</div>
	);
}
