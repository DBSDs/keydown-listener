import React from "react";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import HomepageHeader from "../components/HomepageHeader";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <BrowserOnly fallback={<div>Loading...</div>}>
        {() => {
          return <HomepageHeader />;
        }}
      </BrowserOnly>
    </Layout>
  );
}
