import Link from "next/link";
import { NextImage } from "@/types/nextImage";

export default function EventCard({
	image,
	title,
	description,
	eventKey,
}: {
	image: NextImage;
	title: string;
	description: React.ReactNode;
	eventKey: number;
}) {
	return (
		<Link
			href={`/events/${eventKey}`}
			className="w-[512px] min-h-[400px] shadow-xl p-6 ease-in-out transition-transform transform duration-300 hover:scale-105 hover:shadow-2xl relative group"
		>
			<div className="overflow-hidden aspect-w-16 aspect-h-10 object-contain">{image}</div>
			<p className="text-lg font-roboto-medium my-[15px] leading-6">{title}</p>
			<p className="text-sm">{description}</p>
		</Link>
	);
}
