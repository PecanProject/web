import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import contributors from "../../static/utils/contributors";
import styles from "./people.module.css";
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

const CardList = () => {
  return (
    <>
      <h2 style={{ textAlign: "center",margin:'0.5rem' }}>People</h2>
      <div className={styles.peopleContainer}>
        {contributors.map((person, index) => {
          return <PeopleCard key={index} {...person} />;
        })}
      </div>
      <h2 style={{ textAlign: "center",margin:'0.5rem' }}>Project Alumni</h2>
      <div className={styles.peopleContainer}>
        {ProjectAlumni.map((person, index) => {
          return <PeopleCard key={index} {...person} />;
        })}
      </div>
    </>
  );
};
export default CardList;
