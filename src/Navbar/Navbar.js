import './navbar.scss';
export function Navibar() {
    return (
        <>
            <nav id='nav' class="navbar fixed-top navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#nav">Serhii Khvostikov</a>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Projects</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Contacts</a>
                        </li>
                    </ul>
                </div>
                </nav>
        </>
    )
}