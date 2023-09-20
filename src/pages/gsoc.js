import React from "react";
import Layout from "@theme/Layout";
import styles from "./about.module.css";
import clsx from "clsx";
function gsoc() {
    return (
        <Layout title="About">
            <div className={styles.aboutContainer}>
                <h1><a name="background" class="anchor" href="#background"><span class="octicon octicon-link"></span></a><a href="https://summerofcode.withgoogle.com/">Google Summer of Code (GSoC)</a></h1>
                <div className={clsx(styles.cardContainer)}>
                    {" "}

                    <div class="card">
                        <div class="card__header" style={{ textAlign: "center" }}>

                        </div>
                        <div class="card__body">


                            <h2>What is GSoC?</h2>
                            For over 10 years Google has sponsored a global program that pairs students with open source software development projects. For three months over the summer students receive real world experience contributing to software development and guidance from mentors. On the other hand, participating organizations are able to bring in new developers to grow their code base. Overall, GSoC helps open source communities grow and thrive. Thousands of student and organization from around the world have participated and now you can too!
                            <p> </p>
                            &nbsp;

                            <h2><a href="gsoc_ideas">Project Ideas</a></h2>

                            Ecosystem science has many components, so does PEcAn! Some Project ideas can be found here on our <a href="gsoc_ideas.html">project ideas list.</a>

                            <p>&nbsp;</p>

                            <h2><a href="gsoc_apply">How to apply?</a></h2>

                            There are two steps to the application process:

                            <ol>
                                <li>Getting acquainted with the project, mentors and ideas</li>
                                <li>Writing a good proposal</li>
                            </ol>

                            <p>&nbsp;</p>

                            <h3>Getting acquainted with the project, mentors and ideas</h3>

                            The first step is for you to get acquainted with the PEcAn project, the ideas and to introuduce
                            yourself with the mentors. This will help you get a significantly better proposal, and will
                            make it more like for us to rate your propsal higher.

                            <p>&nbsp;</p>

                            <ul>
                                <li>Choose a project from our <a href="gsoc_ideas.html">project ideas list</a> or come up with your own.</li>
                                <li>Join the #gsoc-2023 channel in our slack workspace and introduce yourself</li>
                                <li>Send message to your project-specific mentors indicating that you are interested in their idea and how you plan to implement the idea</li>
                            </ul>

                            <p>&nbsp;</p>

                            When talking to the mentors, use the following questions to introuduce yourself:

                            <p>&nbsp;</p>

                            <ul>
                                <li>What interests you most about our project?</li>
                                <li>What is your background, and what made you pick the specific idea?</li>
                                <li>What is your familiarity with the recommended technologies?</li>
                                <li>As mentors and project coordinators, how can we get the best out of you?</li>
                                <li>Is there anything that you’ll be studying or working on whilst working alongside us?</li>
                            </ul>

                            <p>&nbsp;</p>

                            <h3>Writing a good proposal</h3>

                            Next, write and submit your GSoC proposal after discussing this with the mentor. In the proposal make sure to
                            include a well-defined, weekly schedule with clear milestones and deliverables around it. Make sure to include
                            in your schedule any time you need to learn new technologies, as well as make sure that before the
                            evaluations dates, you have a deliverable that we can use to evaluate. We understand that schedules change, but it
                            would be good to add some must haves to your list of deliverables that will make your project a success as well
                            as some extra goals in case you have additional time at the end.

                            <p>&nbsp;</p>

                            See also <a href="https://google.github.io/gsocguides/student/writing-a-proposal.html">Google's proposal guidelines</a>

                            <p>&nbsp;</p>

                            Good Luck



                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    );
}

export default gsoc;
