import styles from "./PlanetPlusContainer.module.scss";
import Image from "next/image";
import planetPlusRectangle from "../../public/planetPlusRectangle.svg";
import linkArrow from "../../public/linkArrow.svg";

const PlanetPlusContainer = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles.item} ${styles.title}`}>Planet Plus</div>
      <div className={`${styles.item} ${styles.description}`}>
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
      <div className={styles.item}>3</div>
      <div className={styles.item}>4</div>
      <div className={styles.item}>5</div>
    </section>
  );
};

export default PlanetPlusContainer;
