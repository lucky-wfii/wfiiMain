"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { EventDetailsProps } from "./types";

export const EventDetailsModal = ({
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
	 *
	 * We lock the body with `position: fixed` (rather than just
	 * `overflow: hidden`) because Lenis's own wheel/touch listeners and iOS
	 * Safari can both bypass a plain overflow lock. `position: fixed` fully
	 * detaches the body from the scroll flow, and `data-lenis-prevent` on the
	 * modal's own scroll container (see below) tells Lenis to leave that
	 * element's scroll events alone so they resolve natively inside the modal.
	 */
	useEffect(() => {
		const html = document.documentElement;
		const body = document.body;
		const scrollY = window.scrollY;

		if (lenis) {
			lenis.stop();
		}

		const scrollbarWidth = window.innerWidth - html.clientWidth;

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

	// Escape closes the modal.
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onClose();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [onClose]);

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
					    data-lenis-prevent tells Lenis to ignore this element,
					    so wheel/touch scroll here resolves natively instead
					    of being routed to the main page scroller.
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
