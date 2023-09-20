"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEventData } from "@/api/eventDataFetcher";

export default function Page() {
	const eventID = Number.parseInt(usePathname().replace("/events/", ""));
	const { eventData, isLoading, error } = useEventData(eventID);

	if (error) {
		console.error("Error:", error);
	}

	if (isLoading) {
		return "Loading...";
	} 

	return (
		<>
			{eventData && (
				<div className="max-w-[1000px] mx-auto mt-10 mb-20 px-4">
					<Link href="/events">
						<button
							className="
								font-sans bg-orange text-white text-[50px] px-3 rounded-[50%] border-none mb-6
								cursor-pointer transition-transform duration-300 ease-out hover:translate-y-[2px]"
						>
							&lt;
						</button>
					</Link>
					<h1 className="text-5xl max-md:text-4xl">{eventData.title}</h1>
					<div
						className="
							mt-6 mb-10 [&>p:nth-child(1)]:bg-green [&>p:nth-child(2)]:bg-orange
							[&>p:nth-child(3)]:bg-blue [&>p:nth-child(4)]:bg-purple [&>p:nth-child(5)]:bg-red"
					>
						{eventData.tags.map((element: string, i: number) => (
							<p
								key={i}
								className="font-roboto-medium inline-block rounded-3xl px-3 py-2 mr-1 mt-1 text-white"
							>
								{element}
							</p>
						))}
					</div>
					<pre className="font-sans break-words whitespace-pre-wrap leading-6 ml-1">
						{eventData.body}
					</pre>
				</div>
			)}
		</>
	);
}
