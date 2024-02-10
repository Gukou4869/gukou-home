import { LinkItem } from './type';

export const FULL_NAME = 'Shota Taniguchi';

export const FIRST_NAME = 'Shota';

export const FAMILY_NAME = 'Taniguchi';

export const EMAIL_ADDRESS = 'st11121.grtkmch@gmail.com';

export const TWITTER_URL = 'https://twitter.com/gukou_pro4869';

export const GITHUB_URL = 'https://github.com/Gukou4869';

export const TWITTER_NAME = 'X(twitter)';

export const GITHUB_NAME = 'github';

export const ROLE = 'Frontend Developer';

export const BIO_TEXT = `Born and raised in Kobe, I graduated from Kobe City University of Foreign Studies. I have more than two and a half years of experience in frontend development, primarily using React and TypeScript.`;

export const linkItems: LinkItem[] = [
  {
    href: 'https://twitter.com/gukou_pro4869',
    label: 'X(twitter)',
  },
  {
    href: 'https://github.com/Gukou4869',
    label: 'github',
  },
  {
    href: `mailto:${EMAIL_ADDRESS}`,
    label: EMAIL_ADDRESS,
  },
];
