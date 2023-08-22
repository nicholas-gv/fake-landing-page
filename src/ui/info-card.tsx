import styles from "./info-card.module.css";
import Link from "next/link";

export default function InfoCard({
	children,
	title,
	href,
}: {
	children: React.ReactNode;
	title: string;
	href: string;
}) {
	return (
		<div className={styles.infoCardContainer}>
			<p className={styles.title}>{title}</p>
			<p className={styles.description}>{children}</p>
			<Link className={styles.link} href={href}>
				Learn More
			</Link>
			<span className={styles.gt}>&gt;</span>
		</div>
	);
}
