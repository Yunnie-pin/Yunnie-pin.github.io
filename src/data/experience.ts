export interface Experience {
  company:      string;
  role:         string;
  period:       string;
  location:     string;
  current:      boolean;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    company:  "PT. Telto Telematis Indonesia",
    role:     "Backend Developer",
    period:   "July 2024 — Present",
    location: "Yogyakarta, Indonesia",
    current:  true,
    achievements: [
      "Provide backend support for multiple client projects, ensuring robust and scalable API development using Go.",
      "Design and implement RESTful APIs with comprehensive documentation and GRPC services for high-performance communication between microservices.",
      "Collaborate with cross-functional teams to integrate backend services with frontend applications and third-party APIs.",
    ],
  },
  {
    company:  "Freelance Software Developer",
    role:     "Fullstack Developer",
    period:   "Nov 2021 — Jun 2023",
    location: "Remote",
    current:  false,
    achievements: [
      "Developed and maintained backend services for various clients using PHP (Laravel) and Node.js, delivering scalable solutions for web applications.",
      "Designed and optimized MySQL databases, improving query performance and ensuring data integrity for client applications.",
      "Implemented RESTful APIs and integrated third-party services, enhancing functionality and user experience for client projects.",
    ],
  },
  {
    company:  "Fullstack Developer",
    role:     "PT Baracipta Esa Engineering",
    period:   "Aug 2023 - Dec 2023",
    location: "Yogyakarta, Indonesia",
    current:  false,
    achievements: [
      "Built and maintained web applications using PHP (CodeIgniter) and MySQL, delivering robust solutions for clients in various industries.",
      "Setup CI/CD pipelines using GitHub Actions, automating testing and deployment processes to improve development efficiency.",
      "Collaborated with frontend developers to integrate APIs and ensure seamless user experiences across applications.",
    ],
  },  
];
