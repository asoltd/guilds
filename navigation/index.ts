export interface AboutUs {
  title: string
  description: string
  image: string
  href: string
}

export interface NavigationItem {
  href: string
  label: string
  displayNewChip?: boolean
  navigations?: AboutUs[]
}

export interface NavigationColumn {
  title: string
  navigationItem: NavigationItem[]
}

export interface SideBarItem {
  title: string
  image: string
  href: string
}

export interface NavigationSideBar {
  title: string
  image: string
  href?: string
  navigationItem?: SideBarItem[]
}

export interface Navigation {
  quickLinks: NavigationColumn
  quests: NavigationColumn
  social: NavigationColumn
  legal: NavigationColumn
}

export const sidebar: Array<NavigationSideBar> = [
  {
    title: "Get Started",
    image: "/sidenav/getstarted.svg",
    navigationItem: [
      {
        title: "Verified Courses",
        image: "/sidenav/verifiedcourses.svg",
        href: "/verifiedcourses",
      },
      {
        title: "Free Courses",
        image: "/sidenav/freecourses.svg",
        href: "/verifiedcourses",
      },
      {
        title: "Mentors",
        image: "/sidenav/mentors.svg",
        href: "/mentors",
      },
    ],
  },
  {
    title: "Quests",
    image: "/sidenav/quests.svg",
    navigationItem: [
      {
        title: "Hub",
        image: "/sidenav/hub.svg",
        href: "/hub",
      },
      {
        title: "Your Quests",
        image: "/sidenav/yourquests.svg",
        href: "/yourquests",
      },
      {
        title: "Browse Quests",
        image: "/sidenav/browsequests.svg",
        href: "/browsequests",
      },
      {
        title: "Your Teams",
        image: "/sidenav/yourteams.svg",
        href: "/yourteams",
      },
      {
        title: "Find Teams",
        image: "/sidenav/findteams.svg",
        href: "/findteams",
      },
    ],
  },
  {
    title: "Bounties",
    image: "/sidenav/bounties.svg",
    navigationItem: [
      {
        title: "Financial Overview",
        image: "/sidenav/financialoverview.svg",
        href: "/financialoverview",
      },
      {
        title: "All Transactions",
        image: "/sidenav/alltransactions.svg",
        href: "/alltransactions",
      },
      {
        title: "Pending Payments",
        image: "/sidenav/pendingpayments.svg",
        href: "/pendingpayments",
      },
      {
        title: "Tax Info",
        image: "/sidenav/taxinfo.svg",
        href: "/taxinfo",
      },
    ],
  },
  {
    title: "Stats",
    image: "/sidenav/stats.svg",
    navigationItem: [
      {
        title: "Quest Stats",
        image: "/sidenav/queststats.svg",
        href: "/queststats",
      },
      {
        title: "Bounties Stats",
        image: "/sidenav/taxinfo.svg",
        href: "/taxinfo",
      },
      {
        title: "Profile Stats",
        image: "/sidenav/profilestats.svg",
        href: "/profilestats",
      },
      {
        title: "Team Stats",
        image: "/sidenav/teamstats.svg",
        href: "/teamstats",
      },
    ],
  },
  {
    title: "Business",
    image: "/sidenav/business.svg",
    navigationItem: [
      {
        title: "Overview",
        image: "/sidenav/overview.svg",
        href: "/overview",
      },
      {
        title: "Notifications",
        image: "/sidenav/notifications.svg",
        href: "/notifications",
      },
      {
        title: "Analytics",
        image: "/sidenav/analytics.svg",
        href: "/savedreports",
      },
      {
        title: "Scheduled Reports",
        image: "/sidenav/scheduledreports.svg",
        href: "/scheduledreports",
      },
      {
        title: "User Reports",
        image: "/sidenav/userreports.svg",
        href: "/userreports",
      },
      {
        title: "Manage Notifications",
        image: "/sidenav/managenotifications.svg",
        href: "/managenotifications",
      },
    ],
  },
  {
    title: "Messages",
    image: "/sidenav/messages.svg",
    href: "/messages",
  },
]

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
        navigations: [
          {
            title: "Blog",
            description: "The latest industry news, updates and info.",
            image: "/about-us-blog.svg",
            href: "/blog",
          },
          {
            title: "API reference",
            description: "Coplete reference documantation for API.",
            image: "/about-us-api.svg",
            href: "/api",
          },
          {
            title: "Customer stories",
            description: "Learn how our customers are making big changes.",
            image: "/about-us-stories.svg",
            href: "/customer-stories",
          },
          {
            title: "Setup 101",
            description:
              "Get up and running as fast as possible with our 101 guide.",
            image: "/about-us-101.svg",
            href: "/101-guide",
          },
          {
            title: "Video tutorials",
            description: "Get up and running on new features and techniques.",
            image: "/about-us-tutorials.svg",
            href: "/tutorials",
          },
          {
            title: "Podcast",
            description:
              "Talks about the industry and the latest technologies.",
            image: "/about-us-podcast.svg",
            href: "/podcast",
          },
          {
            title: "Documentation",
            description:
              "All the boring stuff that you (hoperfully won't) need.",
            image: "/about-us-documentation.svg",
            href: "/documentation",
          },
          {
            title: "University",
            description:
              "Short courses to become a master of advanced features.",
            image: "/about-us-university.svg",
            href: "/university",
          },
          {
            title: "Help and support",
            description:
              "Learn, fix a problem, and get answers to your questions.",
            image: "/about-us-help.svg",
            href: "/help",
          },
          {
            title: "Changelog",
            description:
              "Check out the latest updates and releases from our team.",
            image: "/about-us-changelog.svg",
            href: "/changelog",
          },
        ],
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
