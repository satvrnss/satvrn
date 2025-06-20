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
      {
        text: '',
        items: [
          { text: 'Frequently Asked Questions', link: '/faq.md' },
          { text: 'Beginners Guide', link: '/api-examples' },
          { text: 'Safety Concerns', link: '/safety.md' }
        ]
      }
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
