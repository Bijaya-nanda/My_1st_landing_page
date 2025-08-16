import { useEffect, useRef } from "react";

export default function VideoSection() {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load YouTube Iframe API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    // Create player when API is ready
    (window as any).onYouTubeIframeAPIReady = () => {
      playerRef.current = new (window as any).YT.Player("yt-player", {
        videoId: "uiSa97kFrB4",
        playerVars: {
          autoplay: 0,
          mute: 1,
        },
      });
    };

    // Intersection observer for autoplay/pause
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (playerRef.current) {
            if (entry.isIntersecting) {
              playerRef.current.playVideo(); // resume
            } else {
              playerRef.current.pauseVideo(); // pause
            }
          }
        });
      },
      { threshold: 0.5 } // at least 50% visible
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mb-16" ref={containerRef}>
      <div className="w-full max-w-4xl mx-auto">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <div
            id="yt-player"
            className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
          ></div>
        </div>
      </div>
    </div>
  );
}
