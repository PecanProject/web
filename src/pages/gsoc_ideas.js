import React from "react";
import Layout from "@theme/Layout";
import styles from "./about.module.css";
import clsx from "clsx";
function gsocIdeas() {
    return (
        <Layout title="About">
            <div className={styles.aboutContainer}>
                <h1>GSoC - PEcAn Project Ideas</h1>
                <div className={clsx(styles.cardContainer)}>
                    {" "}

                    <div class="card">
                        <div class="card__header" style={{ textAlign: "center" }}>

                        </div>
                        <div class="card__body">

                            Ecosystem science has many components, so does PEcAn! Some of those components where you can contribute. Below is a list of potential ideas. Feel free to contact any of the mentors in slack, or feel free to ask questions in our #gsoc-2023 channel in slack.

                            <hr />

                            <h2><a name="ideas">Project Ideas</a></h2>

                            Following is a list of project ideas, use this list to contact the appropriate mentors on slack. Feel free to propose your own ideas as well,
                            in this case contact @kooper on slack so he can put you in contact with the best mentors.


                            <hr />

                            <h4><a name="cran">PEcAn packages & CRAN [R package development]</a></h4>

                            PEcAn is implemented as a set of R packages, but the user must currently download and install all the packages as a single unit. The short-term goal of this project is to focus on fixing warnings in the build process, refactoring to remove unnecessary dependencies, and potentially splitting modules. The medium-term goal is to increase the reliability of PEcAn’s integration tests, and thus this year’s package development will prioritize the packages that are most associated with overall workflow bottlenecks (e.g., PEcAn.data.atmosphere, which is focused on downloading and processing meteorological data). The longer-term goal is to make PEcAn packages available on CRAN (the primary R package archive) which will not only make it easier to install, but also easier to find and easier to use standalone modules.
                            <p>&nbsp;</p>

                            <dl>
                                <dt><b>Expected outcome:</b></dt>
                                <dd>PEcAn packages pass checks and integration tests without warnings. Packages are made available in CRAN.</dd>
                                <dt><b>Prerequisites:</b></dt>
                                <dd>R; experience with R packages is helpful, but most of the process is covered in chapters on R package releases in the book ‘rOpenSci packages’ and the book ‘R packages’ by Hadley Wickham</dd>
                                <dt><b>Contact person:</b></dt>
                                <dd>Chris Black, @infotroph; Mike @Dietze</dd>
                                <dt><b>Duration:</b></dt>
                                <dd>Size: 175 hours for proposals that focus on dependency removal, 350 hours for proposals that split modules.</dd>
                                <dt><b>Difficulty:</b></dt>
                                <dd>Easy, we anticipate the ability for multiple people to work on this project since different individuals can focus on different PEcAn R packages.</dd>
                            </dl>

                            <hr />

                            <h4><a name="models">PEcAn model coupling and development  [Data Science]</a></h4>

                            PEcAn has the capability to interface multiple ecological models. The goal of this project is to improve the coupling of existing models to PEcAn (specifically FATES) and add new models (specifically a simple vegetation model that is under development). It is also possible to contribute to the development of the simple vegetation model which is written in fortran.
                            <p>&nbsp;</p>

                            <dl>
                                <dt><b>Expected outcome:</b></dt>
                                <dd>New or improved PEcAn model packages.</dd>
                                <dt><b>Prerequisites:</b></dt>
                                <dd>R. Fortran is an advantage.</dd>
                                <dt><b>Contact person:</b></dt>
                                <dd>Hui Tang @Hui Tang, Istem Fer @istfer</dd>
                                <dt><b>Duration:</b></dt>
                                <dd>Flexible to work as either a Small (175hr) or Large (350 hr)</dd>
                                <dt><b>Difficulty:</b></dt>
                                <dd>Medium</dd>
                            </dl>

                            <hr />

                            <h4><a name="pecan.ma">Input Processing / Asynchronous workflow execution [Data Science]</a></h4>

                            One of the goals of PEcAn is to be able to run different ecological models (which require a range of data inputs) and compare the model outputs with actual measurements (a.k.a. data constraints). The goal of this project is twofold, depending on the specific interests of the GSOC student.
                            <ol>
                                <li>The current PEcAn input processing occurs mostly within the primary runtime workflow, but numerous PEcAn applications would benefit from the ability to update near real-time data asynchronously with model execution, handling different data streams in parallel. As part of this we’d also like to make it easier to use PEcAn input processing modules as stand alone tools. This subproject also leverages a joint effort with the Red Hat Collaboratory.</li>
                                <li>Increase the number of input products supported. Students may focus on one or more of the following:
                                    <ol type="a">
                                        <li>Add the NMME seasonal weather forecast as an meteorological drivers</li>
                                        <li>Add remote sensing data streams: NASA GEDI lidar, solar induced fluorescence e.g., NASA OCO-2, OCO-3, thermal e.g., NASA ECOSTRESS
                                        </li>
                                        <li>Extend our existing support for ingesting data from the National Ecological Observatory Network NEON soil moisture and soil respiration data products. This will involve developing integrating <a href="https://github.com/jmzobitz/NEONSoils" target="_blank">NEONSoils code</a> into PEcAn  and internal code from the Dietze lab on soil moisture gap-filling and downscaling.</li>
                                    </ol>
                                </li>
                            </ol>
                            We anticipate the ability for multiple people doing this project since there are separate parts that can be done by individuals.
                            <p>&nbsp;</p>

                            <dl>
                                <dt><b>Prerequisites:</b></dt>
                                <dd>R.</dd>
                                <dt><b>Contact person:</b></dt>
                                <dd>@Ankur Desai, Istem Fer @istfer</dd>
                                <dt><b>Duration:</b></dt>
                                <dd>1. data workflow update [size: large (350hr)]; 2. Individual data packages: [size: small (175 hr) for one, large for 2-3 data packages]</dd>
                                <dt><b>Difficulty:</b></dt>
                                <dd>1 data update [difficulty: hard]; 2. Individual data packages: 2.1 easy, 2.2 easy, 2.3 medium</dd>
                            </dl>

                            <hr />

                            <h4><a name="gha">GitHub Actions</a></h4>

                            Currently GitHub Actions will check to see if there are newer versions of the packages installed. We need to limit these checks since they are limited by GitHub. Additionally we do a simple test of SIPNET, it would be great if that can use the full docker stack to test a full run.
                            <p>&nbsp;</p>

                            In the past year we have created a dashboard that shows how tests are performing. It would be great to have a test that runs the tests using the develop stack and writes the test results back into a file in a special branch. As part of this task the dashboard will need to be updated to fetch the data from this branch.
                            <p>&nbsp;</p>

                            <dl>
                                <dt><b>Expected outcome:</b></dt>
                                <dd>New GitHub actions that do not take as long to run, and have the ability to do larger tests.</dd>
                                <dt><b>Prerequisites:</b></dt>
                                <dd>GitHub Actions, Docker</dd>
                                <dt><b>Contact person:</b></dt>
                                <dd>Rob Kooper @kooper</dd>
                                <dt><b>Duration:</b></dt>
                                <dd>Flexible to work as either a Small (175hr) or Large (350 hr)</dd>
                                <dt><b>Difficulty:</b></dt>
                                <dd>Medium, Large if running and updating the integration testing dashboard</dd>
                            </dl>

                            <hr />


                            <h4><a name="ci">SDA Dashboard</a></h4>

                            This project is primarily focused on the interactive visualization of outputs from our carbon cycle forecast and data assimilation system. This project builds on a previously-developed site-level R Shiny dashboard that is no longer functional, and aims to extend this to a much larger number of sites. We also hope to integrate in functionality from one of our other dashboards (which visualizes spatial interactions) and advances made by external collaborators. If time permits, we’d also like to resurrect our automated email alert system.

                            <p>&nbsp;</p>

                            <dl>
                                <dt><b>Expected outcome:</b></dt>
                                <dd>The aims here are:
                                    <ol>
                                        <li>Resurrect a previously-developed R Shiny dashboard for our <a href="https://github.com/PecanProject/pecan/tree/develop/shiny/ForecastingDashboard" target="_blank">carbon cycle forecast system </a>, potentially integrating in work done by the Ecological Forecasting Initiative on their <a href="https://github.com/eco4cast/neon4cast-dashboard" target="_blank">dashboard</a>  and <a href="https://www.fieldobservatory.org/en/home/" target="_blank">FMI’s Field Observatory</a></li>
                                        <li>Merge in the functionality from our <a href="https://github.com/PecanProject/pecan/tree/develop/shiny/SDAdashboard" target="_blank" >data assimilation dashboard </a></li>
                                        <li>Resurrect the automated email alert system that sent a subset of visualizations, and links to the full app, to users for the sites they are interested in.</li>
                                    </ol></dd>
                                <dt><b>Prerequisites:</b></dt>
                                <dd>R, R Shiny, data visualization</dd>
                                <dt><b>Contact person:</b></dt>
                                <dd>Mike @Dietze, @HenriKajasilta</dd>
                                <dt><b>Duration:</b></dt>
                                <dd>Flexible to work as either a Small (175hr) or Large (350 hr)</dd>
                                <dt><b>Difficulty:</b></dt>
                                <dd>Medium</dd>
                            </dl>

                            <hr />

                            <h4><a name="web">Finish and Deploy New Website</a></h4>

                            This project includes migrating content and deploying a new version of the PEcAn website.
                            The code hosted at https://github.com/PecanProject/web was developed during a previous GSOC.

                            <p>&nbsp;</p>

                            <dl>
                                <dt><b>Expected outcome:</b></dt>
                                <dd>The primary aims are to migrate content from the old website and then deploy the new PEcAn website,
                                    as described in
                                    <a href="https://github.com/PecanProject/web/issues/11">pecanproject/web Issue 11</a>.
                                    Additional ideas may be proposed.</dd>
                                <dt><b>Prerequisites:</b></dt>
                                <dd>Experience with javascript, git, and web development preferred.</dd>
                                <dt><b>Contact person:</b></dt>
                                <dd>David LeBauer @dlebauer, Eshan Tripathi @eshan</dd>
                                <dt><b>Duration:</b></dt>
                                <dd>Small (175hr)</dd>
                                <dt><b>Difficulty:</b></dt>
                                <dd>Easy</dd>
                            </dl>




                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    );
}

export default gsocIdeas;
