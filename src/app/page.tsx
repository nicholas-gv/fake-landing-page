import LandingPageSegment from "@/ui/landing-page-segment";
import orangeQuestionMark1 from "@/public/question-mark-product-orange-4.png";
import orangeQuestionMark2 from "@/public/question-mark-product-orange-2.png";
import whiteQuestionMark from "@/public/question-mark-product-white-1.png";
import greenQuestionMark from "@/public/question-mark-product-green-3.png";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<div className="text-center mt-[100px] mb-[250px]">
				<h1 className="text-orange text-6xl mb-8">Our Brand&apos;s Main Message</h1>
				<p className="text-lg leading-6 max-w-lg mx-auto text-gray-950 mb-8">
					With the help of our innovative product, you will never have to worry about a particular
					problem.
				</p>
				<button className="buttonPrimary">Get Started</button>
			</div>
			<LandingPageSegment
				image={<Image src={orangeQuestionMark1} alt="orange-question-mark-1" />}
				title="A Fashionable Product"
				description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, facilis?"
				textAlign="left"
				backgroundColor="primary"
			/>
			<LandingPageSegment
				image={<Image src={greenQuestionMark} alt="green-quesiton-mark" />}
				title="Always Ready to Work"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit rerum numquam quasi, culpa."
				textAlign="right"
				backgroundColor="secondary"
			/>
			<LandingPageSegment
				image={<Image src={whiteQuestionMark} alt="white-question-mark" />}
				title="A Fashionable Product"
				description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quam magni consequatur at odit ratione."
				textAlign="left"
				backgroundColor="primary"
			/>
			<LandingPageSegment
				image={<Image src={orangeQuestionMark2} alt="orange-question-mark" />}
				title="A Fashionable Product"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
				textAlign="right"
				backgroundColor="secondary"
			/>
		</>
	);
}
