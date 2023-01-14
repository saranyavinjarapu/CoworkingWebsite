import styles from "./PlanetPlusContainer.module.scss";
import FeatureInfoCard from "../FeatureInfoCard/FeatureInfoCard";
import Image from "next/image";
import planetPlusRectangle from "../../public/planetPlusRectangle.svg";
import linkArrow from "../../public/linkArrow.svg";
import spaceCafe from "../../images/spaceCafe.svg";
import enrichment from "../../images/enrichment.svg";
import library from "../../images/library.svg";
import featuresData from "../../data/featuresData";

const PlanetPlusContainer = () => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.titleContainer}>
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
      <ul className={`${styles.scrollableList} ${styles.full}`}>
        {featuresData.map((row, index) => (
          <FeatureInfoCard
            key={row.feature_name}
            featureImageSource={row.feature_image}
            featureBackgroundColor={row.feature_background_color}
            featureTitle={row.feature_title}
            featureDescription={row.feature_description}
          />
        ))}
      </ul>
    </div>
  );
};

export default PlanetPlusContainer;
