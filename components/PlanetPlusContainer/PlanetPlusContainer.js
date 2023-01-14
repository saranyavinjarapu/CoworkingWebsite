import styles from "./PlanetPlusContainer.module.scss";
import FeatureInfoCard from "../FeatureInfoCard/FeatureInfoCard";
import Header from "../Header/Header";
import featuresData from "../../data/featuresData";

const PlanetPlusContainer = () => {
  return (
    <div className={styles.gridContainer}>
      <Header></Header>
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
