import { Icons } from '@/components/ui/icons'
import { DISCORD_INVITE_URL, GITHUB_URL, GOVERNANCE_URL, TWITTER_URL } from '@/src/constants'

export const siteConfig = {
  name: 'LexDAO',
  description:
    'LexDAO is a decentralized autonomous organization (DAO) that provides legal services to the Ethereum community.',
  mainNav: [
    {
      label: 'Home',
      href: '/',
      isExternal: false,
    },
    {
      label: 'Join',
      href: 'https://lexdao.substack.com/p/how-do-you-join-lex-dao',
      isExternal: true,
    },
    {
      label: 'Governance',
      href: GOVERNANCE_URL,
      isExternal: true,
    },
  ],
  footerNav: [
    {
      label: 'Twitter',
      icon: Icons.twitter,
      href: TWITTER_URL,
      isExternal: true,
    },
    {
      label: 'Discord',
      icon: Icons.discord,
      href: DISCORD_INVITE_URL,
      isExternal: true,
    },
    {
      label: 'GitHub',
      icon: Icons.gitHub,
      href: GITHUB_URL,
      isExternal: true,
    },
    {
      label: 'Blog',
      icon: Icons.pen,
      href: 'https://lexdao.substack.com/',
      isExternal: true,
    },
  ],
}
