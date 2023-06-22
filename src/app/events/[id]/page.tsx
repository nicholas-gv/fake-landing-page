"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { EventData } from "@/types/eventData";
import styles from "./page.module.css";
import Link from "next/link";

export default function Page() {
	const [data, setData] = useState<EventData>();
	const pathname = usePathname();

	useEffect(() => {
		fetch(`http://localhost:8000/api/data/${pathname.replace("/events/", "")}`)
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((error) => console.error("Error:", error));
	}, [pathname]);

	return (
		<>
			{data && (
				<div className={styles.article}>
					<Link href={"/events"}>
						<button className={styles.backButton}>&lt;</button>
					</Link>
					<h1 className={styles.title}>{data.title}</h1>
					<div className={styles.tagContainer}>
						{JSON.parse(data.tags).map((element: string, i: number) => (
							<p key={i}>{element}</p>
						))}
					</div>
					<pre className={styles.textBody}>{data.body}</pre>
				</div>
			)}
		</>
	);
}
