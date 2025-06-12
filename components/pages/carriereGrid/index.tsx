import React, { useRef } from "react";
import Link from "next/link";
import { FC } from "react";

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
  SiFlutter,
  SiFigma,
  SiAdobexd,
  SiRedux,
  SiUml,
  SiLaravel,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiAngular,
  SiExpress,
  SiSass,
  SiGit,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { Carrier } from "@/lib/types";
import { motion, useAnimation, useInView } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const CarrierGrid: FC<Carrier> = ({
  id,
  delay,
  title,
  topics,
  company,
  image,
  period,
  startedAt,
  description,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();
  React.useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      key={id}
      variants={{
        hidden: {
          opacity: 0,
          y: 75,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      animate={animation}
      transition={{ delay: 0.25, duration: 0.5 }}
      className={` border-b-2 dark:border-slate-100 shadow-md shadow-slate-900/25 dark:shadow-slate-100/25 p-8   rounded-2xl  mx-auto overflow-hidden sm:mb-10 lg:mb-32 w-full`}
    >
      <motion.div
        className={`md:flex lg:flex md:gap-5 lg:justify-between md:justify-between rounded-lg  ${
          id! % 2 ? "" : "flex-row-reverse"
        }`}
      >
        <motion.div
          whileHover={{ translateY: -2 }}
          className=" md:shrink-0 w-lg rounded-2xl md:h-60 md:max-w-md lg:h-80 lg:max-w-lg lg:min-w-[420px]"
        >
          <LazyLoadImage
            effect="opacity"
            src={image}
            alt="Modern building architecture"
            width={400}
            height={400}
            className=" w-full object-fill h-full  rounded-2xl"
            
          />
        </motion.div>
        <motion.div className="leading-6 max-w-md">
          <motion.p className="text-lg leading-tight uppercase tracking-wide mt-2">
            🎯 {company}{" "}
          </motion.p>
          <motion.p className="my-2 text-xl  font-semibold">{title}</motion.p>
          <motion.p className="my-5  text-slate-500">{description}</motion.p>
          <motion.div className="flex gap-5">
            <motion.p className="my-6  text-slate-500 ">
              Started : {startedAt}{" "}
            </motion.p>
            <motion.p className="my-6  text-slate-500 ">{period}</motion.p>
          </motion.div>
          <motion.div className="flex items-center gap-2 lg:gap-3 mt-3">
            {topics.map((topic) => {
              switch (topic) {
                case "javascript":
                  return (
                    <Link
                      target="_blank"
                      shallow
                      key={1}
                      href={
                        "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                      }
                    >
                      {" "}
                      <SiJavascript />
                    </Link>
                  );
                case "uml":
                  return (
                    <Link
                      target="_blank"
                      shallow
                      key={2}
                      href={"https://www.jquery.com"}
                    >
                      {" "}
                      <SiUml />
                    </Link>
                  );
                  case"expressJs":
                  return (
                    <Link
                      target="_blank"
                      shallow
                      key={2}
                      href={"https://www.jquery.com"}
                    >
                      {" "}
                      <SiExpress />
                    </Link>
                  );
                case "c":
                  return (
                    <Link
                      target="_blank"
                      shallow
                      key={3}
                      href={"https://www.cprogramming.com/"}
                    >
                      {" "}
                      <SiCoursera />
                    </Link>
                  );
                case "cpp":
                  return (
                    <Link
                      target="_blank"
                      shallow
                      key={4}
                      href={"https://www.w3schools.com/cpp/"}
                    >
                      {" "}
                      <SiCplusplus />
                    </Link>
                  );
                case "html":
                  return (
                    <Link
                      target="_blank"
                      shallow
                      key={5}
                      href={"https://www.w3schools.com/cpp/"}
                    >
                      {" "}
                      <SiHtml5 />
                    </Link>
                  );
                case "sql":
                  return (
                    <Link
                      target="_blank"
                      shallow
                      key={6}
                      href={"https://www.w3schools.com/cpp/"}
                    >
                      {" "}
                      <SiMysql />
                    </Link>
                  );
                case "laravel":
                  return (
                    <Link
                      target="_blank"
                      shallow
                      key={7}
                      href={"https://www.w3schools.com/cpp/"}
                    >
                      {" "}
                      <SiLaravel />
                    </Link>
                  );
                case "css":
                  return (
                    <Link
                      target="_blank"
                      shallow
                      key={8}
                      href={"https://www.w3schools.com/cpp/"}
                    >
                      {" "}
                      <SiCss3 />
                    </Link>
                  );
                    case "Angular":
                  return (
                    <Link
                      target="_blank"
                      shallow
                      key={8}
                      href={"https://www.w3schools.com/cpp/"}
                    >
                      {" "}
                      <SiAngular />
                    </Link>
                  );
                case "typescript":
                  return (
                    <Link
                      target="_blank"
                      shallow
                      key={9}
                      href={"https://www.typescriptlang.org"}
                    >
                      {" "}
                      <SiTypescript />
                    </Link>
                  );
                case "java":
                  return (
                    <Link
                      target="_blank"
                      shallow
                      key={10}
                      href={"https://www.java.com"}
                    >
                      {" "}
                      <FaJava />
                    </Link>
                  );

                case "adobexd":
                  return (
                    <Link
                      target="_blank"
                      shallow
                      key={11}
                      href={"https://www.jquery.com"}
                    >
                      {" "}
                      <SiAdobexd />
                    </Link>
                  );

                case "redux":
                  return (
                    <Link
                      target="_blank"
                      shallow
                      key={12}
                      href={"https://www.jquery.com"}
                    >
                      {" "}
                      <SiRedux />
                    </Link>
                  );
                case "jquery":
                  return (
                    <Link
                      target="_blank"
                      shallow
                      key={13}
                      href={"https://www.jquery.com"}
                    >
                      {" "}
                      <SiJquery />
                    </Link>
                  );
                case "hibernate":
                  return (
                    <Link
                      target="_blank"
                      shallow
                      key={14}
                      href={"https://www.hibernate.org"}
                    >
                      {" "}
                      <SiHibernate />
                    </Link>
                  );
                case "nodejs":
                  return (
                    <Link
                      target="_blank"
                      shallow
                      key={15}
                      href={"https://www.node.org"}
                    >
                      {" "}
                      <SiNodedotjs />
                    </Link>
                  );
                case "flutter":
                  return (
                    <Link
                      target="_blank"
                      shallow
                      key={16}
                      href={"https://www.node.org"}
                    >
                      {" "}
                      <SiFlutter />
                    </Link>
                  );
                case "figma":
                  return (
                    <Link
                      target="_blank"
                      shallow
                      key={17}
                      href={"https://www.node.org"}
                    >
                      {" "}
                      <SiFigma />
                    </Link>
                  );
                case "react":
                  return (
                    <Link
                      target="_blank"
                      shallow
                      key={18}
                      href={"https://reactjs.org/"}
                    >
                      {" "}
                      <SiReact />
                    </Link>
                  );
                case "react-native":
                  return (
                    <Link
                      target="_blank"
                      shallow
                      key={19}
                      href={"https://reactnative.dev/"}
                    >
                      {" "}
                      <SiReact />
                    </Link>
                  );
                case "nextjs":
                  return (
                    <Link
                      target="_blank"
                      shallow
                      key={20}
                      href={"https://nextjs.org/"}
                    >
                      {" "}
                      <SiNextdotjs />
                    </Link>
                  );
                case "vercel":
                  return (
                    <Link
                      target="_blank"
                      shallow
                      key={21}
                      href={"https://vercel.com/"}
                    >
                      {" "}
                      <SiVercel />
                    </Link>
                  );
                case "heroku":
                  return (
                    <Link
                      target="_blank"
                      shallow
                      key={22}
                      href={"https://heroku.com/"}
                    >
                      {" "}
                      <SiHeroku />
                    </Link>
                  );
                case "tailwindcss":
                  return (
                    <Link
                      target="_blank"
                      shallow
                      key={23}
                      href={"https://tailwindcss.com/"}
                    >
                      {" "}
                      <SiTailwindcss />
                    </Link>
                  );
                case "django":
                  return (
                    <Link
                      target="_blank"
                      shallow
                      key={24}
                      href={"https://www.djangoproject.com/"}
                    >
                      {" "}
                      <SiDjango />
                    </Link>
                  );
                case "docker":
                  return (
                    <Link
                      target="_blank"
                      shallow
                      key={25}
                      href={"https://docs.docker.com/"}
                    >
                      {" "}
                      <SiDocker />
                    </Link>
                  );
                case "framer-motion":
                  return (
                    <Link
                      target="_blank"
                      shallow
                      key={26}
                      href={"https://www.framer.com/motion/"}
                    >
                      {" "}
                      <SiFramer />
                    </Link>
                  );
                case "nginx":
                  return (
                    <Link
                      target="_blank"
                      shallow
                      key={27}
                      href={"https://www.nginx.com/"}
                    >
                      {" "}
                      <SiNginx />
                    </Link>
                  );
                case "mongodb":
                  return (
                    <Link
                      target="_blank"
                      shallow
                      key={28}
                      href={"https://www.mongodb.com/"}
                    >
                      {" "}
                      <SiMongodb />
                    </Link>
                  );
                case "jwt":
                  return (
                    <Link
                      target="_blank"
                      shallow
                      key={29}
                      href={"https://www.jwt.io/"}
                    >
                      {" "}
                      <SiJsonwebtokens />
                    </Link>
                  );
                  case "saas" :
                    return (
                      <Link
                        target="_blank"
                        shallow
                        key={30}
                        href={"https://www.saas.com"}
                      >
                        {" "}
                        <SiSass />
                      </Link>
                    );
                    case "git" :
                    return (
                      <Link
                        target="_blank"
                        shallow
                        key={30}
                        href={"https://www.git.com"}
                      >
                        {" "}
                        <SiGit />
                      </Link>
                    );
                case "firebase":
                  return (
                    <Link
                      target="_blank"
                      shallow
                      key={30}
                      href={"https://www.firebase.google.com/"}
                    >
                      {" "}
                      <SiFirebase />
                    </Link>
                  );
              }
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CarrierGrid;
