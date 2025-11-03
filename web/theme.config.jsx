import EmojiScale from '@/components/emojiScale/EmojiScale';

export default {
  logo: <span>Home</span>,
  project: {
    link: 'https://github.com/hackailiteracy/hackailiteracy.github.io'
  },
  chat: {
    link: 'https://discord.gg/Gkyd9ZNRfy'
  },
  darkMode: true,
  sidebar: { toggleButton: true },
  toc: { extraContent: EmojiScale },
  feedback: { content: null },
  editLink: {
    component: null,
  },
  gitTimestamp: null,
  footer: {
    text: 'CodeArcade 2025',
  },

  useNextSeoProps() {
    return {
      titleTemplate: '%s - Hackathon Toolbox'
    }
  },
  head: (
    <>
      <link rel="icon" href={`/hack-participant-kit/favicon.ico`} />
    </>
  ),
}
