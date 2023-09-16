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
	const cardClasses = {
		cardThemeColor:
			buttonColor === "tierOne"
				? "before:bg-gray-400"
				: buttonColor === "tierTwo"
				? "before:bg-green"
				: "before:bg-orange",
		buttonType:
			buttonColor == "tierOne"
				? "buttonTertiary"
				: buttonColor == "tierTwo"
				? "buttonSecondary"
				: "buttonPrimary",
	};

	return (
		<div
			className={`
				${cardClasses.cardThemeColor} w-[310px] border-[1px] border-solid border-gray-300 
				rounded-b-md my-3 mx-4 p-7 relative text-center before:content-[''] before:absolute before:top-[-8px]
				before:left-[-1px] before:w-[calc(100%+2px)] before:h-[8px] before:z-10 before:rounded-t-md`}
		>
			<p className="text-sm font-medium mb-3">{cardLabel}</p>
			<p className="text-2xl mb-1">{title}</p>
			<p className="text-gray-600 mb-5">{validityLabel}</p>
			<ul
				className="
					m-auto text-gray-600 mb-20 text-left ml-1 leading-7 [&>li]:before:relative [&>li]:before:inline-block
					[&>li]:before:mr-2 [&>li]:before:content-[url('/check-small-grey.png')]"
			>
				{listOfFeatures.map((element, i) => (
					<li key={i}>{element}</li>
				))}
			</ul>
			<button type="button" className={`${cardClasses.buttonType} absolute bottom-6 left-8 right-8`}>
				{buttonLabel}
			</button>
		</div>
	);
}
