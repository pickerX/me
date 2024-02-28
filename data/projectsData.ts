interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'A Quotes[In Progress]',
    description: `Reading a beautiful Quotes of begaining, with good emotion everyday.`,
    // imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
    title: 'KMM Showcases[In Progress]',
    description: `A series of KMM study stories`,
    // imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
  {
    title: 'Big billboard[In Progress]',
    description: `A billboard about daily/weekly/monthly/annual ranking`,
    imgSrc: '/static/images/github-traffic.png',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
