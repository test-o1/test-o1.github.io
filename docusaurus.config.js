// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'photo-cli',
  tagline: 'Open source & free CLI tool that runs on macOS, Windows, Linux that extracts when and where (reverse geocode) your photographs are taken, copy into a new organized folder (not modifying source folder) with various folder & file naming strategies or export all data into CSV files.',
  url: 'https://test-o1.github.io', // Your website URL
  baseUrl: '/test-o1/',
  projectName: 'test-o1.github.io',
  organizationName: 'test-o1',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'photo-cli',
        logo: {
          alt: 'photo-cli logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro-examples',
            position: 'left',
            label: 'Docs',
          },
          {
            position: 'left',
            href: 'https://github.com/photo-cli/photo-cli/',
            label: 'GitHub',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Open Source',
            items: [
              {
                label: 'photo-cli',
                href: 'https://github.com/photo-cli/photo-cli/',
              },
              {
                label: 'docs',
                href: 'https://github.com/photo-cli/docs/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Built with Docusaurus`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
