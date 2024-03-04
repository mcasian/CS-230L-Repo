function Navbar() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="https://www.example.com">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="https://www.example.com">Home</a>
          <a class="nav-item nav-link" href="https://www.example.com">About</a>
          <a class="nav-item nav-link" href="https://www.example.com">Contact</a>
        </div>
      </div>
    </nav>
    );
}

export default Navbar;
