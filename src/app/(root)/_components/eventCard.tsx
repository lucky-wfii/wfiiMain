"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";
import { EventDetailsProps } from "./types";
import { EventCardItem } from "./eventCardItem";
import { EventDetailsModal } from "./eventDetailsModal";
import { events } from "./eventsData";

const EventCard = () => {
	const [selectedEvent, setSelectedEvent] =
		useState<EventDetailsProps | null>(null);

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
