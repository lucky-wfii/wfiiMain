import EventCard from "./event-card"
import { AnimationWrapper, StaggerContainer, StaggerItem } from "./animation-wrapper"

const OngoingEvents = () => {
  return (
    <section id="events" className="py-16 md:py-32 select-none relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FCFCFA] via-[#F8F5EE] to-[#FCFCFA]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF4500]/3 to-transparent"></div>
      </div>

      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#FF4500] via-[#FF6347] to-[#FF7F50] rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-[#FF6347] via-[#FF4500] to-[#DC143C] rounded-full blur-[80px] animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-r from-[#FF7F50] to-[#FF4500] rounded-full blur-[120px] opacity-50 animate-pulse"></div>
        <div className="absolute top-3/4 left-1/3 w-[250px] h-[250px] bg-gradient-to-br from-[#FF6347] to-[#FF4500] rounded-full blur-[90px] animate-float opacity-60"></div>
        <div className="absolute top-1/6 right-1/3 w-[350px] h-[350px] bg-gradient-to-tl from-[#FF4500] to-[#FF7F50] rounded-full blur-[110px] animate-float-delayed opacity-40"></div>
      </div>

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,69,0,0.4) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 max-w-7xl">
        <AnimationWrapper className="text-center mb-12 md:mb-28" direction="up" duration={0.8}>
          <div className="inline-flex items-center justify-center px-6 py-3 mb-8 text-sm font-semibold text-[#FF4500] bg-white/90 backdrop-blur-md rounded-full border border-[#FF4500]/30 shadow-xl hover:shadow-2xl transition-all duration-300">
            <span className="w-2 h-2 bg-[#FF4500] rounded-full mr-3 animate-pulse"></span>
            <span className="bg-gradient-to-r from-[#FF4500] to-[#FF6347] bg-clip-text text-transparent font-bold tracking-widest uppercase text-xs">
              Spotlight Event
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-8 text-transparent bg-gradient-to-r from-[#FF4500] via-[#FF6347] to-[#DC143C] bg-clip-text leading-tight tracking-tight animate-text-glow">
            India’s Next National <br className="hidden md:block" /> Innovation Champion is Here
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-5xl mx-auto px-4 font-body leading-relaxed mb-4">
            The stage is set for the WFII National Innovation Pitch 2026 — a national platform designed to
            identify, recognize, and accelerate India’s most promising innovators across 10 high-impact sectors.
          </p>
        </AnimationWrapper>

        <AnimationWrapper direction="up" delay={0.4} duration={0.8}>
          <EventCard />
        </AnimationWrapper>
      </div>
    </section>
  )
}

export default OngoingEvents
