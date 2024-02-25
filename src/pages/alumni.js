import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import projectAlumni from "../../static/utils/projectAlumni";
import styles from "../components/people.module.css";
import Layout from "@theme/Layout";
const PeopleCard = (props) => {
  return (
    <div className={clsx("card-demo", styles.card)}>
      <div className="card">
        <div className="card__header">
          <div className="avatar">
            <div className="avatar__intro">
              <div className="avatar__name">{props.name}</div>
              <small className="avatar__subtitle">{props.role}</small>
            </div>
          </div>
        </div>
        <div
          className="card__image"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={props.img} alt="Image alt text" title="Logo Title Text 1" />
        </div>
        <div
          className="card__footer"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <small className="avatar__subtitle">{props.profession}</small>
          <Link
            to="#"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={(e) => {
              window.location = `mailto:${props.email}`;
              e.preventDefault();
            }}
          >
            {props.email}
          </Link>
        </div>
      </div>
    </div>
  );
};

const Alumni = () => {
  // Splitting the projectAlumni array into two
  const half = Math.ceil(projectAlumni.length / 2);
  const firstHalf = projectAlumni.slice(0, half);
  const secondHalf = projectAlumni.slice(half);

  return (
    <Layout title="people">
      <div>
        <h2 style={{ textAlign: "center", margin: "0.5rem" }}>
          Project Alumni
        </h2>
        <div className={styles.mainContainer}>
          <div className={styles.column}>
            {firstHalf.map((person, index) => (
              <PeopleCard key={index} {...person} />
            ))}
          </div>
          <div className={styles.column}>
            {secondHalf.map((person, index) => (
              <PeopleCard key={index} {...person} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Alumni;
