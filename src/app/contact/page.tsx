import styles from "./page.module.css";
import InfoCard from "@/ui/info-card";

export default function Contact() {
	return (
		<div>
			<h1 className="pageTitle">Contacting NG Fake Products</h1>
			<div className={styles.contact}>
				<section className={styles.sectionTop}>
					<p className={styles.bigFont}>Corporate Address</p>
					<p>NG Fake Products</p>
					<p>Street Address</p>
					<p>City, Precinct</p>
					<p>(999) 99-9999999</p>
				</section>
				<section className={styles.sectionMiddle}>
					<p className={styles.bigFont}>Frequently Requested Info</p>
					<div className={styles.sectionMiddleGrid}>
						<InfoCard title="NG Support" href="/">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, illum?
						</InfoCard>
						<InfoCard title="NG Products" href="/">
							Lorem ipsum dolor sit amet consectetur.
						</InfoCard>
						<InfoCard title="Find a Store" href="/">
							Lorem ipsum dolor sit amet consectetur adipisicing.
						</InfoCard>
						<InfoCard title="Email Subscriptions" href="/">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam!
						</InfoCard>
						<InfoCard title="User Groups" href="/">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quas voluptatum
							saepe neque, corporis enim?
						</InfoCard>
						<InfoCard title="Media and Analyst Info" href="/">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum.
						</InfoCard>
					</div>
				</section>
				<section className={styles.sectionBottom}>
					<InfoCard title="Feedback" href="/">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, excepturi voluptatibus
						laboriosam enim praesentium cumque eveniet maxime odit porro soluta!
					</InfoCard>
				</section>
			</div>
		</div>
	);
}
