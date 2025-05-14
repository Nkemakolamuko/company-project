import { images } from "../assets/images.js";

const slides = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjdG9yeXxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjdG9yeXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.pexels.com/photos/221045/pexels-photo-221045.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFudWZhY3R1cmluZyUyMGhhcmR3YXJlfGVufDB8fDB8fHww",
      "https://images.pexels.com/photos/442154/pexels-photo-442154.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    title: "Parent Hardware Materials",
    desc: "Premium industrial hardware supplies with innovative manufacturing solutions for construction and manufacturing sectors.",
    badgeColor: "bg-gray-800",
    location: "https://maps.app.goo.gl/xuZT2GY9oWy1gytU8",
    longDesc:
      "With over a decade of excellence in hardware manufacturing, we supply high-grade materials from structural metals to specialized components for industrial and commercial projects. Our advanced production facilities integrate smart automation and quality control systems, ensuring consistent precision and reliability that our clients depend on. From custom fabrication to bulk distribution, we've established ourselves as the trusted partner for contractors, manufacturers, and developers seeking durability and innovation.",
  },
  {
    id: 2,
    img: "https://plus.unsplash.com/premium_photo-1682148737203-8118bb2b3e07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGFwZXIlMjBpbmR1c3RyeXxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://plus.unsplash.com/premium_photo-1682148737203-8118bb2b3e07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGFwZXIlMjBpbmR1c3RyeXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.pexels.com/photos/3963076/pexels-photo-3963076.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.unsplash.com/photo-1603665301175-57ba46f392bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFwZXIlMjBwcm9kdWN0aW9ufGVufDB8fDB8fHww",
      "https://images.pexels.com/photos/4998112/pexels-photo-4998112.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    title: "Parent Natural Tissue Paper",
    desc: "Sustainable tissue paper production using responsibly sourced materials and energy-efficient processes.",
    badgeColor: "bg-yellow-400",
    location: "https://maps.app.goo.gl/qmU3uoG5YBbq8nLS9",
    longDesc:
      "Our state-of-the-art paper mills transform responsibly harvested wood pulp and recycled fibers into premium tissue products that balance softness with strength. Utilizing water conservation technology and renewable energy sources, we've reduced our carbon footprint by 40% while increasing production capacity. Our diverse product line includes consumer tissue papers, commercial applications, and specialty packaging solutions, all manufactured with our commitment to environmental stewardship without compromising quality or performance.",
  },
  {
    id: 3,
    img: images.waterPump1,
    images: [
      images.waterPump1,
      images.waterPump2,
      images.waterPump3,
      images.waterPump4,
    ],
    title: "Water Pumps",
    desc: "High-performance water pumps for effective water supply.",
    badgeColor: "bg-gray-800",
    location: "https://maps.app.goo.gl/qmU3uoG5YBbq8nLS9",
    longDesc:
      "High-performance water pumps for reliable water supply. Ideal for construction and industrial use, with advanced features for efficiency and durability.",
  },
  {
    id: 4,
    img: images.inverter1,
    images: [images.inverter1, images.inverter2],
    title: "Reliable Inverters",
    desc: "High-performance inverters for efficient power conversion.",
    badgeColor: "bg-yellow-400",
    location: "https://maps.app.goo.gl/qmU3uoG5YBbq8nLS9",
    longDesc:
      "High-performance inverters for efficient power conversion. Ideal for residential and commercial applications, with advanced features for reliability and energy savings. Inverters designed for seamless integration with solar systems.",
  },
  {
    id: 5,
    img: images.boiteConnection1,
    images: [
      images.boiteConnection1,
      images.boiteConnection2,
      images.boiteConnection3,
      images.boiteConnection4,
    ],
    title: "Boite Connections",
    desc: "Innovative solutions for efficient connectivity.",
    badgeColor: "bg-gray-800",
    location: "https://maps.app.goo.gl/qmU3uoG5YBbq8nLS9",
    longDesc:
      "Enhance your connectivity with our innovative solutions. Designed for seamless integration, our products ensure reliable connections in various applications. Ideal for both residential and commercial use, our solutions prioritize efficiency and performance.",
  },
  {
    id: 6,
    img: images.controlPanel,
    images: [
      images.controlPanel,
      images.controlPanel,
      images.controlPanel,
      images.controlPanel,
    ],
    title: "Control Panels",
    desc: "Advanced control panels for seamless operation and monitoring.",
    badgeColor: "bg-yellow-400",
    location: "https://maps.app.goo.gl/qmU3uoG5YBbq8nLS9",
    longDesc:
      "Our advanced control panels provide seamless operation and monitoring for various applications. Designed for reliability and efficiency, they integrate cutting-edge technology to ensure optimal performance. Ideal for industrial and commercial use, our control panels enhance operational efficiency and safety.",
  },
  {
    id: 7,
    img: images.gen1,
    images: [images.gen1, images.gen2, images.gen3],
    title: "Diesel Generators",
    desc: "High-performance diesel generators for reliable power supply.",
    badgeColor: "bg-gray-800",
    location: "https://maps.app.goo.gl/qmU3uoG5YBbq8nLS9",
    longDesc:
      "For a reliable power supply in construction and industrial applications. Our diesel generators are designed for high performance and durability, ensuring consistent power delivery even in challenging conditions. With advanced features for efficiency and ease of use, they are the ideal choice for demanding environments.",
  },
  {
    id: 8,
    img: images.led,
    images: [images.led, images.led1, images.led2, images.led3, images.led4],
    title: "Light switches",
    desc: "High-performance light switches for reliable power supply.",
    badgeColor: "bg-yellow-400",
    location: "https://maps.app.goo.gl/qmU3uoG5YBbq8nLS9",
    longDesc:
      "For a reliable power supply in construction and industrial applications. Our light switches are designed for high performance and durability, ensuring consistent power delivery even in challenging conditions. With advanced features for efficiency and ease of use, they are the ideal choice for demanding environments.",
  },
  {
    id: 9,
    img: images.meterClamp1,
    images: [
      images.meterClamp1,
      images.meterClamp2,
      images.meterClamp3,
      images.meterClamp4,
    ],
    title: "Clamp meters",
    desc: "High-performance clamp meters for accurate measurements.",
    badgeColor: "bg-gray-800",
    location: "https://maps.app.goo.gl/qmU3uoG5YBbq8nLS9",
    longDesc:
      "We provide high-performance clamp meters for accurate measurements. Our clamp meters are designed for high performance and durability, ensuring consistent power delivery even in challenging conditions. With advanced features for efficiency and ease of use, they are the ideal choice for demanding environments.",
  },
  {
    id: 10,
    img: images.cable1,
    images: [images.cable1, images.cable2, images.cable3, images.cable4],
    title: "Copper Cables",
    desc: "Strong and durable copper cables for reliable connections.",
    badgeColor: "bg-yellow-400",
    location: "https://maps.app.goo.gl/qmU3uoG5YBbq8nLS9",
    longDesc:
      "We provide high-performance copper cables for reliable connections. Our cables are designed for high performance and durability, ensuring consistent power delivery even in challenging conditions. With advanced features for efficiency and ease of use, they are the ideal choice for demanding environments.",
  },
  {
    id: 11,
    img: images.fuse1,
    images: [images.fuse1, images.fuse2, images.fuse3, images.fuse4],
    title: "Fuses",
    desc: "High-performance fuses for reliable protection.",
    badgeColor: "bg-gray-800",
    location: "https://maps.app.goo.gl/qmU3uoG5YBbq8nLS9",
    longDesc:
      "We provide high-performance fuses for reliable protection. Our fuses are designed for high performance and durability, ensuring consistent power delivery even in challenging conditions. With advanced features for efficiency and ease of use, they are the ideal choice for demanding environments.",
  },
  {
    id: 12,
    img: images.fireAlarm1,
    images: [
      images.fireAlarm1,
      images.fireAlarm2,
      images.fireAlarm3,
      images.fireAlarm4,
    ],
    title: "Fire Alarm Control Panels",
    desc: "Advanced fire alarm control panels for enhanced safety.",
    badgeColor: "bg-yellow-400",
    location: "https://maps.app.goo.gl/qmU3uoG5YBbq8nLS9",
    longDesc:
      "We provide advanced fire alarm control panels for enhanced safety. Our control panels are designed for high performance and durability, ensuring consistent operation even in challenging conditions. With advanced features for efficiency and ease of use, they are the ideal choice for demanding environments.",
  },
  {
    id: 13,
    img: images.smokeDetector1,
    images: [
      images.smokeDetector1,
      images.smokeDetector2,
      images.smokeDetector3,
      images.smokeDetector4,
      images.heatDetector,
    ],
    title: "Smoke and Heat Detectors",
    desc: "Advanced smoke and heat detectors for enhanced safety.",
    badgeColor: "bg-gray-800",
    location: "https://maps.app.goo.gl/qmU3uoG5YBbq8nLS9",
    longDesc:
      "We provide advanced smoke and heat detectors for enhanced safety. Our detectors are designed for high performance and durability, ensuring consistent operation even in challenging conditions. With advanced features for efficiency and ease of use, they are the ideal choice for demanding environments.",
  },
];

export default slides;
