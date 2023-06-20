/* eslint-disable react/jsx-key */
import ProductCard from "@/ui/product-card";
import styles from "./page.module.css";
import FeaturesTable from "@/ui/features-table";
import Image from "next/image";
import greyCheckImage from "@/public/check-sign-grey.png";
import greenCheckImage from "@/public/check-sign-green.png";
import orangeCheckImage from "@/public/check-sign-orange.png";
import orangeQuestionMark from "@/public/question-mark-product-orange-1.png";

const Products = () => {
	return (
		<>
			<h1 className="pageTitle">Products</h1>
			<section className={styles.cardContainer}>
				<ProductCard
					title="Free"
					cardLabel="Starter"
					validityLabel="Forever"
					listOfFeatures={[
						"Feature 1",
						"Lorem ipsum dolor sit amet",
						"Lorem ipsum dolor sit",
						"Lorem ipsum dolor",
						"Lorem ipsum dolor sit",
					]}
					buttonLabel="Choose Starter"
					buttonColor="tierOne"
				></ProductCard>
				<ProductCard
					title="12$/month"
					cardLabel="Professional"
					validityLabel="Billed month-to-month"
					listOfFeatures={[
						"Feature 1",
						"Lorem ipsum dolor sit amet",
						"Lorem ipsum dolor sit",
						"Lorem ipsum dolor",
						"Lorem ipsum dolor sit",
						"Lorem ipsum dolor sit amet",
					]}
					buttonLabel="Choose Starter"
					buttonColor="tierTwo"
				></ProductCard>
				<ProductCard
					title="45$/month"
					cardLabel="Enterprise"
					validityLabel="Billed annually"
					listOfFeatures={[
						"Feature 1",
						"Lorem ipsum dolor sit amet",
						"Lorem ipsum dolor sit",
						"Lorem ipsum dolor",
						"Lorem ipsum dolor sit",
						"Lorem ipsum dolor sit amet",
						"Lorem ipsum dolor sit amet",
						"Lorem ipsum dolor sit",
					]}
					buttonLabel="Choose Starter"
					buttonColor="tierThree"
				></ProductCard>
			</section>
			<section className={styles.tableContainer}>
				<h2>Compare Features</h2>
				{/* each subarray represents a row */}
				{/* <FeaturesTable
					data={[
						["0", "1", "2", "3"],
						["a", "b", "c", "d"],
						["e", "f", "g", "h"],
						["i", "j", "k", "l"],
					]}
				></FeaturesTable> */}
				<FeaturesTable
					data={[
						[
							"",
							<div className={styles.CTAContainer}>
								<p className={styles.bigFontBold}>Starter</p>
								<p className={styles.smallFont}>Free</p>
								<button className="buttonTertiary">Select Plan</button>
							</div>,
							<div className={styles.CTAContainer}>
								<p className={styles.bigFontBold}>Professional</p>
								<p className={styles.smallFont}>12$/month</p>
								<button className="buttonSecondary">Select Plan</button>
							</div>,
							,
							<div className={styles.CTAContainer}>
								<p className={styles.bigFontBold}>Enterprise</p>
								<p className={styles.smallFont}>45$/month</p>
								<button className="buttonPrimary">Select Plan</button>
							</div>,
						],
						["", "", "", ""],
						[<p className={styles.bigFontBold}>Feature Package 1</p>, "", "", ""],
						[
							"Feature 1",
							<Image src={greyCheckImage} alt="grey-check"></Image>,
							<Image src={greenCheckImage} alt="grey-check"></Image>,
							<Image src={orangeCheckImage} alt="grey-check"></Image>,
						],
						[
							"Feature 2",
							<Image src={greyCheckImage} alt="grey-check"></Image>,
							<Image src={greenCheckImage} alt="grey-check"></Image>,
							<Image src={orangeCheckImage} alt="grey-check"></Image>,
						],
						[
							"Feature 3",
							<Image src={greyCheckImage} alt="grey-check"></Image>,
							<Image src={greenCheckImage} alt="grey-check"></Image>,
							<Image src={orangeCheckImage} alt="grey-check"></Image>,
						],
						[
							"Feature 4",
							"",
							<Image src={greenCheckImage} alt="grey-check"></Image>,
							<Image src={orangeCheckImage} alt="grey-check"></Image>,
						],
						[
							"Feature 5",
							"",
							<Image src={greenCheckImage} alt="grey-check"></Image>,
							<Image src={orangeCheckImage} alt="grey-check"></Image>,
						],
						["Feature 6", "", "", <Image src={orangeCheckImage} alt="grey-check"></Image>],
						["Feature 7", "", "", <Image src={orangeCheckImage} alt="grey-check"></Image>],
						["", "", "", ""],
						[<p className={styles.bigFontBold}>Feature Package 2</p>, "", "", ""],
						[
							"Feature 1",
							<Image src={greyCheckImage} alt="grey-check"></Image>,
							<Image src={greenCheckImage} alt="grey-check"></Image>,
							<Image src={orangeCheckImage} alt="grey-check"></Image>,
						],
						[
							"Feature 2",
							<Image src={greyCheckImage} alt="grey-check"></Image>,
							<Image src={greenCheckImage} alt="grey-check"></Image>,
							<Image src={orangeCheckImage} alt="grey-check"></Image>,
						],
						[
							"Feature 3",
							"",
							<Image src={greenCheckImage} alt="grey-check"></Image>,
							<Image src={orangeCheckImage} alt="grey-check"></Image>,
						],
						["Feature 4", "", "", <Image src={orangeCheckImage} alt="grey-check"></Image>],
					]}
				></FeaturesTable>
			</section>
			<section className={styles.empoweringBrandsSection}>
				<h2 className={styles.empowerMessage}>We Empower These Brands</h2>
				<div className={styles.brandImagesContainer}>
					<Image src={orangeQuestionMark} alt={"orange-question-mark"} />
					<Image src={orangeQuestionMark} alt={"orange-question-mark"} />
					<Image src={orangeQuestionMark} alt={"orange-question-mark"} />
					<Image src={orangeQuestionMark} alt={"orange-question-mark"} />
					<Image src={orangeQuestionMark} alt={"orange-question-mark"} />
					<Image src={orangeQuestionMark} alt={"orange-question-mark"} />
					<Image src={orangeQuestionMark} alt={"orange-question-mark"} />
					<Image src={orangeQuestionMark} alt={"orange-question-mark"} />
				</div>
			</section>
		</>
	);
};

export default Products;
