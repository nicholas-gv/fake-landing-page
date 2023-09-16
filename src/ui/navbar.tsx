"use client";

import Image from "next/image";
import Link from "next/link";
import NGLogo from "@/public/NG-Fake-Products-150.png";
import hamburgerMenuIcon from "@/public/hamburgermenu-orange.png";
import NavbarLink from "./navbar-link";
import { useState } from "react";

export default function Navbar() {
	const [hamburgerMenuClicked, setHamburgerMenuClicked] = useState(false);

	return (
		<nav className="flex items-center w-full max-[950px]:flex-col ">
			<Link href="/" className="max-[950px]:absolute max-[950px]:left-10 max-[950px]:top-6">
				<Image src={NGLogo} alt="NG-Fake-Products-logo" priority={true} />
			</Link>
			<ul
				className={`${
					hamburgerMenuClicked ? "[&>*]:max-[950px]:block" : "[&>*]:max-[950px]:hidden"
				} flex items-center ml-auto mr-0 min-w-[50%] justify-around max-[950px]:flex-col [&>*]:max-[950px]:mt-8
				max-[950px]:items-start max-[950px]:self-start max-[950px]:ml-0  max-[950px]:mt-24 
				[&>*]:max-[950px]:border-b-[1px] [&>*]:max-[950px]:border-gray-200 [&>*]:max-[950px]:border-solid 
				[&>*]:max-[950px]:w-[80vw]`}
			>
				<NavbarLink href="/products">Products</NavbarLink>
				<NavbarLink href="/events">Events</NavbarLink>
				<NavbarLink href="/contact">Contact</NavbarLink>
				<NavbarLink href="/">
					<button type="button" className="buttonPrimary max-[950px]:hidden">
						Get Started
					</button>
				</NavbarLink>
			</ul>
			<div
				className="max-[950px]:absolute max-[950px]:right-10 max-[950px]:top-8"
				onClick={() => setHamburgerMenuClicked(!hamburgerMenuClicked)}
			>
				<Image
					src={hamburgerMenuIcon}
					alt="hamburger-menu"
					className="hidden cursor-pointer max-[950px]:block"
				/>
			</div>
		</nav>
	);
}
