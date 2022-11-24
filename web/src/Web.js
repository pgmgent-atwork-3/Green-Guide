import './scss/main.scss';

function Web() {
  return (
    <div className="Web">
      <h1 class="text-3xl font-bold ">
        Hello world!
      </h1>      
      <nav>
        <div>
          <a href="./index.html">
            {/* <img src="../static/images/logo-gg-white.svg" alt="logo-white"> */}
          </a>
          <ul class="nav-list">
            <li class="nav-link"><a href="#about">about</a></li>
            <li class="nav-link"><a href="#download">download</a></li>
            <li class="nav-link"><a href="#business">business</a></li>
            <li class="nav-link"><a href="#contact">contact</a></li>
          </ul>
        </div>
        <div>
          <a href="./dashboard.html" class="btn btn-primary">Log in</a>
          <a href="./dashboard.html" class="btn btn-secondary">Sign up</a>
        </div>
      </nav>
    </div>
  );
}

export default Web;
