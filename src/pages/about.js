import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
function Hello() {
  return (
    <Layout title="About">
      <div className={styles.aboutContainer}>
        <h1>About Us</h1>
        <p>
          Climate change science has witnessed an explosion in the amount and
          types of data that can be brought to bear on the potential responses
          of the terrestrial carbon cycle and biodiversity to global change.
          Many of the most pressing questions about global change are not
          necessarily limited by the need to collect new data as much as by our
          ability to synthesize existing data. This project specifically seeks
          to improve this ability. Because no one measurement provides a
          complete picture, multiple data sources must be integrated in a
          sensible manner. Process-based models represent an ideal framework for
          integrating these data streams because they represent multiple
          processes at different spatial and temporal scales in ways that
          capture our current understanding of the causal connections across
          scales and among data types. Three components are required to bridge
          this gap between the available data and the required level of
          understanding:{" "}
          <ul>
            <li>a state-of-the-art ecosystem model</li>
            <li>
              a workflow management system to handle the numerous streams of
              data
            </li>
            <li>
              a data assimilation statistical framework in order to synthesize
              the data with the model
            </li>
          </ul>
        </p>
        <p>
          PEcAn is open-source and built using open source software, and we
          benefit from the use of a wide range of other software, including R,
          JAGS, MySQL, Ruby on Rails, PHP, C, and Fortran. In addition, we
          appreciate the availability of development tools including RStudio,
          Vim, Emacs, Navicat, and Git/GitHub
        </p>
      </div>
    </Layout>
  );
}

export default Hello;
