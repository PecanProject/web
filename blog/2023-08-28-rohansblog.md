---
slug: rohan-gsoc-2023-report
title: GSoC'23 Report - GitHub Actions
author: Rohan Sasne
author_title: GSoC'23 participant @PEcAn Project
author_url: https://github.com/RohanSasne
author_image_url: https://avatars.githubusercontent.com/u/110545952?v=4
tags: [gsoc, gsoc23]
---

![](https://miro.medium.com/v2/resize:fit:720/format:webp/1*C7eMsCNLVVlmP8AShnW70w.jpeg)
## What is Google Summer of Code?

[Google Summer of Code (GSoC)](https://summerofcode.withgoogle.com/) is a global program that pairs students with [open source](https://en.wikipedia.org/wiki/Open_source) organizations to produce code and contribute to these communities while making some money. The whole idea behind this program is to encourage students to get involved in open source contributions.

As part of the program, [organizations](https://summerofcode.withgoogle.com/organizations/) provide mentors to assist the student throughout the whole process, from learning about the community to contributing code

<!--truncate-->

## About PEcAn

The Predictive Ecosystem Analyzer (PEcAn) is an integrated ecological bioinformatics toolbox that consists of a scientific workflow system to manage the immense amounts of publicly available environmental data and a Bayesian data assimilation system to synthesize this information within state-of-the-art ecosystems models. It has

* An application program interface (API) that encapsulates an ecosystem model and provides a standard interface, inputs, and outputs.

* Core utilities for handling and tracking model run and the flows of information and uncertainties into and out of models and analyses.

* An accessible web-based user interface and visualization tools.

* An extensible collection of modules to handle specific types of analyses (sensitivity, uncertainty, ensemble), model-data syntheses (benchmarking, parameter data assimilation, state data assimilation), and data processing (model inputs and data constraints).

If you want to contribute and know more about PEcAn Project, then do join the **[slack channel](https://join.slack.com/t/pecanproject/shared_invite/zt-50h22ydz-o5Nfj64XYMkR7oAu0Lm8BA)**.

## 👉 Project Details:

* **Project Title: GitHub Actions**

* **Mentor:** [Rob Kooper](https://github.com/robkooper)

* **Student:**  [Rohan Sasne](https://github.com/RohanSasne/)

* **Organization:** [PEcAn Project](https://github.com/PecanProject)

* **Project Link:** [GitHub Gist](https://gist.github.com/RohanSasne/40b7e6479d2a273bbde6f658e99a9c28)

In this blog post, I’ll be discussing my journey of Google Summer of Code 2023 with PEcAn Project.

## Pull Requests and Issues opened in the GSoC period

All my technical contributions across all the repositories of the PEcAn project can be found below:

# Google Summer of Code 2023 Work Product Submission

**Student**: Rohan Sasne ([@RohanSasne](https://github.com/RohanSasne))  
**Organisation**: [PEcAn Project](https://pecanproject.github.io/)  
**Project**: [GitHub Actions - Optimizing CI Pipeline and Utilizing the Whole Docker Stack for Testing](https://summerofcode.withgoogle.com/programs/2023/projects/etmBQV5Q)

---


Brief Notes along with weekly progess and learnings can be found [here](https://docs.google.com/document/d/1408RhFI-laNDIJylCzj_l9WjbiXy2eYujn_WDlX2auA/edit?usp=sharing)

## Overview of Work Done
(Click on the title for link to PR)


| PR Title                     |
| :------:                     |
|[docs: Fixed 2 typos in gsoc webpage](https://github.com/PecanProject/PecanProject.github.io/pull/24)|
|[build: Reduce Workflow Time for CI GitHub Action](https://github.com/PecanProject/pecan/pull/3176) |
|[docs: Update README.md for correct hyperlink redirect](https://github.com/PecanProject/pecan/pull/3179) |
|[docs: Fix Small Typo in DEV-INTRO.md](https://github.com/PecanProject/pecan/pull/3185) |
|[build: Test Models Against the Full Docker Stack ](https://github.com/PecanProject/pecan/pull/3183)|
|[feat: create connectHost function to input Host header](https://github.com/PecanProject/rpecanapi/pull/18)|
|[build: Add Docker Compose File and Add Model Test Workflow](https://github.com/PecanProject/pecan-status-board/pull/11)|
|[fix: Test the Pull Request on Push to all Branches](https://github.com/PecanProject/pecan-status-board/pull/12)|
| [build: Optimize CI Pipeline Code](https://github.com/PecanProject/pecan/pull/3195)|
| [build: Add PRLabeler GitHub Action Workflow](https://github.com/PecanProject/pecan/pull/3204) |
| [fix: rabbitmq_post_message in Submit.Worflow Post API](https://github.com/PecanProject/pecan/pull/3205) |


| Issues Opened                     |
| :------:                     |
|[Should the new SIPNET test run on every PR or should it be scheduled on weekly basis](https://github.com/PecanProject/pecan/issues/3184) |
|[Running CI and Renderbook workflow only for merge request, merge queue and Master Branch](https://github.com/PecanProject/pecan/issues/3187) |
|[New Connect function to accept header requests](https://github.com/PecanProject/rpecanapi/issues/19) |
| [API POST request gives internal server error](https://github.com/PecanProject/rpecanapi/issues/20) |
| [Further reduce code duplication by setting the check command as a matrix variable](https://github.com/PecanProject/pecan/issues/3194) |
| [Should the Docker workflow run only when the CI tests are successful](https://github.com/PecanProject/pecan/issues/3198) |
| [Labeling the Pull Request based on the type of changes it is making](https://github.com/PecanProject/pecan/issues/3199) |
|[GitHub actions failing](https://github.com/PecanProject/pecan/issues/3210)|

**The Project:**

GitHub Actions is a powerful tool that enables developers to automate their workflows and streamline their software development process. Our project aimed and successfully achieved the following goals:

* Optimized package version checks in GitHub Actions to limit the number of checks.

* Utilized the full Docker stack for testing SIPNET.

* Created a test that runs tests using the develop stack and writes the results to a file in a special branch.

* Updated the dashboard to fetch data from the special branch and display the results.

## Weekly Progress:

Week 1

* *Discussed with mentor the project goals*

* *Successfully created [first PR](https://github.com/PecanProject/pecan/pull/3176) and waiting for mentor/ community review*

* *Helped the community on slack to find article to solve a issue*

Week 2

* *CI time reduction [PR finally merged](https://github.com/PecanProject/pecan/pull/3176), after a lot of reviews and feedback 🥳*

* *Also created another [PR to fix a small documentation redirect bug](https://github.com/PecanProject/pecan/pull/3179) in the readme*

Week 3

* *The [PR for testing against the Docker stack using Docker-Compose](https://github.com/PecanProject/pecan/pull/3183) is UP and in review, hopefully it’ll get merged by this weekend*

* *Created [Another PR](https://github.com/PecanProject/pecan/pull/3185) which was fixing the Documentation in DEV-INTRO.md and it got **merged***

* *Created [an Issue in the Repository](https://github.com/PecanProject/pecan/issues/3187) for code cleanup to restrict trigger of workflows in certain less necessary cases*

Week 4

* *Created [Pull request](https://github.com/PecanProject/rpecanapi/pull/18) in the rpecanapi repository to add a API function which takes custom headers as inputs which was missing till now*

* *Created [an Issue in the Repository](https://github.com/PecanProject/rpecanapi/issues/19) for creating an extra function in API to pass on custom headers*

* *Opened a [draft PR](https://github.com/PecanProject/pecan-status-board/pull/11) in the PEcAn status board repository*

Week 5

* Created [*an Issue in the Repository](https://github.com/PecanProject/rpecanapi/issues/20) for reporting a bug in the POST API request of the rpecanapi repository*

Week 6 & 7

* *Created a [Pull Request optimizing the code in CI pipeline](https://github.com/PecanProject/pecan/pull/3195), thereby reducing the repeatability of code.*

* *Created [an issue](https://github.com/PecanProject/pecan/issues/3194), elaborating discussion i had with one of the repository maintainer regarding setting up matrix to reduce the repeatability*

* *Created [another Pull Request](https://github.com/PecanProject/pecan-status-board/pull/12) to clean the unnecessary extra condition to check the Pull request on only the main branch*

Week 8 & 9

* *Created [an Issue in the Repository](https://github.com/PecanProject/pecan/issues/3187) for Labeling the PR on the basis of type of changes it makes*

* *Created [an Issue in the Repository](https://github.com/PecanProject/pecan/issues/3198) for running the docker workflow only after the successful completion of the CI workflow*

Week 10 & 11

* *Created a [PR](https://github.com/PecanProject/pecan/pull/3205) to fix the Post API failure issue*

* *Created a [PR](https://github.com/PecanProject/pecan/pull/3204) to auto label the PR for better visual clarity in the repository and to keep track of the type of PR’s made in the long run*

* *Tested a [false PR](https://github.com/PecanProject/pecan/pull/3209), to test why we hit the GitHub API rate limit :_*

Week 12

* Completed the documentation part of my work submission to google :)

## Wrapping Up

Google Summer of Code is an excellent opportunity for students to work on a project that matters while also significantly improving their coding skills and teamwork abilities.

Working on this GSoC’23 project with PEcAn Project was an enjoyable experience. I want to express my gratitude to my mentor, [**Rob Kooper](https://github.com/robkooper)** for his constant support and guidance throughout this program. Thank you so much! Working with you was a really fantastic experience, and I look forward to work with you on more open source projects in the future!

Finally, thanks to the GSoC program for providing this wonderful opportunity to work in such a great open source community, I was able to work on such a large real-world project, and I learned a lot throughout this program. I can confidently say that my coding abilities have improved over the ten weeks of GSoC.
