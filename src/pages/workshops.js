import React from "react";
import Layout from "@theme/Layout";
import styles from "./about.module.css";
function Workshops() {
  return (
    <Layout title="workshops">
      <div className={styles.aboutContainer}>
        <h1><a name="background" class="anchor" href="#background"><span class="octicon octicon-link"></span></a>PEcAn 2 Terrestial Model Informatics Workshop 2016</h1>

        <h4>Information</h4>
        <p>
          The PEcAn 2 Terrestrial Model Informatics Workshop took place from May 9th-11th 2016 at Boston University.
        </p>
        <p>
          The big picture of this workshop was to discuss how new and emerging tools and technologies can accelerate the pace of progress in ecosystem and land surface modeling and allow us to better respond to the needs of the community, policy makers, and the general public. This workshop specifically targeted the modeling community.
        </p>

        <p>The goals of the meeting were to:</p>
        <ul>
          <li>Identify informatic, analysis, and cyberinfrastructure bottlenecks in the current workflows of the terrestrial ecosystem/land surface modeling community</li>
          <li>Identify redundancies and opportunities for interoperability of tools/methods</li>
          <li>Develop a roadmap for improving modeling cyberinfrastructure</li>
          <li>Provide training in PEcAn tools</li>
          <li>Present and solicit feedback on PEcAn development plan</li>
          <li>Identify bottlenecks in PEcAn usability/adoption</li>
        </ul>

        <p>The full agenda of the workshop can be found here: <a href="https://docs.google.com/document/d/18T0ugOwf8iBbLzMMDFrWiouM7UE2J13DwKLtP-jzEPw/edit?usp=sharing">link</a>
        </p>

        <p>
          The workshop will produce a paper outlining cyberinfrastructure bottelnecks, opportunities, and a roadmap. An updated PEcAn workplan will be produces as well.
        </p>


        <p>
          To facilitate discussion, themes and subthemes were created to focus discussion (links lead to slides for each theme):
        </p>
        <dl>
          <dt><a href="https://docs.google.com/presentation/d/1AoQLkqLhudijcz3DQSwZrXcXTFpQVFyajNn44O_PNiA/edit?usp=sharing">
            Big Picture</a></dt>

          <dt><a href="https://docs.google.com/presentation/d/1CAoq6BFMY_osgNGipN3bGTdEOiPHqiplYi9FAVOXtsk/edit?usp=sharing">
            Cyber-infrastructure Foundations</a></dt>
          <dd>Provenance, Standards, Repeatability, Accessibility, Sharing & Communication, Transparency, Support for clusters, cloud, etc., Portability</dd>

          <dt><a href="https://docs.google.com/presentation/d/1nYF0GkE_m1UHvQpGWZ6BD62l63fPVJWyXhhhwUHVCrs/edit?usp=sharing">
            Data Ingest</a></dt>
          <dd>Drivers, Constraints, Initial Conditions, Traits, Data uncertainty</dd>


          <dt><a href="https://docs.google.com/presentation/d/1b4rkomRtMRRTKQqlhKY1tioGvtRkWEvlLMNb0LMr97I/edit?usp=sharing">
            Validation, Benchmarking & Visualization</a></dt>

          <dt><a href="https://docs.google.com/presentation/d/1lnUh68jpDFkj2ncOZcI5SmXC_JXUZLTYEU4YEkKPeUA/edit?usp=sharing">
            Analysis</a></dt>
          <dd>Model sensitivity, uncertainty, ensemble,etc.</dd>
          <dd><a href="https://docs.google.com/presentation/d/1X0Oo0p_3kKkWnCu52EHHfiyt3IZobEf9i3KD9AolARg/edit?usp=sharing">
            Tools for analyzing specific data types</a></dd>

          <dt><a href="https://drive.google.com/open?id=0B1m8BX9QfC1tU1RiSjFvT0sxbjA">
            Calibration</a></dt>
          <dd>Trait meta-analysis, parameter data assimilation</dd>

          <dt><a href="https://docs.google.com/presentation/d/1OLG6jjy1MXhU7JBPzcOkhLAAhoZr-WAorJg03xoCjiY/edit?usp=sharing">State Data Assimilation</a></dt>

          <dt><a href="https://docs.google.com/presentation/d/1bfqtvnVodiJe-ZVk0QnX4oUX4Yk9o_CBRHFBGUXlCmQ/edit?usp=sharing">
            Multi-model Synthesis</a></dt>
          <dd>Adding Models</dd>
          <dd>Growing the PEcAn community</dd>
          <dd>Challenges with running multiple models, tools for MIPs</dd>

        </dl>
        <h4>Thank you to everyone that attended. The PEcAn Team looks forward to working with you all!</h4>
        <img src="https://dl.dropboxusercontent.com/s/2v9ysx5fart78hh/Workshop_Photo.jpg?dl=0" className={styles.workshopimages}></img>

      </div>
    </Layout>
  );
}

export default Workshops;
