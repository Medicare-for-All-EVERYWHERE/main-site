import YouTubeLogo from '../images/youtube.svg'
import FacebookLogo from '../images/facebook.svg'
import TwitterLogo from '../images/twitter.svg'
import MastodonLogo from '../images/mastodon.svg'
import RedditLogo from '../images/reddit.svg'
import GitHubLogo from '../images/github.svg'
import OpenCollectiveLogo from '../images/open-collective.svg'
import LinkedInLogo from '../images/linkedin.svg'
import SlackLogo from '../images/slack.svg'
import EmailLogo from '../images/email.svg'

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
      {
        text: "San Francisco",
        url: "/march/san-francisco",
      },,
      {
        text: "Asheville",
        url: "/march/asheville",
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
    text: "Marches & Rallies",
    url: '/march'
  },
  {
    text: "Seattle, WA",
    url: "/march/seattle",
  },
  {
    text: "Portland, OR",
    url: "/march/portland",
  },
  {
    text: "San Francisco, CA",
    url: "/march/san-francisco",
  },
  {
    text: "Asheville, NC",
    url: "/march/asheville",
  },
];

export const FooterSocialLinks = [
  {
    text: "YouTube",
    url: "https://www.youtube.com/channel/UC9dIXmwYPLjxt5uNcYnNJiQ",
    logo: YouTubeLogo,
    title: 'Watch us on YouTube',
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
    url: "mailto:massmovement.healthcare@gmail.com",
    logo: EmailLogo,
    title: 'Send us an email',
  },
];
