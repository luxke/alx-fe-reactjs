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
    display: "flex",       
    justifyContent: "center", 
    alignItems: "center",    
    gap: "20px"             
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    padding: "8px 16px",
    borderRadius: "5px",
    transition: "background 0.3s",
  }
};

export default Navbar;
