import './components.css';
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
function Logo()
{
    return(
    <>
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg"  className='navbar navbar-main navbar-light sticky-top'>
          <Container>
          <Navbar.Brand href="./">
            <img className="logo" src='./Img/Homeqube-logo-black_small 1.svg' alt=''/>
          </Navbar.Brand>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navmenu">
                <ul class="navbar-nav">
                    <li class="nav-item ms-5">
                        <a href="/ProofOfConcept" class="nav-link">
                            <p class="nav-item px-4 pt-4">
                                proof of 
                                <br/>
                                concept
                            </p>
                        </a>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item ms-5">
                        <a href="/NftCollection" class="nav-link">
                            <p class="nav-item px-4 pt-4">
                                nft 
                                <br/>collections
                            </p>
                        </a>
                    </li>
                </ul> <ul class="navbar-nav">
                    <li class="nav-item ms-5">
                        <a href="/BuyOffers" class="nav-link">
                            <p class="nav-item px-4 pt-4">
                                buy <br/>offers
                            </p>
                        </a>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item ms-5">
                        <a href="https://www.qube.homeqube.com/" target="_blank" class="nav-link">
                            <p class="nav-item px-4 pt-4">
                                ico <br/>website
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
          </Container>
        </Navbar>
    </>
    );
}
export default Logo;