import styles from "./styles.module.scss";
type Props = {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
};
const RankButton = ({ children, active, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={active ? styles.activeBtn : styles.rankBtn}
    >
      {children}
    </button>
  );
};

export default RankButton;
