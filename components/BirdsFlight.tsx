import type { CSSProperties } from "react";

const birdImages = [
  "/assets/birds/dove-wings-up.png",
  "/assets/birds/dove-wings-middle.png",
  "/assets/birds/dove-wings-down.png",
];

const birds = [
  { id: 1, image: birdImages[0], startX: 49, startY: 56, midX: 36, midY: 41, endX: -24, endY: 16, startScale: 0.06, midScale: 0.48, endScale: 1.35, startRotate: 4, midRotate: -5, endRotate: -14, delay: 0.4, duration: 5, zIndex: 8, flip: true },
  { id: 2, image: birdImages[1], startX: 51, startY: 56, midX: 64, midY: 42, endX: 122, endY: 18, startScale: 0.06, midScale: 0.46, endScale: 1.35, startRotate: -5, midRotate: 3, endRotate: 13, delay: 0.75, duration: 5.2, zIndex: 8, flip: false },
  { id: 3, image: birdImages[2], startX: 50, startY: 55, midX: 52, midY: 33, endX: 58, endY: -18, startScale: 0.055, midScale: 0.42, endScale: 1.05, startRotate: 0, midRotate: 3, endRotate: 6, delay: 1.05, duration: 4.9, zIndex: 7, flip: false },
  { id: 4, image: birdImages[0], startX: 48, startY: 58, midX: 27, midY: 50, endX: -30, endY: 50, startScale: 0.075, midScale: 0.6, endScale: 1.7, startRotate: 5, midRotate: -7, endRotate: -18, delay: 1.3, duration: 4.8, zIndex: 10, flip: true },
  { id: 5, image: birdImages[1], startX: 52, startY: 57, midX: 74, midY: 49, endX: 130, endY: 50, startScale: 0.075, midScale: 0.58, endScale: 1.65, startRotate: -3, midRotate: 6, endRotate: 16, delay: 1.6, duration: 5, zIndex: 10, flip: false },
  { id: 6, image: birdImages[2], startX: 49, startY: 57, midX: 43, midY: 33, endX: 18, endY: -20, startScale: 0.055, midScale: 0.38, endScale: 0.92, startRotate: 2, midRotate: -2, endRotate: -9, delay: 1.9, duration: 5.4, zIndex: 6, flip: true },
  { id: 7, image: birdImages[1], startX: 51, startY: 58, midX: 66, midY: 64, endX: 118, endY: 88, startScale: 0.08, midScale: 0.66, endScale: 1.8, startRotate: -2, midRotate: 5, endRotate: 10, delay: 2.2, duration: 4.9, zIndex: 11, flip: false },
];

export default function BirdsFlight() {
  return (
    <div className="doves" aria-hidden="true">
      {birds.map((bird) => (
        <div
          key={bird.id}
          className={`dove bird-motion bird-flight bird-flight-${bird.id}`}
          style={{
            "--start-x": `${bird.startX}%`,
            "--start-y": `${bird.startY}%`,
            "--mid-x": `${bird.midX}%`,
            "--mid-y": `${bird.midY}%`,
            "--end-x": `${bird.endX}%`,
            "--end-y": `${bird.endY}%`,
            "--start-scale": bird.startScale,
            "--mid-scale": bird.midScale,
            "--end-scale": bird.endScale,
            "--start-rotate": `${bird.startRotate}deg`,
            "--mid-rotate": `${bird.midRotate}deg`,
            "--end-rotate": `${bird.endRotate}deg`,
            "--delay": `${bird.delay}s`,
            "--duration": `${bird.duration}s`,
            "--blur-start": "1px",
            "--blur-end": "1.5px",
            "--flap": "0.24s",
            zIndex: bird.zIndex,
          } as CSSProperties}
        >
          <div className="dove-inner">
            <img
              className={`bird-image${bird.flip ? " flipped" : ""}`}
              src={bird.image}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
}
