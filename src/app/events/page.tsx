"use client";

import EventCard from "@/ui/event-card";
import Image from "next/image";
import { EventData } from "@/types/eventData";
import { useFetchEvents } from "@/api/eventDataFetcher";
import Loading from "../loading";
import ErrorMessage from "@/ui/error-message";

export default function Events() {
	const importAll = (r: any) => r.keys().map(r);
	const images = importAll((require as any).context("public/event-images", false, /\.(png|jpe?g|svg)$/));
	const { data, error, isLoading } = useFetchEvents().GetEventsAll();

	if (error) {
		return <ErrorMessage AxiosError={error}/>;
	}

	if (isLoading) {
		return <Loading />;
	}

	return (
		<>
			<h1 className="pageTitle">Events</h1>
			<div className="flex justify-center flex-wrap mb-20 [&>*]:m-2">
				{data &&
					data.length !== 0 &&
					data.map((element: EventData, i: number) => (
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
