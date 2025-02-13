import TikTokLogo from '../images/tiktok.svg'
import YouTubeLogo from '../images/youtube.svg'
import InstgramLogo from '../images/instagram.svg'
import FacebookLogo from '../images/facebook.svg'
import TwitterLogo from '../images/twitter.svg'
import MastodonLogo from '../images/mastodon.svg'
import RedditLogo from '../images/reddit.svg'
import GitHubLogo from '../images/github.svg'
import OpenCollectiveLogo from '../images/open-collective.svg'
import LinkedInLogo from '../images/linkedin.svg'
import SlackLogo from '../images/slack.svg'
import EmailLogo from '../images/email.svg'
import PhoneLogo from '../images/phone.svg'

export const HeaderLinks = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Events",
    url: "/events",
  },
  {
    text: "July Actions",
    url: "/actions",
    sublinks: [
      {
        text: "July 2023",
        url: "/actions",
      },
      {
        text: "2022 Events",
        url: "/actions/2022",
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
        text: "Open Positions",
        url: "/about/positions",
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
      {
        text: "Digital Toolkit",
        url: "/about/toolkit",
      },
    ],
  },
  {
    text: "Sign up",
    url: "https://actionnetwork.org/forms/medicare-for-all-everywhere-action-takers?source=direct_link&",
    class: "cta",
  },
  {
    text: "Donate",
    url: "https://opencollective.com/m4a-everywhere/contribute/custom-donation-50029/checkout?interval=month&platformTip=0&amount=27",
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
    text: "Open Positions",
    url: "/about/positions",
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
  {
    text: "Digital Toolkit",
    url: "/about/toolkit",
  },
];

export const MarchSidebarLinks = [
  {
    text: "July 2023",
    url: '/march'
  },
  {
    text: "2022 Events",
    url: "/march/2022",
  },
];

export const FooterSocialLinks = [
  {
    text: "TikTok",
    url: "https://www.tiktok.com/@m4a_everywhere",
    logo: TikTokLogo,
    title: 'Follow us on TikTok',
  },
  {
    text: "YouTube",
    url: "https://www.youtube.com/channel/UC9dIXmwYPLjxt5uNcYnNJiQ",
    logo: YouTubeLogo,
    title: 'Watch us on YouTube',
  },
  {
    text: "Instagram",
    url: "https://www.instagram.com/m4a_everywhere/",
    logo: InstgramLogo,
    title: "Follow us on Instagram",
  },
  {
    text: "Facebook",
    url: "https://www.facebook.com/M4AEverywhere",
    logo: FacebookLogo,
    title: "Follow us on Facebook",
  },
  {
    text: "Twitter",
    url: "https://twitter.com/m4a_everywhere",
    logo: TwitterLogo,
    title: 'Follow us on Twitter',
  },
  {
    text: "Mastodon",
    url: "https://mstdn.social/@m4a_everywhere",
    logo: MastodonLogo,
    title: 'Follow us on Mastodon',
  },
  {
    text: "Reddit",
    url: "https://www.reddit.com/u/M4A_Everywhere/",
    logo: RedditLogo,
    title: 'Upvote on Reddit',
  },
  {
    text: "GitHub",
    url: "https://github.com/Medicare-for-All-EVERYWHERE/main-site",
    logo: GitHubLogo,
    title: 'View source on GitHub',
  },
  {
    text: "Open Collective",
    url: "https://opencollective.com/m4a-everywhere",
    logo: OpenCollectiveLogo,
    title: 'Donate and view finances on Open Collective',
  },
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/company/medicare-for-all-everywhere",
    logo: LinkedInLogo,
    title: 'Connect on LinkedIn',
  },
  {
    text: "Slack",
    url: "https://actionnetwork.org/forms/code-of-conduct-2?source=direct_link&",
    logo: SlackLogo,
    title: 'Join our Slack',
  },
  {
    text: "Email",
    url: "mailto:info@medicareforalleverywhere.org",
    logo: EmailLogo,
    title: 'Send us an email',
  },
  {
    text: "Phone",
    url: "tel:+12029879953",
    logo: PhoneLogo,
    title: 'Give us a call',
  },
];
