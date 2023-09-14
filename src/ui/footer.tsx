import Image from "next/image";
import NGLogo from "@/public/NG-Fake-Products-150.png";

export default function Footer() {
  return (
    <footer className="border-t-2 border-green border-solid w-full">
      <div className="
        flex justify-between max-w-[1000px] mx-auto flex-wrap px-4 [&>*]:mt-16 
        max-lg:grid max-lg:max-w-[600px] max-lg:grid-cols-4 max-lg:grid-rows-1
        max-[700px]:grid-cols-2 max-[700px]:[&>div:not(:first-child)]:text-center max-[450px]:grid-cols-1
        ">
        <div className="
          max-w-[260px] mt-16 max-lg:grid max-lg:col-span-4 max-lg:text-left max-lg:mx-auto
          max-[700px]:col-span-2 max-[450px]:col-span-1
          ">
          <Image src={NGLogo} alt="NG-Fake-Products-logo" width={150} height={46} />
          <p className="text-sm mt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus cum eveniet sed doloremque, quo nulla omnis deserunt eaque molestiae obcaecati quis quod delectus debit
            is! Asperiores, eveniet mollitia?
          </p>
        </div>
        <div className="[&>a]:text-sm [&>a]:mt-2 flex flex-col">
          <p className="text-base font-semibold">Social Media</p>
          <a>Facebook</a>
          <a>Instagram</a>
          <a>Youtube</a>
          <a>Twitter</a>
          <a>LinkedIn</a>
        </div>
        <div className="[&>a]:text-sm [&>a]:mt-2 flex flex-col">
          <p className="text-base font-semibold">Explore</p>
          <a>Product features</a>
          <a>Prototyping features</a>
          <a>Product process</a>
          <a>Pricing</a>
          <a>Enterprise</a>
          <a>Organization</a>
          <a>Professional</a>
          <a>Customers</a>
          <a>Security</a>
          <a>Contact</a>
        </div>
        <div className="[&>a]:text-sm [&>a]:mt-2 flex flex-col">
          <p className="text-base font-semibold">Resources</p>
          <a>Blog</a>
          <a>Best practices</a>
          <a>Support</a>
          <a>Resource library</a>
          <a>Downloads</a>
          <a>Whats new</a>
          <a>Releases</a>
          <a>Careers</a>
          <a>Partners</a>
          <a>Our story</a>
          <a>Privacy</a>
        </div>
        <div className="[&>a]:text-sm [&>a]:mt-2 flex flex-col">
          <p className="text-base font-semibold">Use Cases</p>
          <a>Example One</a>
          <a>Example Two</a>
          <a>Example Three</a>
          <a>Example Four</a>
          <a>Example Five</a>
          <a>Example Six</a>
          <a>Example Seven</a>
          <a>Example Eight</a>
          <a>Example Nine</a>
        </div>
      </div>
      <div className="w-full bg-green mt-[50px] h-8"></div>
    </footer>
  );
}
