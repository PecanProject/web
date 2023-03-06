import React from "react";

import contributors, {
  previousContributors,
} from "../../static/utils/contributors";
import PeopleCard from "./PeopleCard";
import styles from "./people.module.css";

const CardList = (props) => {
  return (
    <div className={styles.peopleContainer}>
      {props.contributor.map((person, index) => {
        return <PeopleCard key={index} {...person} />;
      })}
    </div>
  );
};
export default CardList;
