import "./navbarStyles.css";

function Navbar() {
  return (
    <header>
      <div className="navBar">
        <div className="icon icon-navbar">
          <i class="fa-brands fa-spotify fa-3x"></i>
          <div>Spotify</div>
        </div>

        <div>
          <ul>
            <li>
              <a href="index.html">Premium</a>
            </li>

            <li>
              <a href="index.html">Support</a>
            </li>

            <li>
              <a href="index.html">Download</a>
            </li>
            <li className="separator" role="separator">
              |
            </li>
            <li>
              <a href="index.html">Sign up</a>
            </li>

            <li>
              <a href="index.html">Log in</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
