// Enhanced slides database with additional images
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
    img: "https://plus.unsplash.com/premium_photo-1682124457963-27b455d8dc67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhY3Rvcnl8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://plus.unsplash.com/premium_photo-1682124457963-27b455d8dc67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhY3Rvcnl8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FyZWhvdXNlJTIwcm9ib3RpY3N8ZW58MHx8MHx8fDA%3D",
      "https://images.pexels.com/photos/1267330/pexels-photo-1267330.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/31856778/pexels-photo-31856778/free-photo-of-industrial-crane-loading-container-in-warehouse.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    title: "Smart Warehousing",
    desc: "Modern storage solutions with real-time inventory tracking and robotics.",
    badgeColor: "bg-gray-800",
    location: "https://maps.app.goo.gl/qmU3uoG5YBbq8nLS9",
    longDesc:
      "This solution offers a full suite of tools designed to grow businesses through automation, user experience, and scalable infrastructure. Clients have praised the streamlined interface and impact it's had on their growth and customer satisfaction.",
  },
  {
    id: 4,
    img: "https://media.istockphoto.com/id/1032617444/photo/warehouse-with-tyres-on-store.webp?a=1&b=1&s=612x612&w=0&k=20&c=YgWbojpOL51EuTQLzNCOLU5bBcaeEjqDjG80gKzVYx4=",
    images: [
      "https://media.istockphoto.com/id/1032617444/photo/warehouse-with-tyres-on-store.webp?a=1&b=1&s=612x612&w=0&k=20&c=YgWbojpOL51EuTQLzNCOLU5bBcaeEjqDjG80gKzVYx4=",
      "https://images.pexels.com/photos/172074/pexels-photo-172074.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9naXN0aWNzfGVufDB8fDB8fHww",
      "https://images.pexels.com/photos/1544372/pexels-photo-1544372.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    title: "Efficient Logistics",
    desc: "Seamless delivery operations across cities and borders.",
    badgeColor: "bg-yellow-400",
    location: "https://maps.app.goo.gl/qmU3uoG5YBbq8nLS9",
    longDesc:
      "This solution offers a full suite of tools designed to grow businesses through automation, user experience, and scalable infrastructure. Clients have praised the streamlined interface and impact it's had on their growth and customer satisfaction.",
  },
  {
    id: 5,
    img: "https://plus.unsplash.com/premium_photo-1661836187612-c13f34f228f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjdG9yeSUyMHBhcGVyfGVufDB8fDB8fHww",
    images: [
      "https://plus.unsplash.com/premium_photo-1661836187612-c13f34f228f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjdG9yeSUyMHBhcGVyfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVjeWNsaW5nfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVjeWNsaW5nJTIwZmFjdG9yeXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.pexels.com/photos/3283430/pexels-photo-3283430.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    title: "Eco-Friendly Recycling",
    desc: "Committed to a cleaner future through industrial recycling practices.",
    badgeColor: "bg-gray-800",
    location: "https://maps.app.goo.gl/qmU3uoG5YBbq8nLS9",
    longDesc:
      "This solution offers a full suite of tools designed to grow businesses through automation, user experience, and scalable infrastructure. Clients have praised the streamlined interface and impact it's had on their growth and customer satisfaction.",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1720036236694-d0a231c52563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhY3RvcnklMjBwYXBlcnxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1720036236694-d0a231c52563?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhY3RvcnklMjBwYXBlcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtmb3JjZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVhbXdvcmt8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZW1wbG95ZWVzfGVufDB8fDB8fHww",
    ],
    title: "Strong Workforce",
    desc: "Our people are our strength - skilled, passionate, and dedicated.",
    badgeColor: "bg-yellow-400",
    location: "https://maps.app.goo.gl/qmU3uoG5YBbq8nLS9",
    longDesc:
      "This solution offers a full suite of tools designed to grow businesses through automation, user experience, and scalable infrastructure. Clients have praised the streamlined interface and impact it's had on their growth and customer satisfaction.",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1600683550547-2c38a96fb400?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhY3RvcnklMjBzdGVlbHxlbnwwfHwwfHx8MA%3D%3D",
    images: [
      "https://images.unsplash.com/photo-1600683550547-2c38a96fb400?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhY3RvcnklMjBzdGVlbHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    ],
    title: "Tech-Driven Solutions",
    desc: "Leveraging innovation to drive growth and efficiency in every department.",
    badgeColor: "bg-gray-800",
    location: "https://maps.app.goo.gl/qmU3uoG5YBbq8nLS9",
    longDesc:
      "This solution offers a full suite of tools designed to grow businesses through automation, user experience, and scalable infrastructure. Clients have praised the streamlined interface and impact it's had on their growth and customer satisfaction.",
  },
];

export default slides;
