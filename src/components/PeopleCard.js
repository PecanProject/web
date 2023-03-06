import React from "react";
import clsx from "clsx";
// import { Link } from "react-router-dom";
import styles from "./people.module.css";
const PeopleCard = (props) => {
  console.log(props);
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
        <div className="card__image">
          <img src={props.img} alt="Image alt text" title="Logo Title Text 1" />
        </div>
        <div
          className="card__footer"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <small style={{ padding: "0.5rem" }} className="avatar__subtitle">
            {props.education}
          </small>
        </div>
        <a
          href={props.email}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0.5rem",
          }}
        >
          {props.email}
        </a>
      </div>
    </div>
  );
};
export default PeopleCard;
