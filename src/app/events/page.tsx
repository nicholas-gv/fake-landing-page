"use client";

import EventCard from "@/ui/event-card";
import Image from "next/image";
import { EventData } from "@/types/eventData";
import { useEventData } from "@/api/eventDataFetcher";

export default function Events() {
	const importAll = (r: any) => r.keys().map(r);
	const images = importAll((require as any).context("public/event-images", false, /\.(png|jpe?g|svg)$/));

	const { eventData, isLoading, error } = useEventData()

	if (error) {
		console.error("Error:", error);
  	}

	if (isLoading) {
		return "Loading...";
	}

	return (
		<>
			<h1 className="pageTitle">Events</h1>
			<div className="flex justify-center flex-wrap mb-20 [&>*]:m-2">
				{eventData.length !== 0 &&
					eventData.map((element: EventData, i: number) => (
						<EventCard
							image={<Image src={images[i].default} alt={`event-${i + 1}-thumbnail`}></Image>}
							title={element.title}
							description={`${element.body.slice(0, 320)}...`}
							key={i}
							eventKey={i}
						></EventCard>
					))}
			</div>
		</>
	);
}
