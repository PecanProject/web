import React from "react";
import Layout from "@theme/Layout";
import "./documentation.css";
import Foot from "@docusaurus/Head";
function Master() {
  return (
    <>
      <Layout title="Master" >
        <Foot>
          <body className="documentation"></body>
        </Foot>
        <iframe
          src="https://pecanproject.github.io/pecan-documentation/master/"
          style={{ border: "none" }}
          width="100%"
          height="100%"
          allowFullScreen
          id="iFrame2"
          // sandbox=""
        >
          <p>
            <a href="/en-US/docs/Glossary">
              Fallback link for browsers that don't support iframes
            </a>
          </p>
        </iframe>
      </Layout>
    </>
  );
}

export default Master;
