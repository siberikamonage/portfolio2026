export const site = {
  name: 'Alina Nizamitinova',
  shortName: 'A ＊ N',
  role: 'Product Designer',
  description:
    'Product designer creating cohesive digital experiences through systematic research. B2B, FinTech and HR Tech.',
  email: 'siberikamonage@gmail.com',
  cv: 'https://drive.google.com/file/d/1tQvOobW47Dck4afW4fe14JAfj_lbGn_g/view?usp=sharing',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/uxdesignisabella/' },
    { label: 'Telegram', href: 'https://t.me/firstnameyiyao' },
    { label: 'Instagram', href: 'https://www.instagram.com/isoldarts/' },
  ],
};

/** Prefixes a path with the site base, e.g. url('images/a.webp') -> '/portfolio2026/images/a.webp'. */
export const url = (path = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
