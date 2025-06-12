import { Repos } from "@/lib/types";
import { motion } from "framer-motion";
import Link from "next/link";
import { FC, useState } from "react";
import {
  SiCoursera,
  SiCplusplus,
  SiDocker,
  SiFramer,
  SiJavascript,
  SiMariadb,
  SiNextdotjs,
  SiNginx,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
  SiDjango,
  SiNodedotjs,
  SiMongodb,
  SiJsonwebtokens,
  SiFirebase,
  SiHeroku,
  SiVercel,
  SiHibernate,
  SiJquery,
  SiCoffeescript,
  SiHtml5,
  SiCss3,
  SiLaravel,
  SiUml,
  SiFlutter,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscLinkExternal } from "react-icons/vsc";

// TechIcon component with custom tooltip
interface TechIconProps {
  name: string;
  href: string;
  icon: React.ReactNode;
  id: number;
}

const TechIcon: FC<TechIconProps> = ({ name, href, icon, id }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <div className="relative" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
      <Link
        target="_blank"
        shallow
        key={id}
        href={href}
        className="hover:scale-125 transition-transform duration-200 block"
      >
        {icon}
      </Link>
      {showTooltip && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-800 px-2 py-1 rounded text-xs whitespace-nowrap z-10">
          {name}
        </div>
      )}
    </div>
  );
};

const ProjectCard: FC<Repos> = ({
  name,
  description,
  topics,
  html_url,
  delay,
}) => {
  console.log(topics);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.5 }}
      className="border border-r-2 border-b-2 dark:border-slate-100 border-slate-900 shadow-md shadow-slate-900/25 dark:shadow-slate-100/25 rounded-lg p-3 md:p-4 xl:p-6 flex flex-col justify-between gap-4 xl:gap-8"
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-2 xl:gap-3">
          <h2 className="font-bold text-xl lg:text-2xl 2xl:text-3xl">{name}</h2>
          <span className="text-xs lg:text-sm 2xl:text-base font-light">
            {description}
          </span>
        </div>
        <Link shallow href={html_url} target="_blank">
          <VscLinkExternal />
        </Link>
      </div>
      <div className="flex items-center gap-2 lg:gap-3">
        {topics.map((topic) => {
          switch (topic) {
            case "javascript":
              return (
                <TechIcon 
                  key={1}
                  id={1}
                  name="JavaScript" 
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  icon={<SiJavascript />}
                />
              );
            case "c":
              return (
                <TechIcon 
                  key={2}
                  id={2}
                  name="C" 
                  href="https://www.cprogramming.com/"
                  icon={<SiCoursera />}
                />
              );

            case "cpp":
              return (
                <TechIcon 
                  key={3}
                  id={3}
                  name="C++" 
                  href="https://www.w3schools.com/cpp/"
                  icon={<SiCplusplus />}
                />
              );

            case "typescript":
              return (
                <TechIcon 
                  key={4}
                  id={4}
                  name="TypeScript" 
                  href="https://www.typescriptlang.org"
                  icon={<SiTypescript />}
                />
              );

            case "react":
              return (
                <TechIcon 
                  key={5}
                  id={5}
                  name="React" 
                  href="https://reactjs.org/"
                  icon={<SiReact />}
                />
              );

            case "tailwindcss":
              return (
                <TechIcon 
                  key={6}
                  id={6}
                  name="Tailwind CSS" 
                  href="https://tailwindcss.com/"
                  icon={<SiTailwindcss />}
                />
              );
            case "django":
              return (
                <TechIcon 
                  key={7}
                  id={7}
                  name="Django" 
                  href="https://www.djangoproject.com/"
                  icon={<SiDjango />}
                />
              );
            case "docker":
              return (
                <TechIcon 
                  key={8}
                  id={8}
                  name="Docker" 
                  href="https://docs.docker.com/"
                  icon={<SiDocker />}
                />
              );
            case "framer-motion":
              return (
                <TechIcon 
                  key={9}
                  id={9}
                  name="Framer Motion" 
                  href="https://www.framer.com/motion/"
                  icon={<SiFramer />}
                />
              );
            case "nginx":
              return (
                <TechIcon 
                  key={10}
                  id={10}
                  name="Nginx" 
                  href="https://www.nginx.com/"
                  icon={<SiNginx />}
                />
              );
            case "mongodb":
              return (
                <TechIcon 
                  key={11}
                  id={11}
                  name="MongoDB" 
                  href="https://www.mongodb.com/"
                  icon={<SiMongodb />}
                />
              );
            case "jwt":
              return (
                <TechIcon 
                  key={12}
                  id={12}
                  name="JSON Web Token" 
                  href="https://www.jwt.io/"
                  icon={<SiJsonwebtokens />}
                />
              );
            case "firebase":
              return (
                <TechIcon 
                  key={13}
                  id={13}
                  name="Firebase" 
                  href="https://www.firebase.google.com/"
                  icon={<SiFirebase />}
                />
              );
            case "html":
              return (
                <TechIcon 
                  key={14}
                  id={14}
                  name="HTML5" 
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  icon={<SiHtml5 />}
                />
              );
            case "css":
              return (
                <TechIcon 
                  key={15}
                  id={15}
                  name="CSS3" 
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                  icon={<SiCss3 />}
                />
              );
            case "laravel":
              return (
                <TechIcon 
                  key={16}
                  id={16}
                  name="Laravel" 
                  href="https://laravel.com/"
                  icon={<SiLaravel />}
                />
              );
            case "java":
              return (
                <TechIcon 
                  key={17}
                  id={17}
                  name="Java" 
                  href="https://www.java.com"
                  icon={<FaJava />}
                />
              );
            case "jquery":
              return (
                <TechIcon 
                  key={18}
                  id={18}
                  name="jQuery" 
                  href="https://www.jquery.com"
                  icon={<SiJquery />}
                />
              );
            case "uml":
              return (
                <TechIcon 
                  key={19}
                  id={19}
                  name="UML" 
                  href="https://www.uml.org/"
                  icon={<SiUml />}
                />
              );
            case "hibernate":
              return (
                <TechIcon 
                  key={20}
                  id={20}
                  name="Hibernate" 
                  href="https://www.hibernate.org"
                  icon={<SiHibernate />}
                />
              );
            case "nodejs":
              return (
                <TechIcon 
                  key={21}
                  id={21}
                  name="Node.js" 
                  href="https://nodejs.org/"
                  icon={<SiNodedotjs />}
                />
              );
            case "react-native":
              return (
                <TechIcon 
                  key={22}
                  id={22}
                  name="React Native" 
                  href="https://reactnative.dev/"
                  icon={<SiReact />}
                />
              );
            case "nextjs":
              return (
                <TechIcon 
                  key={23}
                  id={23}
                  name="Next.js" 
                  href="https://nextjs.org/"
                  icon={<SiNextdotjs />}
                />
              );
            case "vercel":
              return (
                <TechIcon 
                  key={24}
                  id={24}
                  name="Vercel" 
                  href="https://vercel.com/"
                  icon={<SiVercel />}
                />
              );
            case "heroku":
              return (
                <TechIcon 
                  key={25}
                  id={25}
                  name="Heroku" 
                  href="https://heroku.com/"
                  icon={<SiHeroku />}
                />
              );
            case "flutter":
              return (
                <TechIcon 
                  key={26}
                  id={26}
                  name="Flutter" 
                  href="https://flutter.dev/"
                  icon={<SiFlutter />}
                />
              );
            case "dart":
              return (
                <TechIcon 
                  key={27}
                  id={27}
                  name="Dart" 
                  href="https://dart.dev/"
                  icon={<SiCoursera />}
                />
              );
            case "express":
              return (
                <TechIcon 
                  key={28}
                  id={28}
                  name="Express.js" 
                  href="https://expressjs.com/"
                  icon={<SiNodedotjs />}
                />
              );
          }
        })}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
