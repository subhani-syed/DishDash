const Header = () => {
return (
    <div className="header">
    <a href="/">
        <img
        alt="logo"
        className="logo"
        src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1479894448/ahmxqk3wfkgjidbgjdut.png"
        ></img>
    </a>
    <ul className="nav-items">
        <li>About</li>
        <li>Menu</li>
        <li>Contact</li>
        <li>Cart</li>
    </ul>
    </div>
);
};

export default Header;