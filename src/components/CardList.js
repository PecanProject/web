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
        <div className="card__image">
          <img src={props.img} alt="Image alt text" title="Logo Title Text 1" />
        </div>
        <div className="card__footer">
          <small className="avatar__subtitle">{props.education}</small>
          <Link
            to="#"
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
    <div className={styles.peopleContainer}>
      {contributors.map((person, index) => {
        return (
          <PeopleCard
            key={index}
            {...person}
            img="https://previews.123rf.com/images/stockbroker/stockbroker1710/stockbroker171000524/89639450-portrait-of-a-young-smiling-professional-man-arms-crossed.jpg"
          />
        );
      })}
    </div>
  );
};
export default CardList;
