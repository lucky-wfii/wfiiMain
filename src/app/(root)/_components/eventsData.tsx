import { Trophy, Briefcase, Sparkles, Users } from "lucide-react";
import { EventDetailsProps } from "./types";

export const events: EventDetailsProps[] = [
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
				transforming communities, this is your opportunity to connect
				with the organizations that can help you scale your impact
				across India.
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
				India's Premier Business Excellence Program designed to equip
				you with practical knowledge for measurable business impact.
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
		imageAlt: "India-UAE Innovation & Market Access Bridge 2026",
		date: "23-27 November 2026",
		dateLabel: "5-Day Delegation",
		location: "Dubai, UAE",
		locationLabel: "25 Selected Startups",
		title: "India-UAE Innovation & Market Access Bridge 2026",
		description: (
			<>
				A curated India-UAE business delegation designed to help
				high-potential startups innovate, collaborate, and expand into
				the UAE and GCC markets.
			</>
		),
		tags: ["India-UAE", "Startup Delegation", "GCC Market Access"],
		highlights: [
			{
				icon: <Users className="h-5 w-5" />,
				title: "Why Should You Apply?",
				content:
					"Gain market access to the UAE and GCC through curated B2B meetings, investor interactions, corporate innovation opportunities, and strategic partnerships.",
				iconBg: "bg-emerald-50",
				iconColor: "text-emerald-600",
				borderHover: "hover:border-emerald-200",
			},
			{
				icon: <Briefcase className="h-5 w-5" />,
				title: "What Awaits You?",
				content: (
					<>
						<span className="font-bold text-blue-600">
							Curated B2B Meetings
						</span>{" "}
						• Investor Interactions • Corporate Innovation
						Opportunities • Strategic Partnerships • Government &
						Ecosystem Connections
					</>
				),
				iconBg: "bg-blue-50",
				iconColor: "text-blue-600",
				borderHover: "hover:border-blue-200",
			},
			{
				icon: <Sparkles className="h-5 w-5" />,
				title: "Priority Sectors",
				content:
					"AI & DeepTech • FinTech • ClimateTech & CleanTech • Agritech & FoodTech • HealthTech & MedTech • PropTech & ConstructionTech • Logistics, Supply Chain & Mobility",
				iconBg: "bg-amber-50",
				iconColor: "text-amber-500",
				borderHover: "hover:border-amber-200",
			},
		],
		applyUrl: "https://www.wfii.in/india-uae-delegation-2026",
		applyText: "Apply Now (₹99)",
		lastDate: "20 October",
	},
];
