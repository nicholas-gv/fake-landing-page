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
		<div className="my-5 py-5">
			<p className="text-lg font-bold">{title}</p>
			<p className="mt-2 mb-3">{children}</p>
			<Link href={href} className="!text-blue hover:underline hover:underline-offset-2">
				Learn More
			</Link>
			<span className="text-blue ml-1 font-semibold">&gt;</span>
		</div>
	);
}
