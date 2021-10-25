function Navbar (){

    return  `<nav class="navbar navbar-info bg-info  navbar-expand-sm p-3" >
    <a class="navbar-brand ml-3" href="index.html" style="color: black;">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-card-image" viewBox="0 0 16 16">
        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
        <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"/>
        </svg>
    </svg>
       
      <b>Image App</b>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <form class="form-inline my-2 my-lg-0 ml-5">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="searchBox">
                <button class="btn btn-danger my-2 my-sm-0" type="submit" id="search">Search</button>
              </form>
              <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
              <ul class="navbar-nav ml-auto ">
              <li class="nav-item active list-inline-item mt-2 mr-5">🏆Awards</li>
              <li class="nav-item active list-inline-item"><button class="btn btn-light my-2 my-sm-0 mt-3 mr-4 rounded-pill" type="submit">Submit a photo</button></li>
                  <li class="nav-item active list-inline-item"><a class="nav-link text-body mr-5" href="">Brands</a></li>
                  <li class="nav-item active list-inline-item mr-5 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bell mr-3" viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                  </svg></li>
                <li class="nav-item active list-inline-item mr-5 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle mr-3" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                  </svg></li>
                  <li class="nav-item active list-inline-item mr-3 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-border-width" viewBox="0 0 16 16">
                  <path d="M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/>
                </svg></li>
              </ul>
              </div>
          </nav>
          <nav class="navbar navbar-info bg-info  navbar-expand-sm p-3" >
          <ul class="navbar-nav  " style="color: white;">
          <li class="nav-item active list-inline-item"><a class="nav-link text-body mr-5" href="">Film</a></li>
          <li class="nav-item active list-inline-item"><a class="nav-link text-body mr-5" href="">Fashion</a></li>
          <li class="nav-item active list-inline-item"><a class="nav-link text-body mr-5" href="">Animals</a></li>
          <li class="nav-item active list-inline-item"><a class="nav-link text-body mr-5" href="">Nature</a></li>

                <li class="nav-item active list-inline-item"><a class="nav-link text-body mr-5" href="">People</a></li>
                <li class="nav-item active list-inline-item"><a class="nav-link text-body mr-5" href="">Architecture</a></li>
                <li class="nav-item active list-inline-item"><a class="nav-link text-body mr-5" href="">Food and Drink</a></li>
                <li class="nav-item active list-inline-item"><a class="nav-link text-body" href="">Health and Wellness</a></li>
            </ul>
            </div>
          </nav>`
}

export default Navbar;