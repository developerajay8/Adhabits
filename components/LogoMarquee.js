// components/LogoMarquee.js
import Marquee from "react-fast-marquee";

const logos = [
  "/logos/logo1.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
];

export default function LogoMarquee() {
  return (
    <div className="w-[100px] grid grid-cols-2 md:grid-cols-4 gap-8 items-center border-gray-300 py-4">
      <Marquee
        pauseOnHover={true}
        speed={50}
        gradient={false}
        className="flex items-center space-x-10"
      >
        {logos.map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt={`Company logo ${idx + 1}`}
            className="h-14 md:h-20 object-contain select-none"
            draggable="false"
          />
        ))}
      </Marquee>
    </div>
  );
}
