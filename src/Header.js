const Header = ({ handler }) => {
  return (
    <nav>
      <div className="flex">
        <img src="https://vignette.wikia.nocookie.net/naruto/images/6/64/Favicon.ico/revision/latest?cb=20141014010210" />
        <a className="siteicon">AZ Scraper</a>
      </div>

      <form className="forms" onSubmit={handler}>
        <span>
          <i className="fa fa-search" style={{ fontSize: "24px" }}></i>
        </span>
        <input
          required
          type="search"
          placeholder="Search Artist"
          name="artist"
          style={{ borderRight: "2px solid lightgreen" }}
        />
        <input required type="search" placeholder="Search Song" name="song" />
        <button type="submit">Search</button>
      </form>
      <div className="signers">
        <a href="#about" className="signup">
          About
        </a>
        <a href="#help" className="signin">
          Help
        </a>
      </div>
    </nav>
  );
};

export default Header;
