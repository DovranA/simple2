import styles from "./navbar.module.scss";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1>TM BIZ</h1>
      <div className={styles.searchDiv}>
        <input type="text" placeholder="Gozle" />
        <i className="bi bi-search"></i>
      </div>
      <div className={styles.right}>
        <div className={styles.notificDiv}>
          <i className="bi bi-bell"></i>
        </div>
        <div className={styles.avatar}>
          <img src="/card1.png" alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
