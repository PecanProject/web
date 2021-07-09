import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

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

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
