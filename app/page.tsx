"use client"
import Header from "@/components/Header";
import { ChevronRight, Pause, PlayIcon } from "lucide-react";
import { useEffect, useState } from "react";
import back1 from "@/public/homepage-ceremony_lg.jpg"
import back2 from "@/public/homepage-soldier-helicopter-sm-v2.jpg"
import back3 from "@/public/homepage-planning_sm.jpg"

export default function Home() {
   const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "BE ALL YOU CAN BE.",
      subtitle: "Discover your potential and unlock endless possibilities.",
      buttonText: "TAKE THE FIRST STEP",
      bgImage: back1.src,
      bgColor: "from-blue-900/70 to-orange-900/70"
    },
    {
      id: 2,
      title: "BE A DEFENDER. SOLVER. HEALER. PLANNER. CONNECTOR.",
      subtitle: "SOLDIER.",
      buttonText: "EXPLORE CAREERS",
      bgImage: back2.src,
      bgColor: "from-black/60 to-gray-900/80"
    },
    {
      id: 3,
      title: "YOUR FUTURE STARTS HERE.",
      subtitle: "Take this short quiz to narrow down your choices and see jobs you might be interested in. We're ready when you are.",
      buttonText: "START THE QUIZ",
      bgImage: back3.src,
      bgColor: "from-orange-900/60 to-black/80"
    }
  ];

  // const benefits = [
  //   { icon: "🎓", title: "EDUCATION & TRAINING", color: "border-yellow-400" },
  //   { icon: "🏥", title: "HEALTH CARE", color: "border-yellow-400" },
  //   { icon: "💰", title: "MONEY & PAY", color: "border-yellow-400" },
  //   { icon: "🏠", title: "HOME LOANS", color: "border-yellow-400" },
  //   { icon: "👨‍👩‍👧‍👦", title: "FAMILY BENEFITS", color: "border-yellow-400" },
  //   { icon: "🛡️", title: "VETERAN BENEFITS", color: "border-yellow-400" }
  // ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, slides.length]);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Slider */}
      <div className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgColor}`} />
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                    {slide.title.split(' ').map((word, i) => (
                      <span key={i} className={word === 'SOLDIER.' ? 'text-yellow-400' : ''}>
                        {word}{' '}
                      </span>
                    ))}
                  </h1>
                  {slide.subtitle && (
                    <p className="text-xl md:text-2xl text-gray-300 mb-8">
                      {slide.subtitle}
                    </p>
                  )}
                  <button className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 font-bold">
                    {slide.buttonText}
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <div className="absolute bottom-8 left-8 flex items-center space-x-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <PlayIcon className="w-6 h-6" />}
          </button>
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
