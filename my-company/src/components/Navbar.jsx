import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/about" style={styles.link}>About</Link>
      <Link to="/services" style={styles.link}>Services</Link>
      <Link to="/contact" style={styles.link}>Contact</Link>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#333",
    padding: "10px",
    textAlign: "center",
  },
  link: {
    color: "white",
    textDecoration: "none",
    margin: "0 15px",
    fontSize: "18px",
  }
};

export default Navbar;