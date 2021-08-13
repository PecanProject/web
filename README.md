# Website

This website is built using [Docusaurus 2](https://docusaurus.io/),a modern static website generator,
as part of [GSoC '21](https://summerofcode.withgoogle.com/).

## Table of contents

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#local-development">Local Development</a></li>
        <li><a href="#build">Build</a></li>
      </ul>
    </li>
       <li>
      <a href="#adding-content">Adding Content</a>
      <ul>
        <li><a href="#feature-cards">Feature Cards</a></li>
        <li><a href="#pecan-people">PEcAn People</a></li>
        <li><a href="#blog">Blog</a></li>
      </ul>
    </li>
    <li><a href="#screenshot">Screenshots</a></li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>

## Getting Started

This section will help one to setup the project for local development.

### Prerequisites

This project has been built using [Docusaurus 2](https://docusaurus.io/), so make sure that your machine has Node version >=12.13.0, you can check this using `node -v`. [Install node](https://nodejs.org/en/download/).
Make sure yarn is installed. [Install yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable)

### Installation

```console
yarn install
```

### Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Adding Content

This section will help to add or modify Website's content. 

### Feature Cards

Feature Cards are cards present at the website homepage whose main purpose is to highlight the key features of the PEcAn Project.

![Feature Card](screenshots/featureCard.png)

To modify its contents-
 - Navigate to `src/components/HomepageFeatures.js`
 - Navigate to `const FeatureList` inside `HomepageFeatures.js`

![FeatureList](screenshots/FeatureList.png)
 
 Every item inside `FeatureList` array contains a JavaScript object enclosed `{}` and separated by `,` . Each of these objects is a feature that is displayed on the homepage and contains a `title`, `Svg` and `description`. One can edit or remove them as required, the changes will be reflected after the code passes build test. If one is editing `Svg` make sure that the required image file is present inside `static/img` directory, otherwise the compiler would return an error. 