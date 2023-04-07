import { Link } from "react-router-dom";
const Header = () => {
return (
    <div className="header">
    <Link to="/">
        <img
        alt="logo"
        className="logo"
        src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1479894448/ahmxqk3wfkgjidbgjdut.png"
        ></img>
    </Link>
    <ul className="nav-items">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <p>Status : </p>
    </ul>
    </div>
);
};

export default Header;