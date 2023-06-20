import EventCard from "@/ui/event-card";
import Image from "next/image";
import styles from "./page.module.css";
import event1 from "@/public/event-1.jpeg";
import event2 from "@/public/event-2.jpeg";
import event3 from "@/public/event-3.jpeg";
import event4 from "@/public/event-4.jpeg";
import event5 from "@/public/event-5.jpeg";
import event6 from "@/public/event-6.jpeg";
import event7 from "@/public/event-7.jpeg";
import event8 from "@/public/event-8.jpeg";
import event9 from "@/public/event-9.jpeg";

export default function Events() {
	return (
		<>
			<h1 className="pageTitle">Events</h1>
			<div className={styles.cardContainer}>
				<EventCard
					image={
						<Image src={event1} alt="meiji-restoration"></Image>
					}
					title="Business Growth Accelerator: Unlocking Opportunities and Amplifying Market Presence Workshop"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quisquam quaerat odit officia
					soluta unde molestiae reprehenderit voluptates, dignissimos earum"
					eventKey="0x3617aa3"
				></EventCard>
				<EventCard
					image={<Image src={event2} alt="meiji-restoration"></Image>}
					title="Mastering the Art of Entrepreneurship: A Transformative Seminar for Visionary Business Minds"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quisquam quaerat odit officia
					soluta unde molestiae reprehenderit voluptates, dignissimos earum, deserunt velit alias.
					Rerum, deserunt."
					eventKey="0x3617aa3"
				></EventCard>
				<EventCard
					image={<Image src={event3} alt="meiji-restoration"></Image>}
					title="Trailblazers and Trendsetters: Navigating the Changing Landscape of the Corporate World Symposium"
					description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. At magni architecto et repellat vel
					praesentium cumque corporis odit consequatur sint odio laboriosam animi, dolorem dolore ipsam
					quas explicabo reprehenderit mollitia!"
					eventKey="0x3617aa3"
				></EventCard>
				<EventCard
					image={<Image src={event4} alt="meiji-restoration"></Image>}
					title="The Global Business Networking Event: Connecting Visionaries for International Collaborations"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quisquam quaerat odit officia
					soluta unde molestiae reprehenderit "
					eventKey="0x3617aa3"
				></EventCard>
				<EventCard
					image={<Image src={event5} alt="meiji-restoration"></Image>}
					title="The Leadership Renaissance: Rethinking Traditional Models and Inspiring a New Era of Success"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quisquam quaerat odit officia
					soluta unde molestiae"
					eventKey="0x3617aa3"
				></EventCard>
				<EventCard
					image={<Image src={event6} alt="meiji-restoration"></Image>}
					title="Innovate to Thrive: Exploring Cutting-Edge Technologies and Trends in the Industry Conference"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quisquam quaerat odit officia
					soluta unde molestiae"
					eventKey="0x3617aa3"
				></EventCard>
				<EventCard
					image={<Image src={event7} alt="meiji-restoration"></Image>}
					title="Shaping the Future of Sales and Marketing: Strategies for Enhanced Customer Engagement and Conversion"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quisquam quaerat odit officia
					soluta unde molestiae"
					eventKey="0x3617aa3"
				></EventCard>
				<EventCard
					image={<Image src={event8} alt="meiji-restoration"></Image>}
					title="The Sustainable Business Summit: Driving Environmental Stewardship and Social Responsibility"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quisquam quaerat odit officia
					soluta unde molestiae"
					eventKey="0x3617aa3"
				></EventCard>
			</div>
		</>
	);
}
