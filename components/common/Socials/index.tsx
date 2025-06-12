import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
import { TbBrandGithub, TbBrandLinkedin, TbBrandTwitter } from "react-icons/tb";

const Socials: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`hidden text-2xl md:flex gap-x-10 xl:gap-x-8 ${className}`}>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
        <Link href={"https://github.com/daaouakf"} target="_blank">
          <TbBrandGithub aria-label="GitHub Profile" />
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
        <Link
          href={"https://www.linkedin.com/in/fayssal-daaouak-2346071ab/"}
          target="_blank"
        >
          <TbBrandLinkedin aria-label="Linkedin Profile" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Socials;
