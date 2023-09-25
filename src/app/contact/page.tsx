import InfoCard from "@/ui/info-card";

export default function Contact() {
	return (
		<div>
			<h1 className="pageTitle">Contacting NG Fake Products</h1>
			<div className="max-w-[980px] bg-[#f5f5f7] rounded-lg border-gray-300 border border-solid py-7 mx-auto mb-16 mt-28 [&>*>p]:leading-6">
				<section className="text-center mb-8 [&>:not(:first-child)]:text-lg py-5">
					<p className="text-[30px] font-semibold mb-10">Corporate Address</p>
					<p>NG Fake Products</p>
					<p>Street Address</p>
					<p>City, Precinct</p>
					<p>(999) 99-9999999</p>
				</section>
				<section className="border-t border-gray-300 border-solid py-8 px-5">
					<p className="text-[28px] font-semibold mb-4 mt-8 ml-4">Frequently Requested Info</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-5">
						<InfoCard title="NG Support" href="/contact">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, illum?
						</InfoCard>
						<InfoCard title="NG Products" href="/contact">
							Lorem ipsum dolor sit amet consectetur.
						</InfoCard>
						<InfoCard title="Find a Store" href="/contact">
							Lorem ipsum dolor sit amet consectetur adipisicing.
						</InfoCard>
						<InfoCard title="Email Subscriptions" href="/contact">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam!
						</InfoCard>
						<InfoCard title="User Groups" href="/contact">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quas voluptatum
							saepe neque, corporis enim?
						</InfoCard>
						<InfoCard title="Media and Analyst Info" href="/contact">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum.
						</InfoCard>
					</div>
				</section>
				<section className="border-t border-gray-300 border-solid py-8 px-5 ml-4">
					<p className="text-[28px] font-semibold mt-4">Feedback</p>
					<InfoCard title="" href="/contact" CTAText="Give Us Feedback">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, excepturi voluptatibus
						laboriosam enim praesentium cumque eveniet maxime odit porro soluta!
					</InfoCard>
				</section>
			</div>
		</div>
	);
}
