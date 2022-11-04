import React, { useEffect } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import keydownListener from "../../../../package/index";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const a = keydownListener();
  return (
    <>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              onClick={(e) => {
                console.log(a.events, a.keys);
              }}
            >
              移除水印
            </Link>
          </div>
        </div>
      </header>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "10px" }}
      >
        <label>请输入水印内容：</label>
      </div>
    </>
  );
}

export default HomepageHeader;
