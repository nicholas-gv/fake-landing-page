import Link from "next/link";
import styles from "./navbar-link.module.css";

interface NavbarLinkProps {
	href: string;
	className?: string;
	children: string | React.ReactNode;
}

export default function NavbarLink(props: NavbarLinkProps) {
	return (
		<li>
			<Link
				className={
					typeof props.children === "string"
						? `${props.className} ${styles.link} `
						: `${props.className} relative inline-block `
				}
				href={props.href}
			>
				{props.children}
			</Link>
		</li>
	);
}
