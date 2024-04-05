import Card from "./VidCard";
import styles from "./styles.module.scss";

const VideoCards = ({
  children,
  density,
}: {
  children: any;
  density: boolean;
}) => {
  return (
    <div className={styles.content}>
      {children}
      <div className={styles.cards}>
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
        <Card style={density ? styles.card : styles.bigCard} />
      </div>
    </div>
  );
};

export default VideoCards;
