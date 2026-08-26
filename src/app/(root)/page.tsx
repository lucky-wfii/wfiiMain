"use client";

import dynamic from "next/dynamic";
import Loader from "@/components/global/Loader";
import ReactLenis from "lenis/react";
import HeroImage from "./_components/hero-image";
import FraudAlertCard from "./_components/fraud-alert-card";

const Footer = dynamic(() => import("./_components/footer").then((mod) => mod.Footer), {
  loading: () => <div className="h-20 bg-transparent" />,
});
const ActivityAndEvent = dynamic(() => import("./_components/activity-and-event"), {
  loading: () => <Loader />,
});
const HallOfFame = dynamic(() => import("./_components/hall-of-fame").then((mod) => mod.HallOfFame), {
  loading: () => <Loader />,
});
const AboutSection = dynamic(() => import("./_components/about-section"), {
  loading: () => <Loader />,
});
const ContactSection = dynamic(() => import("./_components/contact-section"), {
  loading: () => <Loader />,
});
const Sectors = dynamic(() => import("./_components/sectors"), {
  loading: () => <Loader />,
});
const OngoingEvents = dynamic(() => import("./_components/ongoing-events"), {
  loading: () => <Loader />,
});
const Chatbot = dynamic(() => import("@/components/global/chat-bot"), {
  ssr: false,
});

const DynamicHeader = dynamic(() => import("./_components/header"), {
  ssr: false,
});

const HomePage = () => {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.8, // Slower, more noticeable smooth scroll
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
        orientation: "vertical", // Vertical scrolling
        gestureOrientation: "vertical", // Gesture orientation
        smoothWheel: true, // Enable smooth wheel scrolling
        wheelMultiplier: 1, // Wheel scroll multiplier
        touchMultiplier: 2, // Touch scroll multiplier
        autoResize: true, // Auto resize on window resize
      }}
      className="relative w-screen min-h-screen overflow-x-hidden"
    >
      <div className="bg-black relative">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-linear-to-br from-[#FF4500]/10 via-[#FF6347]/5 to-transparent rounded-full blur-[120px] animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-linear-to-tl from-[#FF6347]/8 via-[#FF4500]/4 to-transparent rounded-full blur-[100px] animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-linear-to-r from-[#FF7F50]/6 to-[#FF4500]/3 rounded-full blur-[140px] animate-pulse"></div>
        </div>

        <div className="relative z-10 bg-white">
            <FraudAlertCard />
            <DynamicHeader />
            {/* Hero image */}
          <div id="home">
            {/* <HeroSlider /> */}
            <HeroImage />
          </div>
          <main className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-[#FCFCFA] via-[#F8F5EE] to-[#FCFCFA]">
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#FF4500]/2 to-transparent"></div>
            </div>

            <div className="relative z-10">
              <div id="events">
                <OngoingEvents />
              </div>
              <div id="verticals">
                <Sectors />
              </div>
              <div id="event-activity">
                <ActivityAndEvent />
              </div>
              <div id="hall-of-fame">
                <HallOfFame />
              </div>
              <div id="about">
                <AboutSection />
              </div>
              <div id="contact">
                <ContactSection />
              </div>
              <Footer />
              <Chatbot />
            </div>
          </main>
        </div>
      </div>
    </ReactLenis>
  );
};

export default HomePage;
