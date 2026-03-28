export const email = "arifinklaten26@gmail.com";

export interface Social {
  name:     string;
  handle:   string;
  url:      string;
  iconSlug: string; // simple-icons slug (e.g. "github", "gitlab") or custom key
  color?:   string; // optional color override; falls back to brand hex
}

export const socials: Social[] = [
  {
    name:     "GitHub",
    handle:   "@Yunnie-pin",
    url:      "https://github.com/Yunnie-pin",
    iconSlug: "github",
  },
  {
    name:     "Gitlab",
    handle:   "@Yunnie-pin",
    url:      "https://gitlab.com/Yunnie-pin",
    iconSlug: "gitlab",
  },
  {
    name:     "LinkedIn",
    handle:   "Arifin Yunianta",
    url:      "https://linkedin.com/in/arifin-yunianta",
    iconSlug: "linkedin",
    color:    "#0A66C2",
  },
  {
    name:     "Discord",
    handle:   "gulagulali#4991",
    url:      "https://discord.com",
    iconSlug: "discord",
  },
  // {
  //   name:     "Instagram",
  //   handle:   "@yunnie_pin",
  //   url:      "https://instagram.com/yunnie_pin",
  //   iconSlug: "instagram",
  // },
];
