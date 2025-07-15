"use client"
import Header from "@/components/Header";
import { ChevronRight, Pause, PlayIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Array of military video URLs - you can add more or change these
  const militaryVideos = [
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
  ];

  // Select a random video
  const [selectedVideo] = useState(() => 
    militaryVideos[Math.floor(Math.random() * militaryVideos.length)]
  );

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  const toggleVideo = () => {
    const video = document.getElementById('hero-video') as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
    }
  };

  useEffect(() => {
    const video = document.getElementById('hero-video');
    if (video) {
      video.addEventListener('play', handleVideoPlay);
      video.addEventListener('pause', handleVideoPause);
      video.addEventListener('loadeddata', () => setVideoLoaded(true));
      
      return () => {
        video.removeEventListener('play', handleVideoPlay);
        video.removeEventListener('pause', handleVideoPause);
        video.removeEventListener('loadeddata', () => setVideoLoaded(true));
      };
    }
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Video Section */}
      <div className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <video
          id="hero-video"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src={selectedVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-orange-900/70" />

        {/* Content Overlay */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#99CBFF] font-bold leading-tight mb-2">
                BE A FORCE
              </h1>
              <p className="text-4xl md:text-5xl lg:text-6xl text-[#99CBFF] font-bold leading-tight mb-4">
                BE A <span className="text-yellow-400">SADAM</span>
              </p>
              <button className="inline-flex items-center px-8 py-4 cursor-pointer bg-transparent border-2 border-[#FFD700] text-[#FFD700] hover:bg-yellow-400 hover:text-black transition-all duration-300 font-bold">
                TAKE THE FIRST STEP
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Video Controls */}
        <div className="absolute bottom-8 left-8 flex items-center space-x-4">
          <button
            onClick={toggleVideo}
            className="p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <PlayIcon className="w-6 h-6" />}
          </button>
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full transition-colors ${
              videoLoaded ? 'bg-[#FFD700]' : 'bg-white/50'
            }`} />
            <span className="text-sm text-white/80">
              {videoLoaded}
            </span>
          </div>
        </div>

        {/* Fallback Background Image */}
        {!videoLoaded && (
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1519452543077-f3ab9e86b7d0?w=1920&h=1080&fit=crop')"
            }}
          />
        )}
      </div>
    </div>
  );
}