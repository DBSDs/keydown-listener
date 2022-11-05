import React, { useEffect } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import keydownListener from "package";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const keyGen = keydownListener({
    onkeydown: (val) => {
      setKeywatch([...val.keys]);
    },
  });

  const [keyRef, setKeyRef] = React.useState<string[]>([]);
  const [keywatch, setKeywatch] = React.useState<string[]>([]);

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
                setKeyRef(keyGen.keys);
                console.log(`CLICK:`, keyGen.keys);
              }}
            >
              保存按键
            </Link>
          </div>
        </div>
      </header>

      <div
        style={{ display: "flex", justifyContent: "center", padding: "10px" }}
      >
        <label>正在按键：{keywatch.join("+")}</label>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "10px" }}
      >
        <label>点击时按键：{keyRef.join("+")}</label>
      </div>
    </>
  );
}

export default HomepageHeader;
