import type { ReactNode } from "react";

export type Highlight = {
	icon: ReactNode;
	title: string;
	content: ReactNode;
	iconBg: string;
	iconColor: string;
	borderHover: string;
};

export type EventCardItemProps = {
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

export type EventDetailsProps = EventCardItemProps;
