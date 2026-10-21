import React from "react";
import ReactDOM from "react-dom/client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Download, Code2, Sparkles } from "lucide-react";
import "./index.css";

const fade = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: .7, delay, ease: [.25,.1,.25,1] } })
};

const projects = [
  {
    no: "01",
    name: "Interactive Portfolio Website",
    type: "Frontend",
    description: "A responsive personal portfolio focused on interactive UI, smooth scrolling, animation and cross-device usability.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    mark: "01"
  },
  {
    no: "02",
    name: "Frontend Web Application",
    type: "Web Application",
    description: "A structured responsive application with dynamic components, modern CSS techniques and JavaScript interactivity.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    mark: "02"
  },
  {
    no: "03",
    name: "Advanced Frontend Web Application",
    type: "Full Development",
    description: "A production-ready frontend application developed from implementation through deployment with responsive design principles.",
    stack: ["React", "JavaScript", "Git"],
    mark: "03"
  },
  {
    no: "04",
    name: "Responsive Interactive Web Project",
    type: "UI / UX",
    description: "A modern responsive experience using advanced CSS animation and JavaScript interactivity while keeping the user experience smooth.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    mark: "04"
  },
  {
    no: "05",
    name: "Python Development",
    type: "Programming",
    description: "A collection of Python applications and automation work including Tic-Tac-Toe, Calculator and productivity scripts.",
    stack: ["Python", "Debugging", "Automation"],
    mark: "05"
  }
];

const skills = [
  ["01", "Python", "Applications, automation and problem solving"],
  ["02", "JavaScript", "ES6+, interactive web experiences"],
  ["03", "React", "Component-based responsive interfaces"],
  ["04", "HTML & CSS", "Semantic layouts, animation and responsive design"],
  ["05", "Git & GitHub", "Version control and development workflow"],
  ["06", "UI / UX", "Clean interfaces and user-focused thinking"]
];

function ContactButton() {
  return (
    <a className="inline-flex items-center gap-3 rounded-full px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium uppercase tracking-widest text-white gradient-line shadow-[0_10px_40px_rgba(182,0,168,.18)] hover:scale-[1.03] transition-transform" href="mailto:jadhavpratik6543@gmail.com">
      Contact Me <Mail size={17}/>
    </a>
  );
}

function OutlineButton({children, href="#projects"}: {children: React.ReactNode; href?: string}) {
  return (
    <a href={href} className="inline-flex items-center gap-2 rounded-full border border-[#d7e2ea]/60 px-6 py-3 text-sm uppercase tracking-widest hover:bg-[#d7e2ea]/10 transition-colors">
      {children}
    </a>
  );
}

function Reveal({children, delay=0, className=""}: {children: React.ReactNode; delay?: number; className?: string}) {
  return (
    <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{once:true, amount:.15}} custom={delay} className={className}>
      {children}
    </motion.div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex flex-col px-5 sm:px-8 md:px-10">
      <div className="noise"/>
      <nav className="relative z-20 flex justify-between pt-6 md:pt-8 text-sm md:text-lg uppercase tracking-widest font-medium">
        {["About","Skills","Projects","Contact"].map((x) => (
          <a key={x} href={`#${x.toLowerCase()}`} className="hover:opacity-60 transition-opacity">{x}</a>
        ))}
      </nav>

      <div className="relative z-10 flex-1 flex flex-col justify-center">
        <Reveal className="overflow-hidden mt-4 md:-mt-5">
          <h1 className="hero-heading text-[18vw] sm:text-[16vw] md:text-[15vw] lg:text-[16vw] leading-[.8] font-black uppercase tracking-tight whitespace-nowrap">
            Hi, I&apos;m Pratik
          </h1>
        </Reveal>

        <div className="mt-12 md:mt-16 flex items-end justify-between gap-6">
          <Reveal delay={.25} className="max-w-[260px]">
            <p className="text-sm sm:text-base md:text-xl font-light uppercase tracking-wide leading-snug">
              Computer Science student building modern, scalable and user-friendly digital experiences.
            </p>
          </Reveal>
          <Reveal delay={.4}><ContactButton/></Reveal>
        </div>
      </div>

      <motion.div
        initial={{opacity:0, scale:.8, y:40}} animate={{opacity:1, scale:1, y:0}}
        transition={{duration:1, delay:.55, ease:[.16,1,.3,1]}}
        className="pointer-events-none absolute right-[7%] top-[39%] hidden md:block"
      >
        <div className="relative w-[260px] h-[260px] lg:w-[350px] lg:h-[350px] rounded-full border border-[#d7e2ea]/15 glow">
          <div className="absolute inset-[18%] rounded-full border border-[#d7e2ea]/10"/>
          <div className="absolute inset-[36%] rounded-full gradient-line blur-sm opacity-60"/>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl lg:text-8xl font-black hero-heading">P</div>
        </div>
      </motion.div>
    </section>
  );
}

function About() {
  const text = "I’m a first-year B.Tech Computer Science student with hands-on experience in frontend and full stack web development. I enjoy turning ideas into clean, responsive and useful digital products. I’m currently sharpening my React, TypeScript and modern software engineering skills while building real-world projects.";
  const {scrollYProgress} = useScroll();
  const opacity = useTransform(scrollYProgress, [0.12,.3], [0,.9]);

  return (
    <section id="about" className="relative min-h-screen px-5 sm:px-8 md:px-10 py-24 md:py-32 flex flex-col justify-center">
      <Reveal><p className="mb-5 text-xs uppercase tracking-[.35em] opacity-50">01 — About</p></Reveal>
      <Reveal>
        <h2 className="hero-heading text-[17vw] md:text-[13vw] leading-[.8] font-black uppercase tracking-tight">About me</h2>
      </Reveal>
      <motion.p style={{opacity}} className="mt-12 md:mt-20 max-w-3xl text-lg sm:text-xl md:text-2xl font-light leading-relaxed">
        {text}
      </motion.p>
      <div className="mt-12 flex flex-wrap gap-3">
        <OutlineButton href="mailto:jadhavpratik6543@gmail.com"><Mail size={16}/> Email</OutlineButton>
        <OutlineButton href="#projects"><Code2 size={16}/> View work</OutlineButton>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-white text-[#0c0c0c] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-24 md:py-32">
      <Reveal><p className="text-xs uppercase tracking-[.35em] opacity-50 mb-5">02 — Capabilities</p></Reveal>
      <Reveal><h2 className="text-[17vw] md:text-[13vw] leading-[.8] font-black uppercase tracking-tight mb-16 md:mb-28">Skills</h2></Reveal>
      <div className="max-w-5xl mx-auto">
        {skills.map(([no,name,desc], i) => (
          <Reveal key={name} delay={i*.06} className="border-t border-black/15 py-8 sm:py-10 md:py-12">
            <div className="grid grid-cols-[90px_1fr] sm:grid-cols-[140px_1fr] md:grid-cols-[180px_1fr] gap-5 items-start">
              <span className="text-5xl sm:text-6xl md:text-8xl font-black leading-none">{no}</span>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-medium uppercase">{name}</h3>
                <p className="mt-2 text-base md:text-lg font-light opacity-60">{desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({project, index}: {project: typeof projects[number], index:number}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({target:ref, offset:["start 0.8","end 0.35"]});
  const scale = useTransform(scrollYProgress, [0,1], [1, 0.94]);

  return (
    <div ref={ref} className="h-[78vh] md:h-[82vh] relative">
      <motion.article style={{scale, top:index*18}} className="sticky top-20 md:top-28 h-[70vh] md:h-[74vh] rounded-[34px] md:rounded-[54px] border-2 border-[#d7e2ea]/35 bg-[#0c0c0c] p-5 sm:p-7 md:p-9 overflow-hidden">
        <div className="flex flex-col h-full">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-5 md:gap-10">
              <span className="hero-heading text-5xl sm:text-6xl md:text-8xl font-black leading-none">{project.no}</span>
              <div>
                <p className="text-xs uppercase tracking-[.25em] opacity-50 mb-1">{project.type}</p>
                <h3 className="text-xl sm:text-2xl md:text-4xl font-medium uppercase">{project.name}</h3>
              </div>
            </div>
            <a href="#contact" className="hidden sm:inline-flex rounded-full border border-[#d7e2ea]/50 px-5 py-2.5 text-xs uppercase tracking-widest hover:bg-white/10">Discuss</a>
          </div>

          <div className="mt-auto grid md:grid-cols-[1.2fr_1fr] gap-5 items-end">
            <div className="min-h-[220px] md:min-h-[300px] rounded-[28px] md:rounded-[42px] border border-white/10 overflow-hidden relative bg-gradient-to-br from-[#17121a] via-[#0d0d0d] to-[#20131e]">
              <div className="absolute inset-0 opacity-60" style={{backgroundImage:"radial-gradient(circle at 30% 30%, rgba(182,0,168,.28), transparent 28%), radial-gradient(circle at 75% 70%, rgba(118,33,176,.24), transparent 32%)"}}/>
              <span className="absolute -right-4 -bottom-12 text-[15rem] md:text-[20rem] font-black opacity-[.07] leading-none">{project.mark}</span>
              <div className="absolute left-6 bottom-6 flex gap-2 flex-wrap">
                {project.stack.map(s=><span key={s} className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-wider">{s}</span>)}
              </div>
            </div>
            <div className="md:pb-5">
              <Sparkles className="mb-5 opacity-50" size={24}/>
              <p className="text-base md:text-xl font-light leading-relaxed opacity-75">{project.description}</p>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative z-10 -mt-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] bg-[#0c0c0c] px-5 sm:px-8 md:px-10 py-24 md:py-32">
      <Reveal><p className="text-xs uppercase tracking-[.35em] opacity-50 mb-5">03 — Selected work</p></Reveal>
      <Reveal><h2 className="hero-heading text-[17vw] md:text-[13vw] leading-[.8] font-black uppercase tracking-tight mb-16 md:mb-20">Projects</h2></Reveal>
      <div>{projects.map((p,i)=><ProjectCard key={p.no} project={p} index={i}/>)}</div>
    </section>
  );
}

function Experience() {
  return (
    <section className="bg-white text-[#0c0c0c] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-24 md:py-32">
      <Reveal><p className="text-xs uppercase tracking-[.35em] opacity-50 mb-5">04 — Experience & education</p></Reveal>
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
        <Reveal>
          <h2 className="text-6xl sm:text-7xl md:text-9xl font-black uppercase leading-[.8]">Learning<br/>by<br/>building.</h2>
        </Reveal>
        <div>
          <Reveal className="border-t border-black/15 py-8">
            <p className="text-sm uppercase tracking-widest opacity-50">2025 — Present</p>
            <h3 className="mt-3 text-2xl md:text-3xl font-medium uppercase">Full Stack Development Trainee</h3>
            <p className="mt-3 text-lg font-light opacity-65">NxtWave Institute of Advanced Technologies, Hyderabad</p>
            <p className="mt-5 leading-relaxed opacity-70">Industry-focused full stack training with practical frontend and backend implementation, Git, debugging, deployment workflows and responsive UI development.</p>
          </Reveal>
          <Reveal delay={.1} className="border-t border-black/15 py-8">
            <p className="text-sm uppercase tracking-widest opacity-50">2025 — 2029</p>
            <h3 className="mt-3 text-2xl md:text-3xl font-medium uppercase">B.Tech — Computer Science / IT</h3>
            <p className="mt-3 text-lg font-light opacity-65">Aurora Higher Education & Research Academy</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="relative px-5 sm:px-8 md:px-10 py-24 md:py-32 min-h-[75vh] flex flex-col justify-between">
      <div className="noise"/>
      <div className="relative z-10">
        <Reveal><p className="text-xs uppercase tracking-[.35em] opacity-50 mb-5">05 — Contact</p></Reveal>
        <Reveal><h2 className="hero-heading text-[16vw] md:text-[12vw] leading-[.8] font-black uppercase tracking-tight">Let&apos;s<br/>build.</h2></Reveal>
      </div>
      <div className="relative z-10 mt-16 flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div>
          <p className="text-lg md:text-xl font-light opacity-70 max-w-xl">Have an idea, project or opportunity? I&apos;d love to connect.</p>
          <a href="mailto:jadhavpratik6543@gmail.com" className="mt-5 inline-block text-lg md:text-2xl hover:opacity-60 transition-opacity">jadhavpratik6543@gmail.com</a>
        </div>
        <div className="flex gap-3">
          <a aria-label="GitHub" href="#" className="rounded-full border border-white/20 p-4 hover:bg-white/10"><Github size={20}/></a>
          <a aria-label="LinkedIn" href="#" className="rounded-full border border-white/20 p-4 hover:bg-white/10"><Linkedin size={20}/></a>
          <a aria-label="Email" href="mailto:jadhavpratik6543@gmail.com" className="rounded-full border border-white/20 p-4 hover:bg-white/10"><Mail size={20}/></a>
        </div>
      </div>
      <div className="relative z-10 mt-20 border-t border-white/10 pt-5 flex justify-between text-xs uppercase tracking-widest opacity-40">
        <span>© 2026 Pratik Jadhav</span><span>Built with React</span>
      </div>
    </footer>
  );
}

function App() {
  return (
    <main className="overflow-x-clip">
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode><App /></React.StrictMode>
);