import { env } from "@/env";
import { Octokit } from "@octokit/rest";

const repoOwner = "kaloyanBozhkov",
  repoName = "mothmankiller",
  octokit = new Octokit({
    auth: env.GITHUB_ACCESS_TOKEN,
  });

export { repoOwner, repoName };
export default octokit;
