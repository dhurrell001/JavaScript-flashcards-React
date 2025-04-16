import React from "react";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles["header-container"]}>
      <div className={styles["app-title"]}>
        <h1>
          <span style={{ color: "gold", fontSize: "1.5em" }}>J</span>AVA
          <span style={{ color: "gold", fontSize: "1.5em" }}>S</span>CRIPT
        </h1>
        <h2>FLASHCARDS</h2>
      </div>
      {console.log(styles)}
    </header>
  );
}

export default Header;
