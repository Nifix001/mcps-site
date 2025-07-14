"use client"
import Header from "@/components/Header";
import { ChevronRight, Pause, PlayIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
   const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "BE ALL YOU CAN BE.",
      subtitle: "Discover your potential and unlock endless possibilities.",
      buttonText: "TAKE THE FIRST STEP",
      bgImage: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1920&h=1080&fit=crop",
      bgColor: "from-blue-900/70 to-orange-900/70"
    },
    {
      id: 2,
      title: "BE A DEFENDER. SOLVER. HEALER. PLANNER. CONNECTOR.",
      subtitle: "SOLDIER.",
      buttonText: "EXPLORE CAREERS",
      bgImage: "https://images.unsplash.com/photo-1488034976201-ffbaa99cbf5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN0cmVldHxlbnwwfHwwfHx8MA%3D%3D",
      bgColor: "from-black/60 to-gray-900/80"
    },
    {
      id: 3,
      title: "YOUR FUTURE STARTS HERE.",
      subtitle: "Take this short quiz to narrow down your choices and see jobs you might be interested in. We're ready when you are.",
      buttonText: "START THE QUIZ",
      bgImage: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&h=1080&fit=crop",
      bgColor: "from-orange-900/60 to-black/80"
    }
  ];

  const benefits = [
    { icon: "🎓", title: "EDUCATION & TRAINING", color: "border-yellow-400" },
    { icon: "🏥", title: "HEALTH CARE", color: "border-yellow-400" },
    { icon: "💰", title: "MONEY & PAY", color: "border-yellow-400" },
    { icon: "🏠", title: "HOME LOANS", color: "border-yellow-400" },
    { icon: "👨‍👩‍👧‍👦", title: "FAMILY BENEFITS", color: "border-yellow-400" },
    { icon: "🛡️", title: "VETERAN BENEFITS", color: "border-yellow-400" }
  ];

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

      {/* Career Match Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-yellow-400 font-medium mb-4">ARMY CAREER MATCH</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                YOUR FUTURE STARTS HERE.
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Take this short quiz to narrow down your choices and see jobs you might be interested in. We're ready when you are.
              </p>
              <div className="space-y-4">
                <button className="flex items-center w-full md:w-auto px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 font-bold">
                  Start the Quiz
                  <ChevronRight className="ml-2 w-5 h-5" />
                </button>
                <button className="flex items-center w-full md:w-auto px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-bold">
                  All Jobs
                  <ChevronRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1598966835412-6de6f92c243d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN0cmVldHxlbnwwfHwwfHx8MA%3D%3D"
                alt="img"
                className="rounded-lg h-screen shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                FEEL SECURE FROM DAY ONE.
              </h2>
              <button className="flex items-center px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 font-bold">
                All Jobs
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 border-2 ${benefit.color} hover:bg-yellow-400 hover:text-black transition-all duration-300 cursor-pointer group`}
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{benefit.icon}</span>
                    <span className="font-bold">{benefit.title}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Be Ambitious Section */}
      <section 
        className="relative h-screen flex items-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1559406041-c7d2b2e98690?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RyZWV0fGVufDB8fDB8fHww')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-yellow-400">BE</span><br />
              AMBITIOUS.<br />
              CURIOUS.<br />
              INSPIRED.<br />
              ADVENTUROUS.<br />
              EMPOWERED.<br />
              <span className="text-yellow-400">A SOLDIER.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Choose How Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1482859454392-1b5326395032?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3RyZWV0fGVufDB8fDB8fHww"
                alt="Army soldiers in discussion"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-yellow-400">CHOOSE HOW YOU WANT</span><br />
                TO MAKE A DIFFERENCE.
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                No matter your passions, goals, or skill sets, the Army will provide you with the tools and 
                opportunities to create the future you want as an enlisted Soldier or Army Officer.
              </p>
              <div className="space-y-4">
                <button className="flex items-center w-full text-left py-4 border-b-2 border-yellow-400 text-yellow-400 hover:text-white transition-colors font-bold">
                  Find Your Path
                  <ChevronRight className="ml-2 w-5 h-5" />
                </button>
                <button className="flex items-center w-full text-left py-4 border-b-2 border-yellow-400 text-yellow-400 hover:text-white transition-colors font-bold">
                  Requirements to Join
                  <ChevronRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Take First Step Section */}
      <section className="py-20 bg-yellow-400 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                TAKE THE FIRST STEP.
              </h2>
              <p className="text-xl mb-8">
                Find out more about becoming a Soldier and if a career in the Army is right for you.
              </p>
              <button className="flex items-center px-8 py-4 bg-black text-yellow-400 hover:bg-gray-800 transition-colors font-bold">
                Talk to a Recruiter
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1672097247804-add051dcd682?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3RyZWV0fGVufDB8fDB8fHww"
                alt="Army training"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
