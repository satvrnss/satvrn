import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Satvrn",
  description: "Editing Resources.",
  base: '/satvrn/',
  appearance: false,
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'FAQ', link: '/faq.md' }
    ],
    sidebar: [
      { text: 'Frequently Asked Questions', collapsed: false,
        items: [
          {text: 'General Questions', link: '/faq.md' },
          {text: 'Windows Issues', link: '/faq-windows.md' },
          {text: 'MacOS Issues', link: '/faq-macOS.md' },
        ]
      },
      { text: 'Safety Concerns', link: '/safety.md' },
      { text: 'Beginners Guide', link: '/beginnersguide.md' },
      { text: 'Version Swap Guide', link: '/versionswapguide.md '},
      { text: 'Adobe Genuine Popup Fix', link: '/gcc.md '},
      { text: 'Maxon Troubleshoot Guide', link: '/mxn-troubleshoot.md '},
      { text: 'After Effects Installation Paths', link: '/ae-paths.md '},
    ],
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/satvrn' }
    ],
    outline: [2, 3]
  },
  markdown: {
    toc: {
      level: [2, 3]
    }
  }
})
