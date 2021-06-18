export default {
  "title": "PEcAn Project",
  "tagline": "Ecosystem science, policy, and management informed by the best available data and models",
  "url": "https://pecanproject.github.io/web",
  "baseUrl": "/web/",
  "onBrokenLinks": "ignore",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "PecanProject",
  "projectName": "web",
  "themeConfig": {
    "navbar": {
      "title": "PEcAn",
      "logo": {
        "alt": "PEcAn Logo",
        "src": "img/logo.jpeg"
      },
      "items": [
        {
          "to": "docs/1234",
          "position": "left",
          "label": "Documentation"
        },
        {
          "to": "/blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "label": "About",
          "position": "left",
          "items": [
            {
              "to": "/about",
              "label": "About",
              "position": "left"
            },
            {
              "to": "/people",
              "label": "People",
              "position": "left"
            },
            {
              "to": "/news",
              "label": "News",
              "position": "left"
            },
            {
              "to": "/workshops",
              "label": "Workshops",
              "position": "left"
            }
          ]
        },
        {
          "href": "https://github.com/PecanProject",
          "position": "right",
          "className": "header-github-link",
          "aria-label": "GitHub repository"
        },
        {
          "href": "https://opensource.ncsa.illinois.edu/projects/artifacts.php?key=PECAN",
          "label": "Download",
          "position": "left"
        },
        {
          "type": "docsVersionDropdown",
          "position": "right",
          "dropdownActiveClassDisabled": true,
          "dropdownItemsAfter": [
            {
              "to": "/versions",
              "label": "All versions"
            }
          ],
          "dropdownItemsBefore": []
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Tutorial",
              "to": "/docs/1234"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Slack",
              "href": "https://join.slack.com/t/pecanproject/shared_invite/enQtMzkyODUyMjQyNTgzLWEzOTM1ZjhmYWUxNzYwYzkxMWVlODAyZWQwYjliYzA0MDA0MjE4YmMyOTFhMjYyMjYzN2FjODE4N2Y4YWFhZmQ"
            },
            {
              "label": "Discord",
              "href": "https://discordapp.com/invite/docusaurus"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/docusaurus"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Google",
              "to": "/google"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/PecanProject"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 PEcAn Project.",
      "style": "light"
    },
    "hideableSidebar": true,
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/home/eshan/Documents/gsoc/web/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/",
          "versions": {
            "current": {
              "label": "Develop",
              "path": "docs"
            }
          },
          "onlyIncludeVersions": [
            "master",
            "current"
          ]
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/home/eshan/Documents/gsoc/web/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};