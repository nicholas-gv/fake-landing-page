import styles from "./product-card.module.css";

export default function ProductCard({
	title,
	cardLabel,
	validityLabel,
	listOfFeatures,
	buttonLabel,
	buttonColor,
}: {
	title: string;
	cardLabel: string;
	validityLabel: string;
	listOfFeatures: Array<string>;
	buttonLabel: string;
	buttonColor: "tierOne" | "tierTwo" | "tierThree";
}) {
	return (
		<div
			className={
				buttonColor == "tierOne"
					? styles.cardOne
					: buttonColor == "tierTwo"
					? styles.cardTwo
					: styles.cardThree
			}
		>
			<p className={styles.cardLabel}>{cardLabel}</p>
			<p className={styles.title}>{title}</p>
			<p className={styles.validityLabel}>{validityLabel}</p>
			<ul className={styles.unorderedList}>
				{listOfFeatures.map((element, i) => (
					<li key={i}>{element}</li>
				))}
			</ul>
			<button
				type="button"
				className={
					buttonColor == "tierOne"
						? "buttonTertiary"
						: buttonColor == "tierTwo"
						? "buttonSecondary"
						: "buttonPrimary"
				}
			>
				{buttonLabel}
			</button>
		</div>
	);
}
