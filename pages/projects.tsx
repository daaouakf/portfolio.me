import { ProjectsGrid } from "@/components";
import { Repos } from "@/lib/types";
import { FC } from "react";

export async function getStaticProps() {
  const res = await fetch(
    "https://api.github.com/users/daaouakf/repos?per_page=100"
  );
  const repos = await res.json();
  
  // Manually add topics to specific repositories
  const reposWithTopics = repos.map((repo: any) => {
    // Default empty topics array
    let topics: string[] = [];

    // Add topics based on repository name
    if (repo.name === "Sendagest-Transport-Management") {
      topics = ["flutter", "dart", "firebase", "tailwindcss"];
    } else if (repo.name === "Chat-App") {
      topics = ["react", "nextjs", "firebase", "tailwindcss"];
    } else if (repo.name === "Budget-Management") {
      topics = ["react", "nodejs", "mongodb", "tailwindcss"];
    } else if (repo.name === "Online-Assignment") {
      topics = ["react", "firebase", "tailwindcss", "javascript"];
    } else if (repo.name === "Rideshare-With-Mobile") {
      topics = ["flutter", "firebase", "nodejs", "mongodb"];
    } else if (repo.name === "ScholarSys-Backend") {
      topics = ["nodejs", "mongodb", "jwt", "express"];
    }

    // Return the repository with added topics
    return {
      ...repo,
      topics
    };
  });

  return {
    props: {
      repos: reposWithTopics,
    },
    revalidate: 60 * 60,
  };
}

const Projects: FC<{ repos: Repos[] }> = ({ repos }) => {
  return <>{<ProjectsGrid repos={repos} />}</>;
};
export default Projects;
