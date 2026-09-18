import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
         /* Container used to control the layout and spacing */
      <div className="container">
        <h1>React TypeScript App</h1>

        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;