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
			className={` 
				${backgroundColor === "primary" ? "bg-green text-white" : "bg-white text-black"} 
				${textAlign === "left" ? "" : "flex-row-reverse"} 
				flex justify-around items-center w-full min-h-[590px] max-[820px]:flex-col max-[820px]:my-[50]`}
		>
			<div className="max-[820px]:text-center">
				<h2 className="mb-[15px] text-5xl">{title}</h2>
				<p className="mb-[25px] text-lg max-[640px]:text-md max-[640px]:leading-5 
				max-[820px]:max-w-[550px] max-[640px]:max-w-[350px] mx-auto">
					{description}
				</p>
				<button
					type="button"
					className={`${backgroundColor === "primary" ? "buttonPrimary" : "buttonSecondary"}`}
				>
					Learn More
				</button>
			</div>
			{image}
		</section>
	);
}
