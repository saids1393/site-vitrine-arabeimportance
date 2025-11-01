'use client';

const videoTest = '/assets/videos/videotest.mp4';

export default function VideoBackground() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
      >
        <source src={videoTest} type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo HTML5.
      </video>
      <div
        className="absolute top-0 left-0 w-full h-full bg-black/60 pointer-events-none"
      />
    </>
  );
}