/* eslint-disable react/jsx-key */
import ProductCard from "@/ui/product-card";
import FeaturesTable from "@/ui/features-table";
import Image from "next/image";
import greyCheckImage from "@/public/check-sign-grey.png";
import greenCheckImage from "@/public/check-sign-green.png";
import orangeCheckImage from "@/public/check-sign-orange.png";
import orangeQuestionMark from "@/public/question-mark-product-orange-1.png";

const Products = () => {
  return (
    <>
      <h1 className="text-6xl text-center mb-12">Products</h1>
      <section className="container mx-auto flex justify-center max-w-screen-xl mb-32 flex-wrap">
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
        />
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
        />
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
        />
      </section>
      <section className="container mx-auto flex flex-col items-center mb-20 ">
        <h2 className="text-[42px] mb-20 text-center">Compare Features</h2>
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
					<div>
						<p className="mt-1 font-semibold text-lg">Starter</p>
						<p className="mt-1 text-sm">Free</p>
						<button className="mt-4 buttonTertiary">Select Plan</button>
					</div>,
					<div>
						<p className="mt-1 font-semibold text-lg">Professional</p>
						<p className="mt-1 text-sm">12$/month</p>
						<button className="mt-4 buttonSecondary">Select Plan</button>
					</div>,
					,
					<div>
						<p className="mt-1 font-semibold text-lg">Enterprise</p>
						<p className="mt-1 text-sm">45$/month</p>
						<button className="mt-4 buttonPrimary">Select Plan</button>
					</div>,
				],
				["", "", "", ""],
				[<p className="font-semibold text-lg">Feature Package 1</p>, "", "", ""],
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
				[<p className="font-semibold text-lg">Feature Package 2</p>, "", "", ""],
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
		/>
      </section>
      <section className="flex bg-green text-white pt-20 pb-[50px] items-center flex-col my-[200px]">
        <h2 className="text-5xl text-center mb-7 max-[460px]:text-4xl">We Empower These Brands</h2>
        <div className="container mx-auto flex mb-5 flex-wrap justify-center max-w-[1000px] [&>*]:mx-12 [&>*]:mt-12">
          <Image src={orangeQuestionMark} alt="orange-question-mark" className="m-6" />
          <Image src={orangeQuestionMark} alt="orange-question-mark" className="m-6" />
          <Image src={orangeQuestionMark} alt="orange-question-mark" className="m-6" />
          <Image src={orangeQuestionMark} alt="orange-question-mark" className="m-6" />
          <Image src={orangeQuestionMark} alt="orange-question-mark" className="m-6" />
          <Image src={orangeQuestionMark} alt="orange-question-mark" className="m-6" />
          <Image src={orangeQuestionMark} alt="orange-question-mark" className="m-6" />
          <Image src={orangeQuestionMark} alt="orange-question-mark" className="m-6" />
        </div>
      </section>
    </>
  );
};

export default Products;
