export type BadgeVariant = 'primary' | 'cyan' | 'default';

export interface TechItem {
  name: string;
  variant: BadgeVariant;
}

export interface TechCategory {
  label: string;
  items: TechItem[];
}

export const about = {
  name: "Arifin Yunianta",
  githubId: "72777947",
  bio: "Build robust architectures with Intentional Friction. Focus on Go, Node.js, and Distributed Systems that don't just work, they scale.",
  subbio: "I love making some fun stuff and sometimes I just throw shitty stuff together to make my life easier.",
  domicile: "Yogyakarta, Indonesia",
  timezone: "WIB (UTC+7)",
  stats: {
    years: "3+",
    projects: "10+",
  },
};

export const techStackByCategory: TechCategory[] = [
  {
    label: "Languages",
    items: [
      { name: "Go", variant: "primary" },
      { name: "JavaScript", variant: "primary" },
      { name: "TypeScript", variant: "primary" },
      { name: "PHP", variant: "primary" },
      { name: "Python", variant: "primary" },
      { name: "Dart", variant: "primary" },
      { name: "Solidity", variant: "primary" },
    ],
  },
  {
    label: "Frameworks",
    items: [
      { name: "Node.js", variant: "cyan" },
      { name: "Laravel", variant: "cyan" },
      { name: "Flutter", variant: "cyan" },
      { name: "Next.js", variant: "cyan" },
      { name: "React", variant: "cyan" },
      { name: "Jupyter Notebook", variant: "cyan" },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "MySQL", variant: "cyan" },
      { name: "PostgreSQL", variant: "cyan" },
      { name: "MongoDB", variant: "cyan" },
      { name: "SQLite", variant: "cyan" },
      { name: "Firebase", variant: "cyan" },
      { name: "Supabase", variant: "cyan" },
      { name: "ClickHouse", variant: "cyan" },
      { name: "CockroachDB", variant: "cyan" },
    ],
  },
  {
    label: "Infrastructure",
    items: [
      { name: "Docker", variant: "default" },
      { name: "Kafka", variant: "default" },
      { name: "Redis", variant: "default" },
      { name: "Elasticsearch", variant: "default" },
      { name: "Nginx", variant: "default" },
      { name: "Prometheus", variant: "default" },
      { name: "Grafana", variant: "default" },
      { name: "Ubuntu", variant: "default" },
      { name: "Linux", variant: "default" },
      { name: "Proxmox VE", variant: "default" },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Sentry", variant: "default" },
      { name: "n8n", variant: "default" },
      { name: "Ethereum", variant: "default" },
      { name: "Hardhat", variant: "default" },
      { name: "Thirdweb SDK", variant: "default" },
    ],
  },
];

// Flat list kept for backward compatibility if needed
export const techStack: TechItem[] = techStackByCategory.flatMap((c) => c.items);

export const learningStack: TechItem[] = [
  { name: "Kubernetes", variant: "cyan" },
  { name: "Rust", variant: "cyan" },
];
