import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav class="navbar navbar-expand-sm navbar-light">
      <div class="container-fluid justify-content-end">
        {/* <Link class="navbar-brand" to="/">
          Joys of Life
        </Link> */}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav text-end">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
              <span data-bs-target="#navbarNav" data-bs-toggle="collapse">Home</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="sequoia">
              <span data-bs-target="#navbarNav" data-bs-toggle="collapse">Sequoia</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="kingscanyon">
              <span data-bs-target="#navbarNav" data-bs-toggle="collapse">Kings Canyon</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
