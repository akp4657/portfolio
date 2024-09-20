import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
  LanguageConfig
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Anthony Pichardo',
  subtitle: '',
  lang: 'en',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 230,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: false,
    src: 'assets/images/demo-banner.png',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center',      // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: false,         // Display the credit text of the banner image
      text: '',              // Credit text to be displayed
      url: ''                // (Optional) URL link to the original artwork or artist's page
    }
  },
  favicon: [    // Leave this array empty to use the default favicon
    // {
    //   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    LinkPreset.Resume,
    {
      name: 'GitHub',
      url: 'https://github.com/akp4657',            // Internal links should not include the base path, as it is automatically added
      external: true,                               // Show an external link icon and will open in a new tab
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/avatar.png',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'Anthony Pichardo',
  bio: "Full-stack web developer based out of Rochester, New York with a passion for learning, video games, and professional wrestling.",
  links: [
    {
      name: 'LinkedIn',
      icon: 'fa6-brands:linkedin',
      url: 'https://www.linkedin.com/in/anthony-pichardo/',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/akp4657',
    },
  ],
}

export const languageConfig: LanguageConfig = {
  name: 'Stack',
  icons: [
    {
      name: 'Angular',
      icon: 'fa6-brands:angular',
    },
    {
      name: 'CSS',
      icon: 'fa6-brands:node',
    },
    {
      name: 'MongoDB',
      icon: 'fa6-solid:leaf',
    },
    {
      name: 'SQL',
      icon: 'fa6-solid:database',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: false,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
