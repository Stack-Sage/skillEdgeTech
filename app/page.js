'use client'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import PricingSection from "./components/PricingSection";
import PortfolioSection from "./components/PortfolioSection";
import ReviewsSection from "./components/ReviewsSection";
import ContactSection from "./components/ContactSection";
import ClientLogos from "./components/ClientLogos";
import CaseStudiesSection from "./components/CaseStudiesSection";
import FAQSection from "./components/FAQSection";
import dynamic from "next/dynamic";
import ScrollIndicator from "./components/ScrollIndicator";
import StickyCTA from "./components/StickyCTA";
import StatsCounter from "./components/StatsCounter";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import NeonStarsBackground from "./components/NeonStarsBackground";
import ParallaxBackground from "./components/ParallaxBackground";
import ParallaxSection from "./components/ParallaxSection";

const BlogSection = dynamic(() => import("./components/BlogSection"), { ssr: false, loading: () => <div /> });
const NewsletterSignup = dynamic(() => import("./components/NewsletterSignup"), { ssr: false, loading: () => <div /> });

const fadeIn = {
	initial: { opacity: 0, y: 32 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, amount: 0.2 },
	transition: { duration: 1, ease: "easeOut" }
};

export default function Home() {
	const [showTop, setShowTop] = useState(false);

	useEffect(() => {
		const onScroll = () => setShowTop(window.scrollY > 200);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<>
			<NeonStarsBackground />
			<ParallaxBackground />
			<ScrollIndicator />
			<StickyCTA />
			<motion.div
				className="w-full"
				style={{
					background:
						"linear-gradient(135deg, #f8fafc 0%, #ede9fe 25%, #e0e7ef 50%, #c7d2fe 75%, #a5b4fc 100%)"
				}}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.2, ease: "easeOut" }}
			>
				<ParallaxSection speed={0.10}>
					<motion.section className="pt-[100px] md:pt-[200px] pb-14 md:pb-20" {...fadeIn}>
						<HeroSection />
						<StatsCounter stats={[
							{ value: 120, suffix: "+", label: "Projects" },
							{ value: 50, suffix: "+", label: "Clients" },
							{ value: 5, suffix: "★", label: "Avg. Rating" }
						]} />
						<motion.div className="mt-8 mb-8 text-center text-blue-800 text-lg font-medium" {...fadeIn}>
							"Welcome to Bluvia — where oceanic design meets modern web technology."
						</motion.div>
						<motion.p className="text-center text-blue-700 max-w-2xl mx-auto mb-4" {...fadeIn}>
							We believe every business deserves a website that feels alive, modern, and uniquely theirs. Our team combines design, animation, and technology to create digital experiences that inspire.
						</motion.p>
					</motion.section>
				</ParallaxSection>
				<ParallaxSection speed={0.07}>
					<motion.section className="py-16 md:py-24" {...fadeIn}>
						<ServicesSection />
						<motion.ul className="mt-8 mb-8 max-w-2xl mx-auto text-blue-900 text-base leading-relaxed space-y-2 px-4" {...fadeIn}>
							<li>• Every service is crafted for performance, beauty, and business growth.</li>
							<li>• We blend glassmorphism, ocean gradients, and smooth UX for a premium feel.</li>
							<li>• Our team delivers fast, SEO-optimized, and interactive solutions.</li>
						</motion.ul>
						<motion.p className="text-center text-blue-700 max-w-2xl mx-auto mb-4" {...fadeIn}>
							From business websites to AI-powered features, Bluvia is your partner for digital transformation. Let us help you stand out in the digital ocean.
						</motion.p>
					</motion.section>
				</ParallaxSection>
				<ParallaxSection speed={0.05}>
					<motion.section className="py-16 md:py-24" {...fadeIn}>
						<PricingSection />
						<motion.div className="mt-8 mb-8 text-center text-blue-700 text-base font-medium" {...fadeIn}>
							"Transparent pricing. No hidden fees. Choose the plan that fits your ambition."
						</motion.div>
						<motion.p className="text-center text-blue-700 max-w-2xl mx-auto mb-4" {...fadeIn}>
							Whether you’re just starting or scaling up, our plans are designed to give you maximum value and flexibility.
						</motion.p>
					</motion.section>
				</ParallaxSection>
				<ParallaxSection speed={0.03}>
					<motion.section className="py-16 md:py-24" {...fadeIn}>
						<PortfolioSection />
						<motion.div className="mt-8 mb-8 text-center text-blue-900 text-base italic" {...fadeIn}>
							See how we bring brands to life with oceanic, glassy, and interactive web experiences.
						</motion.div>
						<motion.p className="text-center text-blue-700 max-w-2xl mx-auto mb-4" {...fadeIn}>
							Each project is a story — a journey from idea to impact. Explore our work and imagine what we can do for you.
						</motion.p>
					</motion.section>
				</ParallaxSection>
				<ParallaxSection speed={0.02}>
					<TestimonialsCarousel />
				</ParallaxSection>
				<ParallaxSection speed={0.01}>
					<motion.section className="pt-16 md:pt-24 pb-0 md:pb-0" {...fadeIn}>
						<ContactSection />
						<motion.div className="mt-8 mb-8 text-center text-blue-700 text-base" {...fadeIn}>
							Ready to make waves? <span className="font-semibold">Contact us today and let's build something beautiful.</span>
						</motion.div>
						<motion.p className="text-center text-blue-700 max-w-2xl mx-auto mb-4" {...fadeIn}>
							Have a project in mind? Let’s talk about your goals and how we can help you achieve them.
						</motion.p>
					</motion.section>
				</ParallaxSection>
				<ParallaxSection speed={0.01}>
					<ClientLogos />
				</ParallaxSection>
				<ParallaxSection speed={0.01}>
					<CaseStudiesSection />
				</ParallaxSection>
				<ParallaxSection speed={0.01}>
					<FAQSection />
				</ParallaxSection>
				<ParallaxSection speed={0.01}>
					<NewsletterSignup />
				</ParallaxSection>
				<ParallaxSection speed={0.01}>
					<BlogSection />
				</ParallaxSection>
			</motion.div>
			{showTop && (
				<button
					aria-label="Back to top"
					onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
					className="fixed bottom-6 right-6 z-50 rounded-full bg-blue-600 text-white p-3 shadow-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
				>
					↑
				</button>
			)}
		</>
	);
}
