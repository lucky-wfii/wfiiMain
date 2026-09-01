"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	ArrowRight,
	Calendar,
	MapPin,
	Sparkles,
	Trophy,
	Briefcase,
	Users,
	Bookmark,
	X,
	CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { AnimationWrapper } from "./animation-wrapper";

type Highlight = {
	icon: ReactNode;
	title: string;
	content: ReactNode;
	iconBg: string;
	iconColor: string;
	borderHover: string;
};

type EventCardItemProps = {
	image: string;
	imageAlt: string;
	date: string;
	dateLabel: string;
	location: string;
	locationLabel: string;
	title: string;
	description: ReactNode;
	highlights: Highlight[];
	tags: string[];
	applyUrl: string;
	applyText: string;
	lastDate?: string;
	delay: number;
};

const EventCardItem = ({
	image,
	imageAlt,
	date,
	dateLabel,
	location,
	locationLabel,
	title,
	description,
	highlights,
	tags,
	applyUrl,
	applyText,
	lastDate,
	delay,
	onOpen,
}: EventCardItemProps & { onOpen: () => void }) => {
	return (
		<AnimationWrapper direction="up" delay={delay}>
			<Card
				className="group relative h-full cursor-pointer overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
				onClick={onOpen}
				role="button"
				tabIndex={0}
				onKeyDown={(event) => {
					if (event.key === "Enter" || event.key === " ") {
						event.preventDefault();
						onOpen();
					}
				}}
			>
				<div className="flex h-full flex-col">
					{/* Poster thumbnail
						Fixed box + object-contain means ANY poster ratio is safe.
						The original poster is never cropped or stretched.
					*/}
					<div className="p-3 sm:p-4">
						<div className="relative h-64 w-full shrink-0 overflow-hidden rounded-[28px] border border-black/5 bg-slate-950 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.6)] sm:h-[280px]">
							<Image
								src={image}
								alt={imageAlt}
								fill
								sizes="(max-width: 640px) 100vw, 38vw"
								className="object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
							/>

							<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

							<div className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/75 px-4 py-2 text-xs font-bold text-white backdrop-blur-sm">
								Full Details →
							</div>
						</div>
					</div>

					<CardContent className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
						{/* Date + location */}
						<div className="mb-4 flex flex-wrap gap-2">
							<div className="flex items-center gap-2 rounded-xl bg-[#fff8f5] px-3 py-2">
								<Calendar className="h-4 w-4 shrink-0 text-[#FF4500]" />
								<span className="text-sm font-bold text-[#FF4500]">
									{date}
								</span>
							</div>

							<div className="flex items-center gap-2 rounded-xl bg-[#fffaf2] px-3 py-2">
								<MapPin className="h-4 w-4 shrink-0 text-[#FF6347]" />
								<span className="text-sm font-semibold text-gray-700">
									{location}
								</span>
							</div>
						</div>

						<h3 className="mb-2 font-display text-xl font-bold leading-tight text-gray-900 lg:text-2xl">
							{title}
						</h3>

						<p className="mb-4 line-clamp-3 font-body text-sm leading-6 text-gray-600 lg:text-base">
							{description}
						</p>

						{/* Compact information instead of the large highlight blocks */}
						<div className="mb-5 flex flex-wrap gap-2">
							{tags.map((tag) => (
								<span
									key={tag}
									className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-600"
								>
									{tag}
								</span>
							))}
						</div>

						<div className="mt-auto border-t border-gray-100 pt-4">
							<div className="mb-4 flex items-center justify-between gap-3">
								<div className="flex min-w-0 items-center gap-2 text-sm font-medium text-gray-600">
									<Users className="h-5 w-5 shrink-0 text-gray-700" />
									<span className="truncate">
										{title.includes("ScaleX")
											? "500+ Participants"
											: "By Invitation / Target Groups"}
									</span>
								</div>

								<div className="flex items-center gap-3">
									{lastDate && (
										<span className="hidden text-xs font-semibold text-gray-500 lg:inline">
											Last date:{" "}
											<span className="text-[#DC143C]">
												{lastDate}
											</span>
										</span>
									)}
									<Bookmark className="h-5 w-5 shrink-0 text-gray-700" />
								</div>
							</div>

							{/* Apply button remains separate from the card-click action */}
							<Link
								href={applyUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="block w-full"
								onClick={(event) => event.stopPropagation()}
							>
								<Button className="group/button h-11 w-full rounded-xl border-0 bg-gradient-to-r from-[#DC143C] to-[#FF4500] px-5 font-display text-sm font-bold text-white shadow-[0_8px_25px_-10px_#FF4500] transition-all duration-300 hover:from-[#B22222] hover:to-[#DC143C] hover:shadow-[0_12px_35px_-10px_#FF4500]">
									<span className="flex items-center justify-center">
										{applyText}
										<ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
									</span>
								</Button>
							</Link>
						</div>
					</CardContent>
				</div>
			</Card>
		</AnimationWrapper>
	);
};

type EventDetailsProps = EventCardItemProps;

const EventDetailsModal = ({
	event,
	onClose,
}: {
	event: EventDetailsProps;
	onClose: () => void;
}) => {
	const lenis = useLenis();

	/*
	 * The page should stay frozen behind the modal, but Lenis must also be
	 * stopped so it does not keep tracking page scroll while the modal owns
	 * its own internal scroller.
	 */
	useEffect(() => {
		const html = document.documentElement;
		const body = document.body;

		const previousHtmlOverflow = html.style.overflow;
		const previousBodyOverflow = body.style.overflow;
		const previousBodyPaddingRight = body.style.paddingRight;
		const previousHtmlOverscroll = html.style.overscrollBehavior;
		const previousBodyOverscroll = body.style.overscrollBehavior;

		if (lenis) {
			lenis.stop();
		}

		const scrollbarWidth = window.innerWidth - html.clientWidth;

		html.style.overflow = "hidden";
		body.style.overflow = "hidden";
		html.style.overscrollBehavior = "none";
		body.style.overscrollBehavior = "none";

		if (scrollbarWidth > 0) {
			body.style.paddingRight = `${scrollbarWidth}px`;
		}

		return () => {
			html.style.overflow = previousHtmlOverflow;
			body.style.overflow = previousBodyOverflow;
			body.style.paddingRight = previousBodyPaddingRight;
			html.style.overscrollBehavior = previousHtmlOverscroll;
			body.style.overscrollBehavior = previousBodyOverscroll;
			if (lenis) {
				lenis.start();
			}
		};
	}, [lenis]);

	// Escape closes the modal.
	useEffect(() => {
		const html = document.documentElement;
		const body = document.body;
		const scrollY = window.scrollY;

		if (lenis) {
			lenis.stop();
		}

		const scrollbarWidth = window.innerWidth - html.clientWidth;

		// Physically lock the body in place instead of relying on overflow:hidden,
		// which Lenis / iOS Safari can bypass.
		body.style.position = "fixed";
		body.style.top = `-${scrollY}px`;
		body.style.left = "0";
		body.style.right = "0";
		body.style.width = "100%";
		html.style.overscrollBehavior = "none";

		if (scrollbarWidth > 0) {
			body.style.paddingRight = `${scrollbarWidth}px`;
		}

		return () => {
			body.style.position = "";
			body.style.top = "";
			body.style.left = "";
			body.style.right = "";
			body.style.width = "";
			body.style.paddingRight = "";
			html.style.overscrollBehavior = "";

			// Restore scroll position exactly where the user left off.
			window.scrollTo(0, scrollY);

			if (lenis) {
				lenis.start();
			}
		};
	}, [lenis]);

	return (
		<div
			className="fixed inset-0 z-[100] overflow-hidden bg-black/60 px-3 pb-4 pt-[5.5rem] backdrop-blur-sm sm:px-5 sm:pb-5"
			onClick={onClose}
		>
			{/* Modal is deliberately shorter than the viewport/header area. */}
			<div className="flex h-full w-full items-start justify-center">
				<div
					className="relative flex h-[calc(100dvh-7rem)] max-h-[calc(100dvh-7rem)] w-full max-w-6xl flex-col overflow-hidden rounded-[28px] bg-white shadow-2xl"
					onClick={(e) => e.stopPropagation()}
				>
					{/* Close button */}
					<button
						type="button"
						onClick={onClose}
						aria-label="Close event details"
						className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-gray-800 shadow-lg ring-1 ring-gray-200 transition hover:scale-105 hover:bg-white hover:text-[#DC143C]"
					>
						<X className="h-5 w-5" />
					</button>

					{/* =====================================================
					    POSTER - ALWAYS ABOVE THE EVENT CONTENT
					    ===================================================== */}
					<div className="relative w-full shrink-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_transparent_42%),linear-gradient(135deg,_#171717_0%,_#0f172a_55%,_#1f2937_100%)] px-2 pb-2 pt-2 sm:px-3 sm:pb-3">
						<div className="relative mx-auto h-[240px] w-full max-w-[860px] overflow-hidden rounded-[24px] border border-white/10 bg-slate-900/40 shadow-[0_18px_32px_-24px_rgba(15,23,42,0.85)] sm:h-[300px] lg:h-[330px]">
							<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.10),_transparent_58%)]" />

							<Image
								src={event.image}
								alt={event.imageAlt}
								fill
								sizes="100vw"
								className="relative z-10 object-contain p-2 sm:p-3"
								priority
							/>
						</div>
					</div>

					{/* =====================================================
					    ONLY THIS AREA SCROLLS.
					    The page behind the modal remains locked.
					    min-h-0 is important for flex scrolling.
					    ===================================================== */}
					<div
						data-lenis-prevent
						className="min-h-0 flex-1 overflow-y-auto overscroll-contain touch-pan-y"
						style={{ WebkitOverflowScrolling: "touch" }}
					>
						<div className="p-6 sm:p-8 lg:p-10">
							<div className="mb-5 flex flex-wrap gap-3">
								<div className="flex items-center gap-2 text-sm font-bold text-[#FF4500]">
									<Calendar className="h-5 w-5" />
									{event.date}{" "}
									<span className="font-medium text-gray-500">
										({event.dateLabel})
									</span>
								</div>

								<div className="flex items-center gap-2 text-sm font-bold text-[#FF6347]">
									<MapPin className="h-5 w-5" />
									{event.location}
								</div>
							</div>

							<h2 className="mb-4 font-display text-3xl font-bold leading-tight text-[#14213D] sm:text-4xl">
								{event.title}
							</h2>

							<div className="mb-5 flex flex-wrap gap-2">
								{event.tags.map((tag) => (
									<span
										key={tag}
										className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-600"
									>
										{tag}
									</span>
								))}
							</div>

							<p className="mb-8 font-body text-base leading-7 text-gray-600 sm:text-lg">
								{event.description}
							</p>

							<div className="space-y-3">
								<h3 className="mb-3 font-display text-xl font-bold text-gray-900">
									Event Highlights
								</h3>

								{event.highlights.map((item, index) => (
									<div
										key={`${item.title}-${index}`}
										className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
									>
										<div
											className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${item.iconBg}`}
										>
											<span className={item.iconColor}>
												{item.icon}
											</span>
										</div>

										<div className="min-w-0">
											<h4 className="mb-1 font-display text-base font-bold text-gray-900">
												{item.title}
											</h4>
											<div className="font-body text-sm leading-6 text-gray-600">
												{item.content}
											</div>
										</div>
									</div>
								))}
							</div>

							<div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
								<div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
									<p className="text-xs font-semibold text-gray-500">
										Registration
									</p>
									<p className="mt-1 font-display text-lg font-bold text-[#DC143C]">
										{event.applyText
											.replace("Apply Now", "")
											.trim() || "Apply Now"}
									</p>
								</div>

								<div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
									<p className="text-xs font-semibold text-gray-500">
										Location
									</p>
									<p className="mt-1 font-display text-lg font-bold text-gray-900">
										{event.location}
									</p>
								</div>
							</div>

							{event.lastDate && (
								<div className="mt-3 rounded-2xl border border-red-100 bg-red-50 p-4">
									<p className="text-sm font-semibold text-gray-600">
										⏳ Last Date to Apply
									</p>
									<p className="mt-1 font-display text-lg font-bold text-[#DC143C]">
										{event.lastDate}
									</p>
								</div>
							)}

							<div className="mt-7 pb-2">
								<Link
									href={event.applyUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="block w-full"
								>
									<Button className="h-13 w-full rounded-2xl border-0 bg-gradient-to-r from-[#DC143C] to-[#FF4500] font-display text-base font-bold text-white shadow-[0_12px_35px_-10px_#FF4500] hover:from-[#B22222] hover:to-[#DC143C]">
										{event.applyText}
										<ArrowRight className="ml-3 h-5 w-5" />
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const EventCard = () => {
	const [selectedEvent, setSelectedEvent] =
		useState<EventDetailsProps | null>(null);

	const events: EventDetailsProps[] = [
		{
			delay: 0.2,
			image: "/CSRMumbai.jpg",
			imageAlt: "WFII National CSR & Impact Partnership Summit 2026",
			date: "30 September 2026",
			dateLabel: "National Summit",
			location: "Mumbai, India",
			locationLabel: "India's CSR Marketplace",
			title: "Are You Building Impact That Deserves National Recognition?",
			description: (
				<>
					Whether you're a Startup driving innovation or an NGO
					transforming communities, this is your opportunity to
					connect with the organizations that can help you scale your
					impact across India.
				</>
			),
			tags: ["CSR & Impact", "National Summit"],
			highlights: [
				{
					icon: <Trophy className="h-5 w-5" />,
					title: "Why Should You Apply?",
					content:
						"Curated One-to-One Partnership Meetings • Access to Funding, Grants & CSR Opportunities • Pilot & Deployment Opportunities • National Visibility & Recognition",
					iconBg: "bg-amber-50",
					iconColor: "text-amber-500",
					borderHover: "hover:border-amber-200",
				},
				{
					icon: <Briefcase className="h-5 w-5" />,
					title: "Who Will Be In The Room?",
					content: (
						<>
							<span className="font-bold text-blue-600">
								40% Corporate Foundations & CSR Leaders
							</span>{" "}
							• 30% PSU CSR Leaders • 20% Global Corporates • 10%
							Government & Ecosystem Bodies
						</>
					),
					iconBg: "bg-blue-50",
					iconColor: "text-blue-600",
					borderHover: "hover:border-blue-200",
				},
				{
					icon: <Sparkles className="h-5 w-5" />,
					title: "5 National Impact Missions",
					content:
						"Education & Employability • Accessible Healthcare • Climate Action & Waste Management • Livelihoods & Women Empowerment • Rural Innovation",
					iconBg: "bg-emerald-50",
					iconColor: "text-emerald-600",
					borderHover: "hover:border-emerald-200",
				},
			],
			applyUrl: "https://forms.gle/3U8KgMxvFD8SJNpD9",
			applyText: "Apply Now",
		},
		{
			delay: 0.4,
			image: "/updatedScalex.jpeg",
			imageAlt: "ScaleX by WFII 2026",
			date: "8 & 9 September 2026",
			dateLabel: "Two-Day Program",
			location: "New Delhi",
			locationLabel: "500+ Participants",
			title: "ScaleX by WFII 2026",
			description: (
				<>
					India's Premier Business Excellence Program designed to
					equip you with practical knowledge for measurable business
					impact.
				</>
			),
			tags: ["Business Excellence", "Two-Day Program"],
			highlights: [
				{
					icon: <Trophy className="h-5 w-5" />,
					title: "Why Should You Apply?",
					content:
						"Learn to standardize your product, price for profitability, build a trusted brand, and enter global markets.",
					iconBg: "bg-amber-50",
					iconColor: "text-amber-500",
					borderHover: "hover:border-amber-200",
				},
				{
					icon: <Briefcase className="h-5 w-5" />,
					title: "What Awaits You?",
					content: (
						<>
							<span className="font-bold text-blue-600">
								Expert-led Masterclasses
							</span>{" "}
							• Practical Business Frameworks • Industry Leaders &
							Mentors • BIS Standards & Product Excellence
						</>
					),
					iconBg: "bg-blue-50",
					iconColor: "text-blue-600",
					borderHover: "hover:border-blue-200",
				},
				{
					icon: <Sparkles className="h-5 w-5" />,
					title: "Key Learning Areas",
					content:
						"Branding, Sales & Marketing • Finance & Cash Flow Management • AI for Business Growth • Government Schemes & Business Opportunities",
					iconBg: "bg-emerald-50",
					iconColor: "text-emerald-600",
					borderHover: "hover:border-emerald-200",
				},
			],
			applyUrl:
				"https://docs.google.com/forms/d/e/1FAIpQLScoRx1xLnBt_nzNF7o4RhHZOG8vBP347FuhrsXimqEhZuzqxQ/viewform?pli=1",
			applyText: "Apply Now (₹59)",
			lastDate: "15 July 2026",
		},
		{
			delay: 0.4,
			image: "/IndiaUAE.png",
			imageAlt: "India-UAE Business Forum 2026",
			date: "23-27 November 2026",
			dateLabel: "5-Day Program",
			location: "Dubai, UAE",
			locationLabel: "500+ Participants",
			title: "India-UAE Business Forum 2026",
			description: (
				<>
					India's Premier Business Excellence Program designed to
					equip you with practical knowledge for measurable business
					impact.
				</>
			),
			tags: ["Business Excellence", "5-Day Program"],
			highlights: [
				{
					icon: <Trophy className="h-5 w-5" />,
					title: "Why Should You Apply?",
					content:
						"Learn to standardize your product, price for profitability, build a trusted brand, and enter global markets.",
					iconBg: "bg-amber-50",
					iconColor: "text-amber-500",
					borderHover: "hover:border-amber-200",
				},
				{
					icon: <Briefcase className="h-5 w-5" />,
					title: "What Awaits You?",
					content: (
						<>
							<span className="font-bold text-blue-600">
								Expert-led Masterclasses
							</span>{" "}
							• Practical Business Frameworks • Industry Leaders &
							Mentors • BIS Standards & Product Excellence
						</>
					),
					iconBg: "bg-blue-50",
					iconColor: "text-blue-600",
					borderHover: "hover:border-blue-200",
				},
				{
					icon: <Sparkles className="h-5 w-5" />,
					title: "Key Learning Areas",
					content:
						"Branding, Sales & Marketing • Finance & Cash Flow Management • AI for Business Growth • Government Schemes & Business Opportunities",
					iconBg: "bg-emerald-50",
					iconColor: "text-emerald-600",
					borderHover: "hover:border-emerald-200",
				},
			],
			applyUrl:
				"https://docs.google.com/forms/d/e/1FAIpQLScoRx1xLnBt_nzNF7o4RhHZOG8vBP347FuhrsXimqEhZuzqxQ/viewform?pli=1",
			applyText: "Apply Now (₹59)",
			lastDate: "15 September 2026",
		},
	];

	return (
		<section className="space-y-8">
			{/* Section heading */}
			<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
				<div>
					<div className="mb-2 flex items-center gap-3">
						<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-md ring-1 ring-gray-100">
							<Calendar className="h-6 w-6 text-[#FF4500]" />
						</div>
						<h2 className="font-display text-3xl font-bold text-[#14213D]">
							Upcoming Events
						</h2>
					</div>
					<p className="font-body text-sm text-gray-600 sm:text-base">
						Discover impactful programs and opportunities to grow
						your business and create change.
					</p>
				</div>
			</div>

			{/* Compact event cards.
				Poster ratio no longer controls card height.
				Clicking anywhere on a card opens the full event.
			*/}
			<div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
				{events.map((event) => (
					<EventCardItem
						key={event.title}
						{...event}
						onOpen={() => setSelectedEvent(event)}
					/>
				))}
			</div>

			{/* Full event view */}
			{selectedEvent && (
				<EventDetailsModal
					event={selectedEvent}
					onClose={() => setSelectedEvent(null)}
				/>
			)}
		</section>
	);
};

export default EventCard;
