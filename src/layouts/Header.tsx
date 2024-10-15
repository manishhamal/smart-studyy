import { Outlet, Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="header container px-12 py-6">
        <ul className="flex justify-around">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/subjects">Subjects</Link>
          </li>

          <li>
            <Link to="/resources">Resources</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
