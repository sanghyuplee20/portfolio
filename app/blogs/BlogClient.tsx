"use client";
import Link from "next/link";
import ComesInGoesOutUnderline from "@/components/fancy/text/underline-comes-in-goes-out";

interface FoodData {
	[key: string]: {
		name: string;
	};
}

export default function BlogClient({ foodData }: { foodData: FoodData }) {
	return (
		<ul className="gap-2 text-black dark:text-white text-lg sm:text-l lg:text-xl flex flex-col">
			<li>
				<Link href="/blogs/personal_blog">
					<ComesInGoesOutUnderline>
						Compile, Run, Improvise
					</ComesInGoesOutUnderline>
				</Link>
			</li>
			{Object.keys(foodData).map((foodName) => (
				<li key={foodName}>
					<Link href={`/blogs/${foodName}`}>
						<ComesInGoesOutUnderline>
							{foodData[foodName].name}
						</ComesInGoesOutUnderline>
					</Link>
				</li>
			))}
		</ul>
	);
}
