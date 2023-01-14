import styles from "./FeatureInfoCard.module.scss";
import Image from "next/image";

const FeatureInfoCard = (props) => {
  const {
    featureImageSource,
    featureBackgroundColor,
    featureTitle,
    featureDescription,
  } = props;
  return (
    <li className={styles.featureInfoCard}>
      <Image
        className={styles.featureInfoImage}
        src={featureImageSource}
        alt="planet plus icon"
      />
      <div
        className={styles.featureInfo}
        style={{ backgroundColor: featureBackgroundColor }}
      >
        <div className={styles.featureInfoTitle}>{featureTitle}</div>
        <div className={styles.featureInfoDescription}>
          {featureDescription}
        </div>
      </div>
    </li>
  );
};

export default FeatureInfoCard;
