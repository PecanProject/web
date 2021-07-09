import React from "react";
import Layout from "@theme/Layout";
import CardList from "../components/CardList";
function People() {
  return (
    <Layout title="people">
      <div>
        <h2 style={{ textAlign: "center",margin:'0.5rem' }}>People</h2>
        <CardList />
      </div>
    </Layout>
  );
}

export default People;
