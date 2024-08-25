import Aktivitaten from "@/components/Aktivitaten";
import Hero from "@/components/Hero";
import NewsletterSection from "@/components/NewsletterSection";
import Services from "@/components/Services";
import UnsereEvents from "@/components/UnsereEvents";
import Willcomen from "@/components/Willcomen";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-0">
        <Hero></Hero>
        <Willcomen></Willcomen>
        <Services></Services>
        <UnsereEvents></UnsereEvents>
        <Aktivitaten></Aktivitaten>
        <NewsletterSection></NewsletterSection>
    </main>
  );
}
