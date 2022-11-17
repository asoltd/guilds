export interface NavigationItem {
  href: string
  label: string
  displayNewChip?: boolean
}

export interface NavigationColumn {
  title: string
  navigationItem: NavigationItem[]
}

export interface Navigation {
  quickLinks: NavigationColumn
  quests: NavigationColumn
  social: NavigationColumn
  legal: NavigationColumn
}

export const navigation: Navigation = {
  quickLinks: {
    title: "Quick links",
    navigationItem: [
      {
        href: "/",
        label: "Home",
      },
      {
        href: "/quests",
        label: "Quests",
      },
      {
        href: "/top-heroes",
        label: "Top Heroes",
        displayNewChip: true,
      },
      {
        href: "/about-us",
        label: "About Us",
      },
      {
        href: "/guild-for-business",
        label: "Guild for Business",
      },
    ],
  },
  quests: {
    title: "Quests",
    navigationItem: [
      {
        href: "/quests",
        label: "All Quests",
      },
      {
        href: "/most-viewed",
        label: "Most Viewed",
      },
      {
        href: "/latest",
        label: "Latest",
      },
      {
        href: "/highest-bid",
        label: "Highest Bid",
      },
      {
        href: "/lowest-bid",
        label: "Lowest Bid",
      },
    ],
  },
  social: {
    title: "Social",
    navigationItem: [
      {
        href: "#",
        label: "Facebook",
      },
      {
        href: "#",
        label: "Twitter",
      },
      {
        href: "#",
        label: "Instagram",
      },
      {
        href: "#",
        label: "LinkedIn",
      },
      {
        href: "#",
        label: "YouTube",
      },
      {
        href: "#",
        label: "Instagram",
      },
    ],
  },
  legal: {
    title: "Legal",
    navigationItem: [
      {
        href: "/terms",
        label: "Terms of use",
      },
      {
        href: "/privacy",
        label: "Privacy policy",
      },
      {
        href: "/cookies",
        label: "Cookies policy",
      },
      {
        href: "/licenses",
        label: "Licenses",
      },
      {
        href: "/settings",
        label: "Settings",
      },
      {
        href: "/contact",
        label: "Contact us",
      },
    ],
  },
}
