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
            { to: "/docs/1234", label: "Master" },
            {
              to: "/docs/docs/welcome",
              label: "Develop",
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
            { to: "/news", label: "News" },
            { to: "/workshops", label: "Workshops" },
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
      ],
    },
    footer: {
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/1234",
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
          title: "More",
          items: [
            {
              label: "Google",
              to: "/google",
            },
            {
              label: "GitHub",
              href: "https://github.com/PecanProject",
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
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),

          editUrl: "https://github.com/PecanProject/web/edit/main",
          versions: {
            current: {
              label: "Develop",
              path: "docs",
            },
          },
          onlyIncludeVersions: ["master", "current"],
        },
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
