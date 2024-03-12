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
          <img
            src={props.img}
            className="cardImage"
            alt="Image alt text"
            title="Logo Title Text"
            style={{
              maxWidth: "250px",
              maxHeight: "250px",
              objectFit: "contain",
              width: "100%",
              height: "100%",
            }}
          />
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
  const half = Math.ceil(contributors.length / 2);
  const firstHalf = contributors.slice(0, half);
  const secondHalf = contributors.slice(half);
  return (
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
  );
};
export default CardList;
