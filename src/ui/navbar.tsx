"use client";

import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import NGLogo from "@/public/NG-Fake-Products-150.png";
import hamburgerMenuIcon from "@/public/hamburgermenu-orange.png";
import { useState } from "react";

export default function Navbar() {
	const [hamburgerMenuClicked, setHamburgerMenuClicked] = useState(false);

	return (
		<nav className={styles.navigation} aria-label="primary menu">
			<Link href="/">
				<Image src={NGLogo} alt="NG-Fake-Products-logo" priority={true}></Image>
			</Link>
			<ul className={`${hamburgerMenuClicked ? styles.flex : ""} ${styles.navigationLeft}`}>
				<li>
					<Link className={styles.link} href="/products">
						Products
					</Link>
				</li>
				<li>
					<Link className={styles.link} href="/events">
						Events
					</Link>
				</li>
				<li>
					<Link className={styles.link} href="/contact">
						Contact
					</Link>
				</li>
				<li className={styles.buttonLI}>
					<button type="button" className="buttonPrimary">
						Get Started
					</button>
				</li>
			</ul>
			<div onClick={() => setHamburgerMenuClicked(!hamburgerMenuClicked)}>
				<Image src={hamburgerMenuIcon} alt="hamburger-menu" className={styles.hamburgerMenuIcon} />
			</div>
		</nav>
	);
}
