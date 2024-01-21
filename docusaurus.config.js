/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "PEcAn Project",
  tagline:
    "Ecosystem science, policy, and management informed by the best available data and models",
  url: "https://pecanproject.github.io",
  baseUrl: "/web/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "PecanProject", // Usually your GitHub org/user name.
  projectName: "web", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "PEcAn",
      logo: {
        alt: "PEcAn Logo",
        src: "img/logo.jpeg",
      },
      items: [
        {
          label: "Documentation",
          position: "left",
          items: [
            {
              to: "/documentation", label: "Documentation",
            },
            {
              to: "/documentation/master", label: "Package Documentation",
            },
            {
              to: "/tutorials", label: "Tutorials",
            },
            {
              to: "http://pecan.ncsa.illinois.edu/pecan/01-introduction.php", label: "Demo"
            },            
          ],
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          label: "About",
          position: "left",
          items: [
            { to: "/about", label: "About" },
            { to: "/people", label: "People" },
            { to: "/alumni", label: "Alumni" },
            { to: "/news", label: "News" },
          ],
        },
        { to: "/publications", label: "Publications", position: "left" },
        {
          href: "https://github.com/PecanProject",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",  
        },
        {
          href: "https://opensource.ncsa.illinois.edu/projects/artifacts.php?key=PECAN",
          label: "Download",
          position: "left",
        },
        {
          label: "GSoC",
          position: "left",
          items: [
            { to: "/gsoc", label: "Contributor Guidance" },
            { to: "/gsoc_ideas", label: "Ideas List" }
          ],
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/documentation/master",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Slack",
              href: "https://join.slack.com/t/pecanproject/shared_invite/enQtMzkyODUyMjQyNTgzLWEzOTM1ZjhmYWUxNzYwYzkxMWVlODAyZWQwYjliYzA0MDA0MjE4YmMyOTFhMjYyMjYzN2FjODE4N2Y4YWFhZmQ",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/pecanproject",
            },
          ],
        },
        {
          title: "Contribute to Code",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/PecanProject",
            },
          ],
        },
        {
          title: "Past Contributors",
          items: [
            {
              label: "PecanProject",
              href: "https://github.com/PecanProject/pecan/graphs/contributors",
            },
            {
              label: "Bety Database",
              href: "https://github.com/PecanProject/bety/graphs/contributors",
            },
            {
              label: "Pecan Website",
              href: "https://github.com/PecanProject/web/graphs/contributors",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PEcAn Project.`,
    },
    hideableSidebar: true,
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: false,
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/PecanProject/web/edit/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
