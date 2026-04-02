export type AchievementRank = '1st' | '2nd' | '3rd' | 'hon';
export type AchievementCategory = 'hackathon' | 'competition' | 'award';

export interface Achievement {
  slug: string;
  title: string;
  issuer: string;
  date: string;
  rank: AchievementRank;
  category: AchievementCategory;
  description: string;
  role?: string;
  images?: string[];
  link?: string;
}

export const achievements: Achievement[] = [
  {
    slug: 'amicta-2023',
    title: '2nd place in the AI and IoT category at Amicta 2023',
    issuer: 'Amicta Amikom',
    date: 'Jul 2023',
    rank: '2nd',
    category: 'hackathon',
    description: 'Successfully won 2nd place in the AI and IoT of Amicta Competition with a GolekFood App — food recommendations based on nutrition integrated with artificial intelligence technology.',
    role: 'Backend Developer',
    images: ['/assets/certs/amicta-2023.jpg'],
  },
  {
    slug: 'abp-prasindo',
    title: '3rd place in ABP x PT Prasindo Teknologi Incubator Hackathon',
    issuer: 'ABP Incubator x PT Prasindo',
    date: 'Jun 2023',
    rank: '3rd',
    category: 'hackathon',
    description: 'Won 3rd place in the ABP x PT Prasindo Teknologi Incubator Hackathon with a Hoax Detection News application.',
    role: 'Backend Developer',
    images: [
      '/assets/certs/abp-hackathon-1.jpg',
      '/assets/certs/abp-hackathon-2.jpg',
    ],
  },
  {
    slug: 'gkm-uiux-champion',
    title: 'Favorite UI/UX Champion in GKM (Gelar Karya Mahasiswa) competition',
    issuer: 'Informatics Student Association (HMIF) AMIKOM',
    date: 'Mar 2022',
    rank: 'hon',
    category: 'competition',
    description: 'Successfully won the competency for Favorite UI/UX champion on GKM Amikom.',
    link: 'https://drive.google.com/file/d/1lCa98UDnttSFSfHEq6P1jwpIKUhdPcER/view',
    // role: 'UI/UX Designer',
  },
  {
    slug: 'amcc-2021',
    title: '1st Winner of Frontend Web Programming Division at AMCC Member Awarding Event 2020/2021',
    issuer: 'Amikom Computer Club',
    date: 'Jun 2021',
    rank: '1st',
    category: 'award',
    description: 'Successfully won 1st Place in Frontend Web Programming Division at AMCC Member Awarding Event.',
    link: 'https://drive.google.com/file/d/1CrOWLcnH2XKzbrD0SKnCxCYFU8-zAOzx/view',
    role: 'Frontend Developer',
  },
  {
    slug: 'artcounting-poster',
    title: '1st place of ARTCOUNTING Poster Competition',
    issuer: 'Student association majoring in accounting FEB UNS',
    date: 'Des 2020',
    rank: '1st',
    category: 'competition',
    // role: 'Designer',
    description: 'Successfully won the 1st Place ARTCOUNTING Poster Contest.',
    link: 'https://drive.google.com/file/d/1mZ59J5QAiUhCTNJ9Vt5I7h67KzYtIZ2i/view',
  },
];
