const VideoBanner = () => {
    return (
      <div className="flex-1 relative w-full bg-[#0A0A2E] h-[calc(100vh-230px)]">
        <video 
          className="w-full h-full object-cover absolute inset-0 opacity-90"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
  
        {/* Overlay text/content */}
        <div className="relative z-10 flex items-center justify-end h-full text-white px-32">
          <div className="text-right mr-32">
            <div className="flex flex-col items-end gap-3">
              <p className="text-[13px] tracking-[0.4em] font-medium">INTO THE</p>
              <h1 className="text-[72px] font-bold tracking-[0.05em] leading-none">ALLURE</h1>
              <div className="flex flex-col items-end gap-2">
                <p className="text-[13px] tracking-[0.4em] font-medium">DISCOVER NEW IN</p>
                <div className="w-[140px] h-[1px] bg-white"></div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Gradient overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A2E]/50 to-transparent"></div>
      </div>
    )
  }
  
  
  export default VideoBanner
  
  