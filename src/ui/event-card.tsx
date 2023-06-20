import Link from "next/link";
import { NextImage } from "@/types/nextImage";
import styles from "./event-card.module.css";

export default function EventCard({
	image,
	title,
	description,
	eventKey,
}: {
	image: NextImage;
	title: string;
	description: React.ReactNode;
	eventKey: string;
}) {
	return (
		<Link className={styles.card} href={`/events/${eventKey}`}>
			<div className={styles.imageContainer}>{image}</div>
			<p className={styles.title}>{title}</p>
			<p className={styles.description}>{description}</p>
		</Link>
	);
}
