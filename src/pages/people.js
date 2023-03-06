import React from "react";
import Layout from "@theme/Layout";
import CardList from "../components/CardList";
import contributors, {
  previousContributors,
} from "../../static/utils/contributors";
function People() {
  return (
    <Layout title="people">
      <div>
        <h2 style={{ textAlign: "center",margin:'0.5rem' }}>People</h2>
        <CardList contributor={contributors} />
      </div>
      <div>
        <h2 style={{ textAlign: "center",margin:'0.5rem' }}>Previous Contributors</h2>
        <CardList contributor={previousContributors} />
      </div>
    </Layout>
  );
}

export default People;
