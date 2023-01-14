import React from "react";
import Image from "next/image";
import planetPlusRectangle from "../../images/planetPlusRectangle.svg";
import linkArrow from "../../images/linkArrow.svg";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={styles.title}>Planet Plus</div>
        <div className={styles.description}>
          Co-working, caregiver spaces and a cafe. Be productive; make friends;
          become a part of the Healthy Planet community.
          <div className={styles.descriptionPlus}>
            <Image
              src={planetPlusRectangle}
              alt="planet plus icon"
              width="350px"
              height="300px"
              className={styles.planetPlusRectangle}
            />
            PLANET PLUS
            <Image
              src={linkArrow}
              alt="link arrow to planet plus"
              width="350px"
              height="300px"
              className={styles.linkArrow}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
