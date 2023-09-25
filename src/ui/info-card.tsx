import Link from "next/link";

export default function InfoCard({
	children,
	title,
	href,
	CTAText
}: {
	children: React.ReactNode;
	title: string;
	href: string;
	CTAText?: string;
}) {
	return (
		<div className="my-5 py-5">
			<p className="text-lg font-bold">{title}</p>
			<p className="mt-2 mb-3 leading-6 text-md">{children}</p>
			<Link href={href} className="!text-blue hover:underline hover:underline-offset-2">
				{CTAText ? CTAText : "Learn More"}
				<span> &gt;</span>
			</Link>
		</div>
	);
}
