import React from "react";
import styles from "./HomepageFeatures.module.css";
import nsf from "../../static/img/nsf.png";
import nasa from "../../static/img/nasa-logo.png";
import dep from "../../static/img/dep-energysvg.png";
import energy from "../../static/img/energy-bio.png";
import useWindowDimensions  from "./useWindowDimensions";

const FeatureList = [
  {
    title: "A state-of-the-art ecosystem model",
    Svg: require("../../static/img/nature.svg").default,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex earum
        corporis, ea molestias doloribus provident nemo necessitatibus eum non.
        Quam debitis impedit non accusantium a molestias rem necessitatibus,
        soluta fugit.
      </>
    ),
  },
  {
    title: "Free And Open Source",
    Svg: require("../../static/img/environment.svg").default,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex earum
        corporis, ea molestias doloribus provident nemo necessitatibus eum non.
        Quam debitis impedit non accusantium a molestias rem necessitatibus,
        soluta fugit.
      </>
    ),
  },
  {
    title: "Made using best available models",
    Svg: require("../../static/img/environmental_study.svg").default,
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex earum
        corporis, ea molestias doloribus provident nemo necessitatibus eum non.
        Quam debitis impedit non accusantium a molestias rem necessitatibus,
        soluta fugit.
      </>
    ),
  },
];

function Feature({ Svg, title, description, index,width }) {
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
  const { width } = useWindowDimensions();
  return (
    <div>
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
      <h1 style={{ textAlign: "center" }}>Key Features</h1>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} index={idx} {...props} width={width}/>
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
      </div>
    </div>
  );
}
