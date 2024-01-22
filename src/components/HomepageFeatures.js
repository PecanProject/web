import React, { useEffect, useState } from "react";
import styles from "./HomepageFeatures.module.css";
import nsf from "../../static/img/nsf.png";
import nasa from "../../static/img/nasa-logo.png";
import dep from "../../static/img/dep-energysvg.png";
import energy from "../../static/img/energy-bio.png";
import { Timeline } from "react-twitter-widgets";
const FeatureList = [
  {
    title: "A state-of-the-art ecosystem model",
    Svg: require("../../static/img/nature.svg").default,
    description: (
      <>
        The Predictive Ecosystem Analyzer (PEcAn) is an integrated informatics
        toolbox for ecosystem modeling. PEcAn consists of:
        <dl>
          <dt>
            <b>An application program interface (API):</b>
          </dt>
          <dd>
            It encapsulates an ecosystem model, providing a common interface,
            inputs, and output.
          </dd>

          <dt>
            <b>Web-based user interface</b>
          </dt>
          <dd>
            An accessible web-based user interface and visualization tools
          </dd>

          <dt>
            <b>Extensible collection of modules</b>
          </dt>
          <dd>
            An extensible collection of modules to handle specific types of
            analyses , model-data syntheses , and data processing{" "}
          </dd>
        </dl>
      </>
    ),
  },
  {
    title: "Free And Open Source",
    Svg: require("../../static/img/environment.svg").default,
    description: (
      <>
        PEcAn is and will always be a <b>free</b> and <b>open source</b>{" "}
        software for the betterment of the scientific community and humanity.
      </>
    ),
  },
];

function Feature({ Svg, title, description, index, width }) {
  if (width < 1000)
    return (
      <div className={styles.featureContainer}>
        <div className={styles.featureSvg}>
          {" "}
          <Svg className={styles.featureSvg} />
        </div>
        <div className={styles.cardContainer}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  if (index % 2 == 0)
    return (
      <div className={styles.featureContainer}>
        <div className={styles.featureSvg}>
          {" "}
          <Svg className={styles.featureSvg} />
        </div>
        <div className={styles.cardContainer}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  return (
    <div className={styles.featureContainer}>
      <div className={styles.cardContainer}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.featureSvg}>
        {" "}
        <Svg className={styles.featureSvg} />
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const [width, setWidth] = useState(undefined);
  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWidth(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return (
    <div style={{ padding: "4rem 0" }}>
      <div className={styles.headContainer}>
        <h1>Our Mission</h1>
        <div className={styles.paragraph}>
          {" "}
          <p className={styles.quote}>
            Develop and promote accessible tools for reproducible ecosystem
            modeling and forecasting
          </p>
        </div>
      </div>

      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} index={idx} {...props} width={width} />
            ))}
          </div>
        </div>
      </section>
      <div className={styles.foot}>
        <h1>Acknowledgements</h1>
        <div className={styles.imageContainer}>
          <img src={nsf} className={styles.image} />
          <img src={nasa} className={styles.image} />
          <img src={dep} className={styles.image} />
          <img src={energy} className={styles.image} />
        </div>
        <div className={styles.timeline}>
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: "PEcAnProject",
            }}
            options={{
              height: "400rem",
              width: "50rem",
            }}
          />
        </div>
      </div>
    </div>
  );
}
