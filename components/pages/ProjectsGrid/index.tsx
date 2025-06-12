import ProjectCard from "@/components/common/ProjectCard";
import { Repos } from "@/lib/types";
import { motion } from "framer-motion";
import Link from "next/link";
const ProjectsGrid = ({ repos }: { repos: Repos[] }) => {
  console.log(repos);
  return (
    <div className="flex flex-col gap-6 md:gap-12 lg:gap-14 md:justify-center">
      <div className="grid md:grid-cols-3 gap-2 md:gap-4 xl:gap-6">
        {repos.map((repo, i) => {
          if (
            repo.name === "Sendagest-Transport-Management" ||
            repo.name === "Chat-App" ||
            repo.name === "Budget-Management" ||
            repo.name === "Online-Assignment" ||
            repo.name === "Rideshare-With-Mobile" ||
            repo.name === "ScholarSys-Backend"
          )
            return <ProjectCard key={repo.id} {...repo} delay={i * 0.1} />;
        })}
      </div>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.4 }}
        className="text-center xl:text-lg font-light"
      >
        You can find more project{"'"}s here{" "}
        <Link
          target="_blank"
          href={"https://github.com/daaouakf"}
          className="font-semibold hover:underline transition duration-200"
        >
          github/daaouakf
        </Link>
      </motion.span>
    </div>
  );
};

export default ProjectsGrid;
