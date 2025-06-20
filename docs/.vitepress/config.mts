import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Satvrn",
  description: "Editing Resources.",
  base: '/satvrn/',
  appearance: false,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/satvrn' }
    ],
    outline: [2, 3] // ← THIS is what shows h2 & h3 in sidebar TOC
  },
  markdown: {
    toc: {
      level: [2, 3]
    }
  }
})
