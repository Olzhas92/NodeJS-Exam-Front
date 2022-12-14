import React from "react";
import styles from "./NavPages.module.css";

const NavPages = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>Home</li>
      <li className={styles.item}>Files</li>
    </ul>
  );
};

export default NavPages;
