import styles from "./footer.module.css";
import Image from "next/image";
import NGLogo from "@/public/NG-Fake-Products-150.png";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerInnerContainer}>
				<div className={styles.companySection}>
					<Image src={NGLogo} alt="NG-Fake-Products-logo" width={150} height={46}></Image>
					<p className={styles.footerNote}>
						{" "}
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus cum eveniet sed
						doloremque, quo nulla omnis deserunt eaque molestiae obcaecati quis quod delectus
						debitis! Asperiores, eveniet mollitia?
					</p>
				</div>
				<div>
					<p>Social Media</p>
					<a className={styles.footerNote}>Facebook</a>
					<a className={styles.footerNote}>Instagram</a>
					<a className={styles.footerNote}>Youtube</a>
					<a className={styles.footerNote}>Twitter</a>
					<a className={styles.footerNote}>LinkedIn</a>
				</div>
				<div>
					<p>Explore</p>
					<a className={styles.footerNote}>Product features</a>
					<a className={styles.footerNote}>Prototyping features</a>
					<a className={styles.footerNote}>Product process</a>
					<a className={styles.footerNote}>Pricing</a>
					<a className={styles.footerNote}>Enterprise</a>
					<a className={styles.footerNote}>Organization</a>
					<a className={styles.footerNote}>Professional</a>
					<a className={styles.footerNote}>Customers</a>
					<a className={styles.footerNote}>Security</a>
					<a className={styles.footerNote}>Contact</a>
				</div>
				<div>
					<p>Resources</p>
					<a className={styles.footerNote}>Blog</a>
					<a className={styles.footerNote}>Best practices</a>
					<a className={styles.footerNote}>Support</a>
					<a className={styles.footerNote}>Resource library</a>
					<a className={styles.footerNote}>Downloads</a>
					<a className={styles.footerNote}>What&apos;s new</a>
					<a className={styles.footerNote}>Releases</a>
					<a className={styles.footerNote}>Careers</a>
					<a className={styles.footerNote}>Partners</a>
					<a className={styles.footerNote}>Our story</a>
					<a className={styles.footerNote}>Privacy</a>
				</div>
				<div>
					<p>Use Cases</p>
					<a className={styles.footerNote}>Example One</a>
					<a className={styles.footerNote}>Example Two</a>
					<a className={styles.footerNote}>Example Three</a>
					<a className={styles.footerNote}>Example Four</a>
					<a className={styles.footerNote}>Example Five</a>
					<a className={styles.footerNote}>Example Six</a>
					<a className={styles.footerNote}>Example Seven</a>
					<a className={styles.footerNote}>Example Eight</a>
					<a className={styles.footerNote}>Example Nine</a>
				</div>
			</div>
			<div className={styles.footerBottom}></div>
		</footer>
	);
}
