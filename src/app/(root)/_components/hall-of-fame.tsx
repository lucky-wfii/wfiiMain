"use client";

import InvertedCard from "@/components/global/inverted-card";
import { useState } from "react";
import {
    AnimationWrapper,
    StaggerContainer
} from "./animation-wrapper";

const Trophy = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55.47.98.97 1.21C12.04 18.75 14 20 14 20s1.96-1.25 3.03-1.79c.5-.23.97-.66.97-1.21v-2.34" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

const Users = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const Calendar = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const MapPin = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const achievements = [
  {
    id: 1,
    image: "https://ik.imagekit.io/librarysanju/opexn-inventory/WhatsApp%20Image%202025-08-05%20at%205.09.32%20PM%20(1).jpeg",
    pdfLink: "https://ik.imagekit.io/librarysanju/opexn-inventory/Agri%20Roundtable_compressed.pdf"
  },
  {
    id: 2,
    image: "https://ik.imagekit.io/librarysanju/opexn-inventory/WhatsApp%20Image%202025-11-17%20at%204.43.07%20PM.jpeg?updatedAt=1763378024326",
    pdfLink: "https://ik.imagekit.io/librarysanju/opexn-inventory/Agri%20Roundtable_compressed.pdf" // Update with respective PDF link when available
  },
  {
    id: 3,
    image: "https://ik.imagekit.io/librarysanju/opexn-inventory/WhatsApp%20Image%202025-08-05%20at%205.09.16%20PM%20(1).jpeg",
    pdfLink: "https://ik.imagekit.io/librarysanju/opexn-inventory/Agri%20Roundtable_compressed.pdf" // Update with respective PDF link when available
  },
  {
    id: 4,
    image: "https://ik.imagekit.io/librarysanju/opexn-inventory/WhatsApp%20Image%202025-08-05%20at%205.09.28%20PM%20(1).jpeg",
    pdfLink: "https://ik.imagekit.io/librarysanju/opexn-inventory/Agri%20Roundtable_compressed.pdf" // Update with respective PDF link when available
  },
];

export function HallOfFame() {

  return (
    <section
      id="hall-of-fame"
      className="py-24 bg-gradient-to-br from-[#F8F5EE] via-[#FCFCFA] to-[#F8F5EE] relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-[#FF4500]/20 to-[#FF6347]/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-[#FF6347]/20 to-[#FF4500]/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimationWrapper
          direction="up"
          delay={0.2}
          className="text-center mb-16"
        >
          <span className="text-[#FF4500] font-semibold tracking-wider uppercase text-sm mb-4 block">Event Archives</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
            Past Events & Highlights
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-body leading-relaxed">
            Take a look back at our previous gatherings where industry leaders, innovators, and pioneers came together to shape the future.
          </p>
        </AnimationWrapper>

        <StaggerContainer
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full place-items-center"
          staggerDelay={0.15}
        >
          {achievements.map((achievement) => (
            <div key={achievement.id}>
              <InvertedCard imageLink={achievement.image} pdfLink={achievement.pdfLink} />
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
