"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[150],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(a),h=r,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||o;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1630:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],p={slug:"rohan-gsoc-2023-report",title:"GSoC'23 Report - GitHub Actions",author:"Rohan Sasne",author_title:"GSoC'23 participant @PEcAn Project",author_url:"https://github.com/RohanSasne",author_image_url:"https://avatars.githubusercontent.com/u/110545952?v=4",tags:["gsoc","gsoc23"]},l={permalink:"/web/blog/rohan-gsoc-2023-report",editUrl:"https://github.com/PecanProject/web/edit/main/blog/2023-08-28-rohansblog.md",source:"@site/blog/2023-08-28-rohansblog.md",title:"GSoC'23 Report - GitHub Actions",description:"What is Google Summer of Code?",date:"2023-08-28T00:00:00.000Z",formattedDate:"August 28, 2023",tags:[{label:"gsoc",permalink:"/web/blog/tags/gsoc"},{label:"gsoc23",permalink:"/web/blog/tags/gsoc-23"}],readingTime:5.89,truncated:!0,nextItem:{title:"GSoC'21 Report- Webpage Updates",permalink:"/web/blog/eshan-gsoc-2021-report"}},s=[{value:"What is Google Summer of Code?",id:"what-is-google-summer-of-code",children:[]},{value:"About PEcAn",id:"about-pecan",children:[]},{value:"\ud83d\udc49 Project Details:",id:"-project-details",children:[]},{value:"Pull Requests and Issues opened in the GSoC period",id:"pull-requests-and-issues-opened-in-the-gsoc-period",children:[]},{value:"Overview of Work Done",id:"overview-of-work-done",children:[]},{value:"Weekly Progress:",id:"weekly-progress",children:[]},{value:"Wrapping Up",id:"wrapping-up",children:[]}],c={toc:s};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://miro.medium.com/v2/resize:fit:720/format:webp/1*C7eMsCNLVVlmP8AShnW70w.jpeg",alt:null})),(0,o.kt)("h2",{id:"what-is-google-summer-of-code"},"What is Google Summer of Code?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://summerofcode.withgoogle.com/"},"Google Summer of Code (GSoC)")," is a global program that pairs students with ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Open_source"},"open source")," organizations to produce code and contribute to these communities while making some money. The whole idea behind this program is to encourage students to get involved in open source contributions."),(0,o.kt)("p",null,"As part of the program, ",(0,o.kt)("a",{parentName:"p",href:"https://summerofcode.withgoogle.com/organizations/"},"organizations")," provide mentors to assist the student throughout the whole process, from learning about the community to contributing code"),(0,o.kt)("h2",{id:"about-pecan"},"About PEcAn"),(0,o.kt)("p",null,"The Predictive Ecosystem Analyzer (PEcAn) is an integrated ecological bioinformatics toolbox that consists of a scientific workflow system to manage the immense amounts of publicly available environmental data and a Bayesian data assimilation system to synthesize this information within state-of-the-art ecosystems models. It has"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"An application program interface (API) that encapsulates an ecosystem model and provides a standard interface, inputs, and outputs.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Core utilities for handling and tracking model run and the flows of information and uncertainties into and out of models and analyses.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"An accessible web-based user interface and visualization tools.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"An extensible collection of modules to handle specific types of analyses (sensitivity, uncertainty, ensemble), model-data syntheses (benchmarking, parameter data assimilation, state data assimilation), and data processing (model inputs and data constraints)."))),(0,o.kt)("p",null,"If you want to contribute and know more about PEcAn Project, then do join the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://join.slack.com/t/pecanproject/shared_invite/zt-50h22ydz-o5Nfj64XYMkR7oAu0Lm8BA"},"slack channel")),"."),(0,o.kt)("h2",{id:"-project-details"},"\ud83d\udc49 Project Details:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Project Title: GitHub Actions"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Mentor:")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/robkooper"},"Rob Kooper"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Student:"),"  ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/RohanSasne/"},"Rohan Sasne"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Organization:")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PecanProject"},"PEcAn Project"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Project Link:")," ",(0,o.kt)("a",{parentName:"p",href:"https://gist.github.com/RohanSasne/40b7e6479d2a273bbde6f658e99a9c28"},"GitHub Gist")))),(0,o.kt)("p",null,"In this blog post, I\u2019ll be discussing my journey of Google Summer of Code 2023 with PEcAn Project."),(0,o.kt)("h2",{id:"pull-requests-and-issues-opened-in-the-gsoc-period"},"Pull Requests and Issues opened in the GSoC period"),(0,o.kt)("p",null,"All my technical contributions across all the repositories of the PEcAn project can be found below:"),(0,o.kt)("h1",{id:"google-summer-of-code-2023-work-product-submission"},"Google Summer of Code 2023 Work Product Submission"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Student"),": Rohan Sasne (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/RohanSasne"},"@RohanSasne"),")",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Organisation"),": ",(0,o.kt)("a",{parentName:"p",href:"https://pecanproject.github.io/"},"PEcAn Project"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Project"),": ",(0,o.kt)("a",{parentName:"p",href:"https://summerofcode.withgoogle.com/programs/2023/projects/etmBQV5Q"},"GitHub Actions - Optimizing CI Pipeline and Utilizing the Whole Docker Stack for Testing")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Brief Notes along with weekly progess and learnings can be found ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1408RhFI-laNDIJylCzj_l9WjbiXy2eYujn_WDlX2auA/edit?usp=sharing"},"here")),(0,o.kt)("h2",{id:"overview-of-work-done"},"Overview of Work Done"),(0,o.kt)("p",null,"(Click on the title for link to PR)"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"PR Title"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/PecanProject/PecanProject.github.io/pull/24"},"docs: Fixed 2 typos in gsoc webpage"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/PecanProject/pecan/pull/3176"},"build: Reduce Workflow Time for CI GitHub Action"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/PecanProject/pecan/pull/3179"},"docs: Update README.md for correct hyperlink redirect"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/PecanProject/pecan/pull/3185"},"docs: Fix Small Typo in DEV-INTRO.md"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/PecanProject/pecan/pull/3183"},"build: Test Models Against the Full Docker Stack "))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/PecanProject/rpecanapi/pull/18"},"feat: create connectHost function to input Host header"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/PecanProject/pecan-status-board/pull/11"},"build: Add Docker Compose File and Add Model Test Workflow"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/PecanProject/pecan-status-board/pull/12"},"fix: Test the Pull Request on Push to all Branches"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/PecanProject/pecan/pull/3195"},"build: Optimize CI Pipeline Code"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/PecanProject/pecan/pull/3204"},"build: Add PRLabeler GitHub Action Workflow"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/PecanProject/pecan/pull/3205"},"fix: rabbitmq_post_message in Submit.Worflow Post API"))))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Issues Opened"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/PecanProject/pecan/issues/3184"},"Should the new SIPNET test run on every PR or should it be scheduled on weekly basis"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/PecanProject/pecan/issues/3187"},"Running CI and Renderbook workflow only for merge request, merge queue and Master Branch"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/PecanProject/rpecanapi/issues/19"},"New Connect function to accept header requests"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/PecanProject/rpecanapi/issues/20"},"API POST request gives internal server error"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/PecanProject/pecan/issues/3194"},"Further reduce code duplication by setting the check command as a matrix variable"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/PecanProject/pecan/issues/3198"},"Should the Docker workflow run only when the CI tests are successful"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/PecanProject/pecan/issues/3199"},"Labeling the Pull Request based on the type of changes it is making"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"https://github.com/PecanProject/pecan/issues/3210"},"GitHub actions failing"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The Project:")),(0,o.kt)("p",null,"GitHub Actions is a powerful tool that enables developers to automate their workflows and streamline their software development process. Our project aimed and successfully achieved the following goals:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Optimized package version checks in GitHub Actions to limit the number of checks.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Utilized the full Docker stack for testing SIPNET.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Created a test that runs tests using the develop stack and writes the results to a file in a special branch.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Updated the dashboard to fetch data from the special branch and display the results."))),(0,o.kt)("h2",{id:"weekly-progress"},"Weekly Progress:"),(0,o.kt)("p",null,"Week 1"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Discussed with mentor the project goals"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Successfully created ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/PecanProject/pecan/pull/3176"},"first PR")," and waiting for mentor/ community review"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Helped the community on slack to find article to solve a issue")))),(0,o.kt)("p",null,"Week 2"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"CI time reduction ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/PecanProject/pecan/pull/3176"},"PR finally merged"),", after a lot of reviews and feedback \ud83e\udd73"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Also created another ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/PecanProject/pecan/pull/3179"},"PR to fix a small documentation redirect bug")," in the readme")))),(0,o.kt)("p",null,"Week 3"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"The ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/PecanProject/pecan/pull/3183"},"PR for testing against the Docker stack using Docker-Compose")," is UP and in review, hopefully it\u2019ll get merged by this weekend"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"*Created ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PecanProject/pecan/pull/3185"},"Another PR")," which was fixing the Documentation in DEV-INTRO.md and it got ",(0,o.kt)("strong",{parentName:"p"},"merged*"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Created ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/PecanProject/pecan/issues/3187"},"an Issue in the Repository")," for code cleanup to restrict trigger of workflows in certain less necessary cases")))),(0,o.kt)("p",null,"Week 4"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Created ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/PecanProject/rpecanapi/pull/18"},"Pull request")," in the rpecanapi repository to add a API function which takes custom headers as inputs which was missing till now"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Created ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/PecanProject/rpecanapi/issues/19"},"an Issue in the Repository")," for creating an extra function in API to pass on custom headers"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Opened a ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/PecanProject/pecan-status-board/pull/11"},"draft PR")," in the PEcAn status board repository")))),(0,o.kt)("p",null,"Week 5"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Created ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/PecanProject/rpecanapi/issues/20"},"*an Issue in the Repository")," for reporting a bug in the POST API request of the rpecanapi repository*")),(0,o.kt)("p",null,"Week 6 & 7"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Created a ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/PecanProject/pecan/pull/3195"},"Pull Request optimizing the code in CI pipeline"),", thereby reducing the repeatability of code."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Created ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/PecanProject/pecan/issues/3194"},"an issue"),", elaborating discussion i had with one of the repository maintainer regarding setting up matrix to reduce the repeatability"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Created ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/PecanProject/pecan-status-board/pull/12"},"another Pull Request")," to clean the unnecessary extra condition to check the Pull request on only the main branch")))),(0,o.kt)("p",null,"Week 8 & 9"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Created ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/PecanProject/pecan/issues/3187"},"an Issue in the Repository")," for Labeling the PR on the basis of type of changes it makes"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Created ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/PecanProject/pecan/issues/3198"},"an Issue in the Repository")," for running the docker workflow only after the successful completion of the CI workflow")))),(0,o.kt)("p",null,"Week 10 & 11"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Created a ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/PecanProject/pecan/pull/3205"},"PR")," to fix the Post API failure issue"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Created a ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/PecanProject/pecan/pull/3204"},"PR")," to auto label the PR for better visual clarity in the repository and to keep track of the type of PR\u2019s made in the long run"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"Tested a ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/PecanProject/pecan/pull/3209"},"false PR"),", to test why we hit the GitHub API rate limit :_")))),(0,o.kt)("p",null,"Week 12"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Completed the documentation part of my work submission to google :)")),(0,o.kt)("h2",{id:"wrapping-up"},"Wrapping Up"),(0,o.kt)("p",null,"Google Summer of Code is an excellent opportunity for students to work on a project that matters while also significantly improving their coding skills and teamwork abilities."),(0,o.kt)("p",null,"Working on this GSoC\u201923 project with PEcAn Project was an enjoyable experience. I want to express my gratitude to my mentor, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/robkooper"},"**Rob Kooper"),"** for his constant support and guidance throughout this program. Thank you so much! Working with you was a really fantastic experience, and I look forward to work with you on more open source projects in the future!"),(0,o.kt)("p",null,"Finally, thanks to the GSoC program for providing this wonderful opportunity to work in such a great open source community, I was able to work on such a large real-world project, and I learned a lot throughout this program. I can confidently say that my coding abilities have improved over the ten weeks of GSoC."))}m.isMDXComponent=!0}}]);