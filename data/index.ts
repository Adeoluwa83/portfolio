export const navItems = [
  { name: "Technologies", link: "#tech" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
  { name: "Playlist", link: "#song" },
];

export const gridItems = [
 

   {
    id: 2,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-2 lg:row-span-2 md:col-span-1 md:row-span-1 ",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-1 lg:row-span-1 md:col-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-1 lg:row-span-1 md:col-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

 
  {
    id: 5,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-1 lg:row-span-1 md:col-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
  
   {
    id: 6,
    title: "Currently Building a chat application",
    description: "The Inside Scoop",
    className: "lg:col-span-2 row-span-1 md:col-span-1",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
];

export const projects = [
  {
    id: 1,
    title: "Chat Project",
    des: "Introducing ChatterBox, the simplest way to stay in touch with friends, family, and colleagues. Our chat app lets you send messages, share files, and make voice and video calls, all in one place.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/apx.svg"],
    link: "https://43e56eeb.chat-tut.pages.dev/register",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Adeoluwa asojo was a game-changer for my business. They created a beautiful and functional website that has increased our online presence and attracted new customers. Their attention to detail and prompt communication made the process seamless",
    name: "OluwaDara asojo",
    title: " The Licious Letters",
  },
  {
    quote:
      "Adeoluwa asojo helped me launch my online store and it's been a huge success! They optimized the site for conversions and made sure it was mobile-friendly. Their expertise and guidance were invaluable. I've seen a significant increase in sales and couldn't be happier!"
,
    name: " David K.",
    title: " Founder of GearHub",
  },
  {
    quote:
   "We needed a website that would showcase our mission and engage our community. Adeoluwa asojo delivered a stunning site that exceeded our expectations. They were patient, knowledgeable, and dedicated to our cause. We've seen a significant increase in donations and volunteer sign-ups!,",
    name: "Rachel G.",
    title: "Director of Hope Foundation",

  },
  {
    quote:
      "We hired adeoluwa to revamp our company website and they did an outstanding job. They improved our site's performance, made it more user-friendly, and ensured it was optimized for search engines. Their professionalism and expertise made the project a success. We've seen an increase in leads and customer engagement!",
    name: " James D.",
    title: " Marketing Manager at XYZ Corporation",
  },
  {
    quote:
      "As a creative person, I wanted a website that would reflect my artistic style. adeoluwa understood my vision and brought it to life. The site is not only beautiful but also easy to navigate. They made the process enjoyable and stress-free. I highly recommend Him!",
    name: "Maria R.",
    title: "Fine Artist",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];