import { promises as fs } from "fs";
import BlogClient from "./BlogClient";
import { JetBrains_Mono } from "next/font/google";
import BackButton from "./BackButton";

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
			<div className="text-4xl flex flex-row sm:text-5xl lg:text-6xl font-semibold tracking-tight cursor-target text-gray-900 dark:text-white sm:gap-4 md:gap-4 lg:gap-8 ">
				<BackButton />
				<h1 className="text-[#f0a04b]">Blog</h1>
			</div>
			<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
				<BlogClient foodData={foodData} />

				<video
					autoPlay
					loop
					muted
					playsInline
					preload="metadata"
					aria-label="cat gif"
					className="w-64 h-auto rounded-3xl md:ml-10 mt-2 md:mt-0 order-first md:order-last"
				>
					<source src="/cat-cooking.webm" type="video/webm" />
					Your browser does not support the video tag.
				</video>
			</div>
		</div>
	);
}
