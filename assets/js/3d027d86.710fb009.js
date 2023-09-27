"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[925],{9319:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return c},default:function(){return h}});var o=a(7462),n=a(3366),i=(a(7294),a(3905)),s=["components"],r={slug:"eshan-gsoc-2021-report",title:"GSoC'21 Report- Webpage Updates",author:"Eshan Tripathi",author_title:"GSoC'21 participant @PEcAn Project",author_url:"https://github.com/eshantri",author_image_url:"https://avatars.githubusercontent.com/u/48446729?v=4",tags:["gsoc","gsoc21"]},l={permalink:"/web/blog/eshan-gsoc-2021-report",editUrl:"https://github.com/PecanProject/web/edit/main/blog/2021-08-23-gsoc-blog.md",source:"@site/blog/2021-08-23-gsoc-blog.md",title:"GSoC'21 Report- Webpage Updates",description:"Introduction",date:"2021-08-23T00:00:00.000Z",formattedDate:"August 23, 2021",tags:[{label:"gsoc",permalink:"/web/blog/tags/gsoc"},{label:"gsoc21",permalink:"/web/blog/tags/gsoc-21"}],readingTime:3.035,truncated:!0,prevItem:{title:"GSoC'23 Report - GitHub Actions",permalink:"/web/blog/rohan-gsoc-2023-report"},nextItem:{title:"PEcAn Terrestial Model Informatics Workshop 2016",permalink:"/web/blog/Terrestial-Model-Informatics-Workshop"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Useful Links",id:"useful-links",children:[]},{value:"Preparations",id:"preparations",children:[]},{value:"Coding Period",id:"coding-period",children:[]},{value:"Challenges",id:"challenges",children:[]},{value:"Next Steps",id:"next-steps",children:[]},{value:"Acknowledgements",id:"acknowledgements",children:[]}],d={toc:c};function h(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The project aims at creating and deploying a user friendly, interactive and accessible website for PEcAn Project.\nPEcAn Project's website consisted of html pages, bookdown and pkgdown pages being rendered separately. In this project, all separate sections have been integrated as a consistent, modern website with elegant UI with the help of ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus 2"),", a static site generator. This project has been created as a part of ",(0,i.kt)("a",{parentName:"p",href:"https://summerofcode.withgoogle.com/"},"GSoC'21"),"."),(0,i.kt)("h2",{id:"useful-links"},"Useful Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Github Repository- ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/PecanProject/web"},"https://github.com/PecanProject/web")),(0,i.kt)("li",{parentName:"ul"},"Hosted Link- ",(0,i.kt)("a",{parentName:"li",href:"https://pecanproject.github.io/web/"},"https://pecanproject.github.io/web/")),(0,i.kt)("li",{parentName:"ul"},"Documentation- ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/PecanProject/web/blob/main/README.md"},"https://github.com/PecanProject/web/blob/main/README.md"))),(0,i.kt)("h2",{id:"preparations"},"Preparations"),(0,i.kt)("p",null,"After my proposal was selected for the project I started interacting with the mentors and asked them about their expectation about design. I also studied the codebase of the existing website. Since I was familiar with ReactJs, I found it much better to have a static site generator for the project. I studied the official docusaurus docs and got familiar with its ecosystem.\nUsing ",(0,i.kt)("a",{parentName:"p",href:"https://www.figma.com"},"figma")," I prepared wireframes for the website. After the first GSoC meeting, I got valuable suggestions from the mentors, which were used to improvise the designs and development of the working model of website began."),(0,i.kt)("h2",{id:"coding-period"},"Coding Period"),(0,i.kt)("p",null,"To develop the working model on the website it was required to keep in mind the best practices and modular design, so that changes could be made easily in the future. I have tried to maintain this approach. In this period following goals have been accomplished:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Revamped the website and converted it into a ReactJs based single page application."),(0,i.kt)("li",{parentName:"ul"},"Added a blog for posting blogs."),(0,i.kt)("li",{parentName:"ul"},"Integrated PEcAn's documentation as part of the website."),(0,i.kt)("li",{parentName:"ul"},"Automated build process of the website with the help of GitHub actions. This helps to deploy the website automatically to GitHub pages, as soon as changes are pushed."),(0,i.kt)("li",{parentName:"ul"},"Documented steps for PEcAn team to add and modify content.")),(0,i.kt)("h2",{id:"challenges"},"Challenges"),(0,i.kt)("p",null,"Since the documentation is maintained as ",(0,i.kt)("a",{parentName:"p",href:"https://bookdown.org/"},"bookdown")," specific ",(0,i.kt)("a",{parentName:"p",href:"https://rmarkdown.rstudio.com/docs/"},"Rmarkdown")," format, it is difficult to parse it using docusaurus's native parser, which supports markdown. The bookdown doesn't offer a native way of converting into md, with relative directory structure to reference different files. I tried converting each Rmd file into md, one by one using RStudio's built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"knit")," function, but it wasn't feasible. The only optimal solution seemed was temporarily editing ",(0,i.kt)("inlineCode",{parentName:"p"},"MakeFile"),", but it couldn't achieve desired results.\nThis is also the exact challenge with tutorials section."),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"At present we have an iframe which helps us load the documentation inside the website, though it looks like a part of the website, it is the website which is being rendered by bookdown. It can be found on this repo-\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/PecanProject/pecan-documentation"},"https://github.com/PecanProject/pecan-documentation"),". An example of how this is achieved is shown in below codeblock-"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'<Layout title="Develop" style={{ height: "100%" }}>\n  <Foot>\n    <body className="documentation"></body>\n  </Foot>\n  <iframe\n    src="https://pecanproject.github.io/pecan-documentation/develop/"\n    style={{ border: "none" }}\n    width="100%"\n    height="100%"\n    allowFullScreen\n    id="iFrame1"\n  >\n    <p>\n      <a href="/en-US/docs/Glossary">\n        Fallback link for browsers that don\'t support iframes\n      </a>\n    </p>\n  </iframe>\n</Layout>\n')),(0,i.kt)("p",null,"The main issue is that if we had docs already natively on the repository, they would have been much faster to load and would have offered the users a much better experience. So it is essential and recommended to figure out a way for achieving this. Further priorities would be-"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Adding the tutorials section"),(0,i.kt)("li",{parentName:"ul"},"Adding a search bar that used scraping to find matches all across website.")),(0,i.kt)("h2",{id:"acknowledgements"},"Acknowledgements"),(0,i.kt)("p",null,"Finally, I'd like to say that this summer of 2021 has been the most amazing experience I've ever had. I learnt a lot of technical and non technical skills. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dlebauer"},"Dlebauer")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/im-prakher"},"ImPrakher")," have been awesome mentors and their feedback and suggestions were a key to accomplishing the project."))}h.isMDXComponent=!0}}]);