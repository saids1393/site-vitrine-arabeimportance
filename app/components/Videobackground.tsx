'use client';

const videoTest = 'https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4';

export default function VideoBackground() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="fixed top-0 left-0 w-screen h-screen object-cover pointer-events-none"
        style={{ zIndex: -9999 }}
      >
        <source src={videoTest} type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo HTML5.
      </video>
      {/* Overlay */}
      <div 
        className="fixed top-0 left-0 w-screen h-screen bg-black/30 pointer-events-none"
        style={{ zIndex: -9998 }}
      />
    </>
  );
}