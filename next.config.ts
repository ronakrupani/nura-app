import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next writes AGENTS.md and CLAUDE.md into the repo on every dev start
  // unless told not to. They are not part of this project.
  agentRules: false,
};

export default nextConfig;
