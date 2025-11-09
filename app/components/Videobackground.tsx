// 'use client';

// export default function VideoBackground() {
//   return (
//     <>
//       {/* Vidéo Desktop */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         preload="auto"
//         className="absolute top-0 left-0 w-full h-full object-contain md:object-cover pointer-events-none hidden md:block"
//       >
//         <source src="../assets/videos/herovideo.mp4" type="video/mp4" />
//         Votre navigateur ne supporte pas la vidéo HTML5.
//       </video>

//       {/* Vidéo Mobile (portrait) */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         preload="auto"
//         className="absolute top-0 left-0 w-full h-full object-contain pointer-events-none block md:hidden"
//         style={{
//           aspectRatio: '9 / 16', // pour portrait
//           objectPosition: 'center center',
//         }}
//       >
//         <source src="../assets/videos/herovideomobile.mp4" type="video/mp4" />
//         Votre navigateur ne supporte pas la vidéo HTML5.
//       </video>

//       {/* Overlay sombre */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black/70 pointer-events-none" />
//     </>
//   );
// }
