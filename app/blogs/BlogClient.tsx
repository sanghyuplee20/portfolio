"use client";
import ComesInGoesOutUnderline from "@/components/fancy/text/underline-comes-in-goes-out";

interface FoodData {
	[key: string]: {
		name: string;
	};
}

export default function BlogClient({ foodData }: { foodData: FoodData }) {
	return (
		<ul className="gap-2 text-black dark:text-white text-lg sm:text-l lg:text-xl flex flex-col">
			{Object.keys(foodData).map((foodName) => (
				<li key={foodName}>
					<a href={`/blogs/${foodName}`}>
						<ComesInGoesOutUnderline>
							{foodData[foodName].name}
						</ComesInGoesOutUnderline>
					</a>
				</li>
			))}
		</ul>
	);
}
