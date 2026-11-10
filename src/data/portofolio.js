import foto from "../assets/foto.png";

import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

export const profile = {
  name : "Dinda Ratna Sari",
  initials: "D",
  role: "UI/UX Designer & Social Media Specialist",
  tagline:"Connecting Users to Products, Connecting Brands to People",
  cvUrl: "",
  photo: foto,  
  about: [
    "I am a UI/UX Designer and Social Media Specialist with a passion for creating user-centered designs that enhance the digital experience. With a strong background in design principles and social media strategies, I strive to bridge the gap between users and products, ensuring seamless interactions and meaningful connections.",
    "My expertise lies in understanding user needs, conducting research, and translating insights into intuitive designs. I am dedicated to crafting visually appealing interfaces that not only captivate users but also drive engagement and brand loyalty.", 
  ],
  stats: [
    { value: "7+", label: "Years of Experience" },
    { value: "10+", label: "Projects Completed" },
    
  ],
  focusArea: [
    {
      title: "User Experience Design",
      description: "Creating intuitive and engaging user experiences through research, prototyping, and testing."
    },
    {
      title: "Social Media Strategy",
      description: "Developing and executing social media campaigns that drive brand awareness and audience engagement."
    },
  ],
  domains: [
    "UI/UX Design",
    "Social Media Marketing",
    "Teacher",
    "Brand Strategy",
    "Digital Marketing",
    "Content Creation",
    "Visual Design",
  ]
};

export const skills = [
  {
    title: "UI/UX Design",
    description: "Proficient in designing user interfaces and experiences that are intuitive, visually appealing, and aligned with user needs.",
    items: [
      "Teacher",
      "Photograper",  
      "Visual Design",
      "Digital Marketing",
    ],
  },
  {
    title: "Social Media Marketing",
    description: "Skilled in developing and executing social media strategies to enhance brand presence, engage audiences, and drive conversions.",
    items: [  
      "Digital Marketing",
      "Content Creation",
      "Brand Strategy",     
    ],      
  },
  {
    title: "Tools & Technologies",
    description: "Experienced in utilizing various design and marketing tools to streamline workflows, enhance productivity, and deliver high-quality results.", 
        items: [    "Figma",
      "Adobe Creative Suite",
      "Canva",
      "Google Analytics",
      "basalamiq",
      "Hootsuite",
      "Trello",

    ],  
  }

]

  export const projects = [
  {
    id: 1,
    title: "Desain Interface Travel Time",
    description:
      "Aplikasi Travel Time adalah aplikasi yang dirancang untuk membantu pengguna merencanakan perjalanan mereka dengan lebih efisien. Dengan antarmuka yang intuitif dan fitur-fitur canggih, pengguna dapat dengan mudah mencari rute terbaik, memeriksa kondisi lalu lintas, dan mendapatkan perkiraan waktu perjalanan secara real-time.",
    category: "UI/UX Design",
    tags: ["Design", "User Interface", "Prototyping"],
    link: "#",
    image: "src/assets/app-1.jpg",
    color: "from-blue-500 to-cyan-400",
  },

 {
    id: 2,
    title: "Desain Interface Nature Coffe",
    description:
      "Aplikasi Nature Coffe adalah aplikasi yang dirancang untuk membantu pengguna menemukan dan memesan kue dan Kopi berkualitas tinggi dari berbagai lokasi.",
    category: "UI/UX Design",
    tags: ["Design", "User Interface", "Prototyping"],
    link: "#",
    image: "src/assets/app-2.jpg",
    color: "from-blue-500 to-cyan-400",
  },

   {
    id: 3,
    title: "Desain Interface Hotel Kita Bersama",
    description:
      "Aplikasi Hotel Kita Bersama luxury adalah aplikasi yang dirancang untuk membantu pengguna menemukan dan memesan kamar hotel dari berbagai lokasi.",
    category: "UI/UX Design Website",
    tags: ["Design", "User Interface", "Prototyping", "Website"],
    link: "#",
    image: "src/assets/app-3.jpg",
    color: "from-blue-500 to-cyan-400",
  },

{
    id: 4,
    title: "Photography Product",
    description:
      "Photography Product adalah hasil karya fotografi yang menampilkan keindahan produk dan momen-momen yang memukau. Setiap foto diambil dengan perhatian terhadap detail, komposisi, dan pencahayaan untuk menciptakan visual yang menarik dan menginspirasi.",
    category: "UI/UX Design Website",
    tags: ["Design", "User Interface", "Prototyping", "Website"],
    link: "#",
    image: "src/assets/app-4.jpg",
    color: "from-blue-500 to-cyan-400",
  },

{
    id: 5,
    title: "Photography",
    category: "Photography",
    description:
      "Hasil karya fotografi yang menampilkan keindahan alam dan momen-momen yang memukau. Setiap foto diambil dengan perhatian terhadap detail, komposisi, dan pencahayaan untuk menciptakan visual yang menarik dan menginspirasi.",
    tags: ["Photography", "Nature", "Portrait"],
    link: "#",
    image: "src/assets/app-5.jpg",
    color:"from-blue-500 to-cyan-400",
  },

{
    id: 6,
    title: "Content Creation",
    category: "Social Media",
    description:
      "Konten yang diciptakan untuk menarik perhatian dan melibatkan audiens di platform media sosial.",
    tags: ["Social Media", "Content Writing", "Visual Design"],
    link: "#",
    image: "src/assets/app-6.jpg",
    color:"from-blue-500 to-cyan-400",
  }

]


export const socials = [
  {
    label: "LinkedIn",
    handle: "Dinda Ratna Sari",
    url: "https://www.linkedin.com/in/dindaratnasari/",
    icon: FaLinkedinIn,
    color: "group-hover:bg-sky-700",
  },
  {
    label: "Instagram",
    handle: "@dindartnsr",
    // URL Instagram ditulis TANPA tanda @
    url: "https://instagram.com/dindartnsr",
    icon: FaInstagram,
    color: "group-hover:bg-pink-600",
  },
  {
    label: "WhatsApp",
    handle: "0895-3286-252536",
    url: "https://wa.me/62895328625236",
    icon: FaWhatsapp,
    color: "group-hover:bg-green-600",
  },
  {
    label: "GitHub",
    handle: "Dindartnsr",
    url: "https://github.com/Dindartnsr",
    icon: FaGithub,
    color: "group-hover:bg-slate-900",
  },
  {
    label: "Email",
    handle: "dindanasari.study@gmail.com",
    // mailto: → membuka aplikasi email pengunjung dengan alamat tujuan terisi otomatis
    url: "mailto:dindanasari.study@gmail.com",
    icon: FaEnvelope,
    color: "group-hover:bg-brand",
  },
];