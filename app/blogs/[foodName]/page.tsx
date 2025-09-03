import React from "react";
import { promises as fs } from "fs";
import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import BackButton from "../BackButton";
import { Badge } from "@/components/ui/badge";

type PageProps = {
	params: Promise<{ foodName: string }>;
};

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-jetbrains-mono",
});

async function FoodPage({ params }: PageProps) {
	const file = await fs.readFile(
		process.cwd() + "/app/blogs/blogs.json",
		"utf8"
	);

	const foodData = JSON.parse(file);
	const { foodName } = await params;

	if (!foodData[foodName]) {
		return <div>Food not found</div>;
	}

	const foodDetails = foodData[foodName];

	return (
		<div
			className={`${jetbrainsMono.className} min-h-screen flex flex-col lg:flex-col bg-white dark:bg-[#313338] transition-colors duration-300 p-8 lg:p-12 gap-8`}
		>
			<div className="flex flex-row gap-4">
				<BackButton />
				<h1 className="text-4xl text-[#f0a04b]">{foodDetails.name}</h1>
			</div>
			<div className="flex flex-row gap-2">
				<Badge variant="default">{foodDetails.difficulty}</Badge>
				<Badge variant="default">{`rating: ${foodDetails.rating}`}</Badge>
			</div>

			{foodDetails.image != "" ? (
				<div className="w-full flex justify-center">
					<Image
						src={foodDetails.image}
						alt={foodDetails.name}
						width={500}
						height={300}
						className="object-cover rounded-lg"
					/>
				</div>
			) : (
				<></>
			)}
			<div>
				<h2 className="text-2xl text-[#f0a04b] mb-2">Recipe</h2>
				{foodDetails.recipe.map((food: string, index: number) => (
					<p key={index}>{food}</p>
				))}
			</div>

			<div>
				<h2 className="text-2xl text-[#f0a04b] mb-2">Instructions</h2>
				{foodDetails.instructions.map(
					(instruct: string, index: number) => (
						<p key={index}>{instruct}</p>
					)
				)}
			</div>
				
			<div>
				<h2 className="text-2xl text-[#f0a04b] mb-2">Comments</h2>
				<p>{foodDetails.comment}</p>

			</div>
		</div>
	);
}

export default FoodPage;
