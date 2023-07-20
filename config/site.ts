export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "YimMenu",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Docs",
      href: "/docs",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/YimMenu/YimMenu",
    docs: "https://ui.shadcn.com",
  },
}
