"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  MapPin,
  Sparkles,
  Trophy,
  Globe as GlobeIcon,
  Rocket,
  Briefcase,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimationWrapper } from "./animation-wrapper";
import { LazyImage } from "@/components/global/lazy-image";

const EventCard = () => {
  return (
    <div className="space-y-12">
      {/* Featured Event Card */}
      <AnimationWrapper direction="up" delay={0.2}>
        <Card className="group relative overflow-hidden bg-white/90 backdrop-blur-xl border-0 shadow-2xl rounded-3xl hover:shadow-3xl transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF4500]/5 via-[#FF6347]/5 to-[#DC143C]/5 pointer-events-none"></div>

          <div className="relative z-10 grid lg:grid-cols-12 min-h-[550px]">
            <div className="lg:col-span-5 relative w-full h-full min-h-[400px] xl:min-h-[600px] overflow-hidden">
              <Image
                src="/mumbai_event_1.png"
                alt="WFII National CSR & Impact Partnership Summit 2026"
                fill
                className="object-contain bg-black w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>

            <CardContent className="lg:col-span-7 flex flex-col justify-center px-6 py-0 sm:px-8 sm:py-0 lg:px-12 lg:py-0 relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start mb-8 gap-4 mt-6 sm:mt-0">
                <div className="flex items-center space-x-3 text-[#FF4500] bg-white px-5 py-3 rounded-2xl border border-gray-100 shadow-sm">
                  <Calendar className="w-5 h-5" />
                  <div>
                    <span className="font-display font-bold text-lg block text-[#FF4500]">
                      10 August 2026
                    </span>
                    <span className="text-sm text-gray-700 font-medium">
                      National Summit
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-[#FF6347] bg-white px-5 py-3 rounded-2xl border border-gray-100 shadow-sm">
                  <MapPin className="w-5 h-5" />
                  <div>
                    <span className="font-display font-semibold text-lg block text-[#FF6347]">
                      Mumbai, India
                    </span>
                    <span className="text-sm text-gray-500 font-medium">
                      India's CSR Marketplace
                    </span>
                  </div>
                </div>
              </div>

              <p className="font-body text-gray-800 mb-8 text-lg lg:text-xl leading-relaxed drop-shadow-sm">
                🎯{" "}
                <strong className="text-gray-900 font-bold">
                  Are You Building Impact That Deserves National Recognition?
                </strong>
                <br />
                Whether you're a Startup driving innovation or an NGO transforming communities, this is your opportunity to connect with the organizations that can help you scale your impact across India.
              </p>

              <div className="mb-8 relative z-10">
                <div className="grid grid-cols-1 gap-4">
                  {/* Highlight Benefit 1 */}
                  <div className="flex items-start space-x-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-amber-200 group/card">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0 group-hover/card:scale-110 transition-transform duration-300">
                      <Trophy className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-gray-900 text-base md:text-lg mb-1">
                        Why Should You Apply?
                      </h4>
                      <p className="font-body text-xs md:text-sm text-gray-600 font-medium leading-relaxed">
                        Curated One-to-One Partnership Meetings • Access to Funding, Grants & CSR Opportunities • Pilot & Deployment Opportunities • National Visibility & Recognition
                      </p>
                    </div>
                  </div>

                  {/* Highlight Benefit 2 */}
                  <div className="flex items-start space-x-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200 group/card">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover/card:scale-110 transition-transform duration-300">
                      <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-gray-900 text-base md:text-lg mb-1">
                        Who Will Be In The Room?
                      </h4>
                      <p className="font-body text-xs md:text-sm text-gray-600 font-medium leading-relaxed">
                        <span className="font-bold text-blue-600">
                          40% Corporate Foundations & CSR Leaders
                        </span>
                        {" "}• 30% PSU CSR Leaders • 20% Global Corporates • 10% Government & Ecosystem Bodies
                      </p>
                    </div>
                  </div>

                  {/* Sectors Preview */}
                  <div className="flex items-start space-x-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-emerald-200 group/card">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover/card:scale-110 transition-transform duration-300">
                      <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-gray-900 text-base md:text-lg mb-1">
                        5 National Impact Missions
                      </h4>
                      <p className="font-body text-xs md:text-sm text-gray-600 font-medium leading-relaxed">
                        Education & Employability • Accessible Healthcare • Climate Action & Waste Management • Livelihoods & Women Empowerment • Rural Innovation
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="https://forms.gle/3U8KgMxvFD8SJNpD9"
                target="_blank"
                className="group/button mt-4"
              >
                <Button className="w-full sm:w-auto min-w-[280px] bg-gradient-to-r from-[#DC143C] to-[#FF4500] hover:from-[#B22222] hover:to-[#DC143C] text-white text-base py-6 md:text-lg px-8 font-display font-semibold border-0 transition-all duration-300 shadow-[0_10px_30px_-10px_#FF4500] hover:shadow-[0_15px_40px_-10px_#FF4500] rounded-2xl relative overflow-hidden flex items-center justify-center">
                  <span className="relative z-10 flex items-center justify-center text-white font-bold tracking-wide">
                    Apply Now
                    <ArrowRight className="ml-3 w-5 h-5 group-hover/button:translate-x-2 transition-transform duration-300" />
                  </span>

                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/button:translate-x-[100%] transition-transform duration-1000"></div>
                </Button>
              </Link>
            </CardContent>
          </div>
        </Card>
      </AnimationWrapper>

      {/* ScaleX 2026 Event Card */}
      <AnimationWrapper direction="up" delay={0.4}>
        <Card className="group relative overflow-hidden bg-white/90 backdrop-blur-xl border-0 shadow-2xl rounded-3xl hover:shadow-3xl transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF4500]/5 via-[#FF6347]/5 to-[#DC143C]/5 pointer-events-none"></div>

          <div className="relative z-10 grid lg:grid-cols-12 min-h-[550px]">
            <div className="lg:col-span-5 relative w-full h-full min-h-[400px] xl:min-h-[600px] overflow-hidden">
              <Image
                src="/scalex.png"
                alt="ScaleX by WFII 2026"
                fill
                className="object-contain bg-black w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>

            <CardContent className="lg:col-span-7 flex flex-col justify-center px-6 py-0 sm:px-8 sm:py-0 lg:px-12 lg:py-0 relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start mb-8 gap-4 mt-6 sm:mt-0">
                <div className="flex items-center space-x-3 text-[#FF4500] bg-white px-5 py-3 rounded-2xl border border-gray-100 shadow-sm">
                  <Calendar className="w-5 h-5" />
                  <div>
                    <span className="font-display font-bold text-lg block text-[#FF4500]">
                      19 & 20 August 2026
                    </span>
                    <span className="text-sm text-gray-700 font-medium">
                      New Delhi
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-[#FF6347] bg-white px-5 py-3 rounded-2xl border border-gray-100 shadow-sm">
                  <MapPin className="w-5 h-5" />
                  <div>
                    <span className="font-display font-semibold text-lg block text-[#FF6347]">
                      500+ Participants
                    </span>
                    <span className="text-sm text-gray-500 font-medium">
                      ScaleX Program
                    </span>
                  </div>
                </div>
              </div>

              <p className="font-body text-gray-800 mb-8 text-lg lg:text-xl leading-relaxed drop-shadow-sm">
                🎯{" "}
                <strong className="text-gray-900 font-bold">
                  India's Next Unicorn Might Not Need Funding First. It Might Need Knowledge.
                </strong>
                <br />
                Every year, thousands of startups and MSMEs are born in India. Yet, many struggle to scale. ScaleX by WFII 2026 is India's Premier Business Excellence Program designed to equip you with practical knowledge for measurable business impact.
              </p>

              <div className="mb-8 relative z-10">
                <div className="grid grid-cols-1 gap-4">
                  {/* Highlight Benefit 1 */}
                  <div className="flex items-start space-x-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-amber-200 group/card">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0 group-hover/card:scale-110 transition-transform duration-300">
                      <Trophy className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-gray-900 text-base md:text-lg mb-1">
                        Why Should You Apply?
                      </h4>
                      <p className="font-body text-xs md:text-sm text-gray-600 font-medium leading-relaxed">
                        Learn to standardize your product, price for profitability, build a trusted brand, and enter global markets.
                      </p>
                    </div>
                  </div>

                  {/* Highlight Benefit 2 */}
                  <div className="flex items-start space-x-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200 group/card">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover/card:scale-110 transition-transform duration-300">
                      <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-gray-900 text-base md:text-lg mb-1">
                        What Awaits You?
                      </h4>
                      <p className="font-body text-xs md:text-sm text-gray-600 font-medium leading-relaxed">
                        <span className="font-bold text-blue-600">
                          Expert-led Masterclasses
                        </span>
                        {" "}• Practical Business Frameworks • Industry Leaders & Mentors • BIS Standards & Product Excellence
                      </p>
                    </div>
                  </div>

                  {/* Sectors Preview */}
                  <div className="flex items-start space-x-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-emerald-200 group/card">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover/card:scale-110 transition-transform duration-300">
                      <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-gray-900 text-base md:text-lg mb-1">
                        Key Learning Areas
                      </h4>
                      <p className="font-body text-xs md:text-sm text-gray-600 font-medium leading-relaxed">
                        Branding, Sales & Marketing • Finance & Cash Flow Management • AI for Business Growth • Government Schemes & Business Opportunities
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 relative z-10">
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLScoRx1xLnBt_nzNF7o4RhHZOG8vBP347FuhrsXimqEhZuzqxQ/viewform?pli=1"
                  target="_blank"
                  className="group/button w-full sm:w-auto"
                >
                  <Button className="w-full min-w-[280px] bg-gradient-to-r from-[#DC143C] to-[#FF4500] hover:from-[#B22222] hover:to-[#DC143C] text-white text-base py-6 md:text-lg px-8 font-display font-semibold border-0 transition-all duration-300 shadow-[0_10px_30px_-10px_#FF4500] hover:shadow-[0_15px_40px_-10px_#FF4500] rounded-2xl relative overflow-hidden flex items-center justify-center">
                    <span className="relative z-10 flex items-center justify-center text-white font-bold tracking-wide">
                      Apply Now (₹59)
                      <ArrowRight className="ml-3 w-5 h-5 group-hover/button:translate-x-2 transition-transform duration-300" />
                    </span>

                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/button:translate-x-[100%] transition-transform duration-1000"></div>
                  </Button>
                </Link>
                <div className="text-sm font-medium text-gray-500 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl border border-gray-100 shadow-sm w-full sm:w-auto text-center">
                  ⏳ Last Date: <span className="text-[#DC143C] font-bold">15 July 2026</span>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </AnimationWrapper>
    </div>
  );
};

export default EventCard;
