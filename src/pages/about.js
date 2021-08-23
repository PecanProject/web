import React from "react";
import Layout from "@theme/Layout";
import styles from "./about.module.css";
import clsx from "clsx";
function Hello() {
  return (
    <Layout title="About">
      <div className={styles.aboutContainer}>
        <h1>About Us</h1>
        <div className={clsx(styles.cardContainer)}>
          {" "}
          <div class={clsx("card-demo", styles.aboutCard)}>
            <div class="card">
              <div class="card__header" style={{ textAlign: "center" }}>
                <h3>Our Vision</h3>
              </div>
              <div class="card__body">
                <p>
                  Climate change science has witnessed an explosion in the
                  amount and types of data that can be brought to bear on the
                  potential responses of the terrestrial carbon cycle and
                  biodiversity to global change. Many of the most pressing
                  questions about global change are not necessarily limited by
                  the need to collect new data as much as by our ability to
                  synthesize existing data. This project specifically seeks to
                  improve this ability.
                </p>
              </div>
            </div>
          </div>
          <div class={clsx("card-demo", styles.aboutCard)}>
            <div class="card">
              <div class="card__header" style={{ textAlign: "center" }}>
                <h3>Our Intuition</h3>
              </div>
              <div class="card__body">
                <p>
                  Because no one measurement provides a complete picture,
                  multiple data sources must be integrated in a sensible manner.
                  Process-based models represent an ideal framework for
                  integrating these data streams because they represent multiple
                  processes at different spatial and temporal scales in ways
                  that capture our current understanding of the causal
                  connections across scales and among data types.
                </p>
              </div>
            </div>
          </div>
          <div class={clsx("card-demo", styles.aboutCard)}>
            <div class="card">
              <div class="card__header" style={{ textAlign: "center" }}>
                <h3>Our Solution</h3>
              </div>
              <div class="card__body">
                <p>
                  Three components are required to bridge this gap between the
                  available data and the required level of understanding:{" "}
                  <ul>
                    <li>a state-of-the-art ecosystem model</li>
                    <li>
                      a workflow management system to handle the numerous
                      streams of data
                    </li>
                    <li>
                      a data assimilation statistical framework in order to
                      synthesize the data with the model
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div class={clsx("card-demo", styles.aboutCard)}>
            <div class="card">
              <div class="card__header" style={{ textAlign: "center" }}>
                <h3>Acknowledgements</h3>
              </div>
              <div class="card__body">
                <p>
                  The PEcAn project is supported by the National Science
                  Foundation (ABI #1062547, ABI #1458021, DIBBS #1261582, ARC
                  #1023477, EF #1318164, EF #1241894, EF #1241891), NASA
                  Terrestrial Ecosystems, the Department of Energy (ARPA-E
                  awards #DE-AR0000594 and DE-AR0000598), the Energy Biosciences
                  Institute, and an Amazon AWS in Education Grant. PEcAn is
                  open-source and built using open source software.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Hello;
