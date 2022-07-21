import TwitterLogo from '../images/twitter.svg'
import GitHubLogo from '../images/github.svg'
import EmailLogo from '../images/email.svg'

export const HeaderLinks = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "March",
    url: "/march",
    sublinks: [
      {
        text: "Seattle",
        url: "/march/seattle",
      },
      {
        text: "Portland",
        url: "/march/portland",
      },
    ],
  },
  {
    text: "Volunteer",
    url: "/volunteer"
  },
  {
    text: "About",
    url: "/about",
    sublinks: [
      {
        text: "Mission",
        url: "/about/mission",
      },
      {
        text: "People",
        url: "/about/people",
      },
      {
        text: "Code of Conduct",
        url: "/about/conduct",
      },
      {
        text: "Media",
        url: "/about/media",
      },
      {
        text: "Contact",
        url: "/about/contact",
      },
    ],
  },
  {
    text: "Sign up",
    url: "https://actionnetwork.org/forms/medicare-for-all-everywhere-action-takers?source=direct_link&",
    class: "cta",
  },
];

export const AboutSidebarLinks = [
  {
    text: "About",
    url: "/about",
  },
  {
    text: "Mission",
    url: "/about/mission",
  },
  {
    text: "People",
    url: "/about/people",
  },
  {
    text: "Code of Conduct",
    url: "/about/conduct",
  },
  {
    text: "Media",
    url: "/about/media",
  },
  {
    text: "Contact",
    url: "/about/contact",
  },
];

export const MarchSidebarLinks = [
  {
    text: "Seattle",
    url: "/march/seattle",
  },
  {
    text: "Portland",
    url: "/march/portland",
  },
];

export const FooterSocialLinks = [
  {
    text: "Twitter",
    url: "https://twitter.com/m4a_everywhere",
    logo: TwitterLogo,
    title: 'Follow us on Twitter',
  },
  {
    text: "GitHub",
    url: "https://github.com/Medicare-for-All-EVERYWHERE/main-site",
    logo: GitHubLogo,
    title: 'View source on GitHub',
  },
  {
    text: "Email",
    url: "mailto:massmovement.healthcare@gmail.com",
    logo: EmailLogo,
    title: 'Send us an email',
  },
];
