'use client'

import React, { useState } from 'react'

const products = [
  {
    id: 1,
    name: "Enamor Fab-Cool A165 Antimicrobial",
    price: "₹1,049",
    image: "https://cdn.live2.ai/i/ue7y3d74fg?f=auto&h=120"
  },
  {
    id: 2,
    name: "Enamor Fab-Cool A165 Antimicrobial",
    price: "₹1,049",
    image: "https://cdn.live2.ai/i/ue7y3d74fg?f=auto&h=120"
  },
];

const VideoModal = ({ video, isOpen, onClose, reels, currentReelIndex, onPrevReel, onNextReel }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
      <div className="relative w-[500px] h-[80vh] flex items-center justify-center">
        {/* Stack container */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Previous reel */}
          {currentReelIndex > 0 && (
            <div className="absolute w-[90%] h-[90%] aspect-[9/16] -translate-x-[60%] scale-[0.85] blur-[2px] opacity-50">
              <video 
                muted 
                loop 
                className="w-full h-full object-cover rounded-2xl"
                src={reels[currentReelIndex - 1].videoUrl}
              />
            </div>
          )}

          {/* Current video */}
          <div className="relative w-full aspect-[9/16] z-10">
            <video 
              autoPlay 
              loop 
              muted 
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
              src={video}
            />
            
            {/* Navigation arrows */}
            {currentReelIndex > 0 && (
              <button 
                onClick={onPrevReel}
                className="absolute -left-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            )}

            {currentReelIndex < reels.length - 1 && (
              <button 
                onClick={onNextReel}
                className="absolute -right-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            )}

            {/* Close button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 z-20"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>

          {/* Next reel */}
          {currentReelIndex < reels.length - 1 && (
            <div className="absolute w-[90%] h-[90%] aspect-[9/16] translate-x-[60%] scale-[0.85] blur-[2px] opacity-50">
              <video 
                muted 
                loop 
                className="w-full h-full object-cover rounded-2xl"
                src={reels[currentReelIndex + 1].videoUrl}
              />
            </div>
          )}
        </div>

        {/* Products panel */}
        <div className="absolute right-[-320px] w-[300px] bg-black/90 text-white p-6 rounded-2xl max-h-full overflow-y-auto">
          <h2 className="text-xl font-semibold mb-6">Similar Products</h2>
          <div className="space-y-4">
            {products.map(product => (
              <div key={product.id} className="flex gap-4 bg-white/5 p-3 rounded-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-sm mb-2">{product.name}</h3>
                  <p className="text-base font-semibold">{product.price}</p>
                  <button className="mt-2 px-3 py-1.5 text-sm bg-white text-black rounded-md hover:bg-gray-100">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ReelsSlider = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const reelsPerSlide = 6;
  const [currentReelIndex, setCurrentReelIndex] = useState(0);

  const dummyReels = [
    {
      id: 1,
      videoUrl: "https://cdn-cf.live2.ai/uploads/4p82xlru18/video/transcoded/muted/1874306808.mp4",
      embedHtml: `<div class="w-full h-full relative">
        <video 
          muted
          autoplay 
          playsinline 
          loop 
          class="absolute inset-0 w-full h-full object-cover"
          src="https://cdn-cf.live2.ai/uploads/4p82xlru18/video/transcoded/muted/1874306808.mp4">
        </video>
        <div class="absolute bottom-0 left-0 right-0 flex gap-2 p-3 bg-gradient-to-t from-black/70">
          <img 
            src="https://cdn.live2.ai/i/ue7y3d74fg?f=auto&h=120" 
            class="w-1/3 h-24 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity" 
            alt="Product 1" 
          />
          <img 
            src="https://cdn.live2.ai/i/ue7y3d74fg?f=auto&h=120" 
            class="w-1/3 h-24 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity" 
            alt="Product 2" 
          />
          <img 
            src="https://cdn.live2.ai/i/ue7y3d74fg?f=auto&h=120" 
            class="w-1/3 h-24 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity" 
            alt="Product 3" 
          />
        </div>
      </div>`
    },
    {
      id: 2,
      videoUrl: "https://cdn-cf.live2.ai/uploads/4p82xlru18/video/transcoded/720p/afb50e0674.mp4",
      embedHtml: `<div class="w-full h-full relative">
        <video 
          muted
          autoplay 
          playsinline 
          loop 
          class="absolute inset-0 w-full h-full object-cover"
         src="https://cdn-cf.live2.ai/uploads/4p82xlru18/video/transcoded/720p/afb50e0674.mp4"">
        </video>
        <div class="absolute bottom-0 left-0 right-0 flex gap-2 p-3 bg-gradient-to-t from-black/70">
          <img 
            src="https://cdn.live2.ai/i/ue7y3d74fg?f=auto&h=120" 
            class="w-1/3 h-24 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity" 
            alt="Product 1" 
          />
          <img 
            src="https://cdn.live2.ai/i/ue7y3d74fg?f=auto&h=120" 
            class="w-1/3 h-24 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity" 
            alt="Product 2" 
          />
          <img 
            src="https://cdn.live2.ai/i/ue7y3d74fg?f=auto&h=120" 
            class="w-1/3 h-24 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity" 
            alt="Product 3" 
          />
        </div>
      </div>`
    },
    {
      id: 3,
      videoUrl: "https://cdn-cf.live2.ai/uploads/4p82xlru18/video/transcoded/muted/1874306808.mp4",
      embedHtml: `<div class="w-full h-full relative">
        <video 
          muted
          autoplay 
          playsinline 
          loop 
          class="absolute inset-0 w-full h-full object-cover"
          src="https://cdn-cf.live2.ai/uploads/4p82xlru18/video/transcoded/muted/1874306808.mp4">
        </video>
        <div class="absolute bottom-0 left-0 right-0 flex gap-2 p-3 bg-gradient-to-t from-black/70">
          <img 
            src="https://cdn.live2.ai/i/ue7y3d74fg?f=auto&h=120" 
            class="w-1/3 h-24 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity" 
            alt="Product 1" 
          />
          <img 
            src="https://cdn.live2.ai/i/ue7y3d74fg?f=auto&h=120" 
            class="w-1/3 h-24 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity" 
            alt="Product 2" 
          />
          <img 
            src="https://cdn.live2.ai/i/ue7y3d74fg?f=auto&h=120" 
            class="w-1/3 h-24 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity" 
            alt="Product 3" 
          />
        </div>
      </div>`
    },
    {
      id: 4,
      videoUrl: "https://cdn-cf.live2.ai/uploads/4p82xlru18/video/transcoded/muted/1874306808.mp4",
      embedHtml: `<div class="w-full h-full relative">
        <video 
          muted
          autoplay 
          playsinline 
          loop 
          class="absolute inset-0 w-full h-full object-cover"
          src="https://cdn-cf.live2.ai/uploads/4p82xlru18/video/transcoded/muted/1874306808.mp4">
        </video>
        <div class="absolute bottom-0 left-0 right-0 flex gap-2 p-3 bg-gradient-to-t from-black/70">
          <img 
            src="https://cdn.live2.ai/i/ue7y3d74fg?f=auto&h=120" 
            class="w-1/3 h-24 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity" 
            alt="Product 1" 
          />
          <img 
            src="https://cdn.live2.ai/i/ue7y3d74fg?f=auto&h=120" 
            class="w-1/3 h-24 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity" 
            alt="Product 2" 
          />
          <img 
            src="https://cdn.live2.ai/i/ue7y3d74fg?f=auto&h=120" 
            class="w-1/3 h-24 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity" 
            alt="Product 3" 
          />
        </div>
      </div>`
    },
    {
      id: 5,
      videoUrl: "https://cdn-cf.live2.ai/uploads/4p82xlru18/video/transcoded/muted/1874306808.mp4",
      embedHtml: `<div class="w-full h-full relative">
        <video 
          muted
          autoplay 
          playsinline 
          loop 
          class="absolute inset-0 w-full h-full object-cover"
          src="https://cdn-cf.live2.ai/uploads/4p82xlru18/video/transcoded/muted/1874306808.mp4">
        </video>
        <div class="absolute bottom-0 left-0 right-0 flex gap-2 p-3 bg-gradient-to-t from-black/70">
          <img 
            src="https://cdn.live2.ai/i/ue7y3d74fg?f=auto&h=120" 
            class="w-1/3 h-24 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity" 
            alt="Product 1" 
          />
          <img 
            src="https://cdn.live2.ai/i/ue7y3d74fg?f=auto&h=120" 
            class="w-1/3 h-24 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity" 
            alt="Product 2" 
          />
          <img 
            src="https://cdn.live2.ai/i/ue7y3d74fg?f=auto&h=120" 
            class="w-1/3 h-24 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity" 
            alt="Product 3" 
          />
        </div>
      </div>`
    },
    {
      id: 6,
      videoUrl: "https://cdn-cf.live2.ai/uploads/4p82xlru18/video/transcoded/muted/1874306808.mp4",
      embedHtml: `<div class="w-full h-full relative">
        <video 
          muted
          autoplay 
          playsinline 
          loop 
          class="absolute inset-0 w-full h-full object-cover"
          src="https://cdn-cf.live2.ai/uploads/4p82xlru18/video/transcoded/muted/1874306808.mp4">
        </video>
        <div class="absolute bottom-0 left-0 right-0 flex gap-2 p-3 bg-gradient-to-t from-black/70">
          <img 
            src="https://cdn.live2.ai/i/ue7y3d74fg?f=auto&h=120" 
            class="w-1/3 h-24 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity" 
            alt="Product 1" 
          />
          <img 
            src="https://cdn.live2.ai/i/ue7y3d74fg?f=auto&h=120" 
            class="w-1/3 h-24 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity" 
            alt="Product 2" 
          />
          <img 
            src="https://cdn.live2.ai/i/ue7y3d74fg?f=auto&h=120" 
            class="w-1/3 h-24 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity" 
            alt="Product 3" 
          />
        </div>
      </div>`
    }
  ];

  // Calculate total slides based on number of reels
  const totalSlides = Math.ceil(dummyReels.length / reelsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNextReel = () => {
    if (currentReelIndex < dummyReels.length - 1) {
      setCurrentReelIndex(prev => prev + 1);
      setSelectedVideo(dummyReels[currentReelIndex + 1].videoUrl);
    }
  };

  const handlePrevReel = () => {
    if (currentReelIndex > 0) {
      setCurrentReelIndex(prev => prev - 1);
      setSelectedVideo(dummyReels[currentReelIndex - 1].videoUrl);
    }
  };

  // Update video selection to include index
  const handleVideoSelect = (videoUrl, index) => {
    setSelectedVideo(videoUrl);
    setCurrentReelIndex(index);
  };

  React.useEffect(() => {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.play().catch(err => {
        console.log('Autoplay failed:', err);
        video.muted = true;
        video.play();
      });
    });
  }, [currentSlide]);

  return (
    <section className="py-20 px-[120px] max-w-[1920px] mx-auto">
      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className="transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <div className="grid grid-cols-6 gap-2">
              {dummyReels.map((reel) => (
                <div 
                  key={reel.id} 
                  className="cursor-pointer"
                  onClick={() => setSelectedVideo(reel.videoUrl)}
                >
                  <div className="relative aspect-[9/16] overflow-hidden bg-black group">
                    <div 
                      className="absolute inset-0 w-full h-full"
                      dangerouslySetInnerHTML={{ __html: reel.embedHtml }} 
                    />
                    <style jsx>{`
                      .group:hover .bg-gradient-to-t {
                        opacity: 1;
                        transform: translateY(0);
                      }
                      .bg-gradient-to-t {
                        opacity: 0;
                        transform: translateY(100%);
                        transition: all 0.3s ease-in-out;
                      }
                    `}</style>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Navigation buttons */}
        <button 
          onClick={prevSlide}
          className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-50"
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="black" 
            strokeWidth="1.5"
            className="ml-[-2px]"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-50"
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="black" 
            strokeWidth="1.5"
            className="ml-[2px]"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Modal */}
      <VideoModal 
        video={selectedVideo}
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        reels={dummyReels}
        currentReelIndex={currentReelIndex}
        onPrevReel={handlePrevReel}
        onNextReel={handleNextReel}
      />
    </section>
  )
}

export default ReelsSlider 