"use client";

import EventCard from "@/ui/event-card";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { EventData } from "@/types/eventData";

export default function Events() {
	const [data, setData] = useState<Array<EventData>>([]);
	const importAll = (r: any) => r.keys().map(r);
	const images = importAll((require as any).context("public/event-images", false, /\.(png|jpe?g|svg)$/));

	useEffect(() => {
		fetch("/api/data")
			.then((response) => response.json())
			.then((data) => setData(data.data))
			.catch((error) => console.error("Error:", error));
	}, []);

	return (
		<>
			<h1 className="pageTitle">Events</h1>
			<div className={styles.cardContainer}>
				{data.length !== 0 &&
					data.map((element, i) => (
						<EventCard
							image={<Image src={images[i].default} alt={`event-${i + 1}-thumbnail`}></Image>}
							title={element.title}
							description={`${element.body.slice(0, 320)}...`}
							key={i}
							eventKey={i + 1}
						></EventCard>
					))}
			</div>
		</>
	);
}
