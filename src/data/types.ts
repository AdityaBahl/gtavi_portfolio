export type Skill = {
  name: string
  value: number
}

export type SkillGroup = {
  category: string
  items: string[]
}

/** A career experience — rendered in "Main Missions" + on a detail page. */
export type Experience = {
  slug: string
  number: string
  company: string
  role: string
  date: string
  /** Tailwind gradient class fragment, e.g. "from-[#ff5ca8] to-[#ff875b]" */
  color: string
  logo: string
  highlights: string[]
  /** Longer write-up shown on the detail page. */
  summary: string
  companyUrl: string
  workUrl: string
  workLabel: string
  location?: string
}

/** A project — rendered in "Side Missions" + on a detail page. */
export type Project = {
  slug: string
  number: string
  title: string
  type: string
  stack: string
  color: string
  logo: string
  date: string
  description: string
  /** Longer write-up shown on the detail page. */
  summary: string
  highlights: string[]
  role: string
  year: string
  repoUrl: string
  liveUrl: string
  liveLabel: string
}

export type Testimonial = {
  name: string
  role: string
  quote: string
  avatar: string
}

export type Hobby = {
  title: string
  desc: string
  link: string
  cover: string
  tag: string
}

/** A Generative-AI capability / tool shown in the GenAI section. */
export type GenAiItem = {
  title: string
  tag: string
  desc: string
  tools: string[]
}

/** A favourite game shown in the gaming subsection of Hobbies. */
export type Game = {
  title: string
  platform: string
  genre: string
  /** Lightweight remote cover URL, lazy-loaded by the game card. */
  imageUrl: string
  /** Tailwind gradient class fragment used while the image loads. */
  color: string
}

export type IntroImage = {
  src: string
  alt: string
  className: string
}

export type NavItem = {
  label: string
  href: string
}

export type Stat = {
  value: string
  label: string
}

export type SocialLink = {
  label: string
  href: string
}
