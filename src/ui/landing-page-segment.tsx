import styles from "./landing-page-segment.module.css";
import { NextImage } from "@/types/nextImage";

export default function LandingPageSegment({
	image,
	title,
	description,
	textAlign = "left",
	backgroundColor,
}: {
	image: NextImage;
	title: string;
	description: string;
	textAlign: "left" | "right";
	backgroundColor: "primary" | "secondary";
}) {
	return (
		<section
			className={`${styles.section} ${
				backgroundColor == "primary" ? styles.greenBackground : styles.whiteBackground
			}`}
		>
			{textAlign == "left" ? (
				<>
					<div className={styles.messageDiv}>
						<h2 className={styles.sectionMainMessage}>{title}</h2>
						<p className={styles.description}>{description}</p>
						<button
							type="button"
							className={backgroundColor == "primary" ? "buttonPrimary" : "buttonSecondary"}
						>
							Learn More
						</button>
					</div>
					{image}
				</>
			) : (
				<>
					{image}
					<div className={styles.messageDiv}>
						<h2 className={styles.sectionMainMessage}>{title}</h2>
						<p className={styles.description}>{description}</p>
						<button
							type="button"
							className={backgroundColor == "primary" ? "buttonPrimary" : "buttonSecondary"}
						>
							Learn More
						</button>
					</div>
				</>
			)}
		</section>
	);
}
