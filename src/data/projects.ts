export interface Project {
  title: string;
  description: string;
  tech: string[];
  url?: string;
  repo?: string;
  status: 'live' | 'wip' | 'archived';
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Project Title 1",
    description: "Deskripsi singkat proyek ini. Ceritakan apa yang dibangun, masalah yang diselesaikan, dan teknologi utama yang digunakan.",
    tech: ["PHP", "Laravel", "MySQL"],
    url: "#",
    repo: "#",
    status: "live",
    featured: true,
  },
  {
    title: "Project Title 2",
    description: "Deskripsi singkat proyek ini. REST API backend untuk aplikasi mobile dengan autentikasi JWT dan manajemen role.",
    tech: ["Laravel", "PostgreSQL", "REST API"],
    url: "#",
    repo: "#",
    status: "live",
  },
  {
    title: "Project Title 3",
    description: "Deskripsi singkat proyek ini. Script automasi data dengan Python untuk kebutuhan reporting dan analitik.",
    tech: ["Python", "MySQL", "Pandas"],
    repo: "#",
    status: "wip",
  },
  {
    title: "Project Title 4",
    description: "Deskripsi singkat proyek ini. Tambahkan detail proyek Anda di sini.",
    tech: ["PHP", "Bootstrap", "JavaScript"],
    url: "#",
    status: "archived",
  },
];
