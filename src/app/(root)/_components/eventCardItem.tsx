"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, MapPin, Users, Bookmark } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimationWrapper } from "./animation-wrapper";
import { EventCardItemProps } from "./types";

export const EventCardItem = ({
	image,
	imageAlt,
	date,
	location,
	title,
	description,
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
