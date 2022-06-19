import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink} from './NavbarElements'
import Logo from '../../square.svg';


const Navbar = ()=>{
    return(

        <>
            <Nav>
                <NavLink to="/">
                <img src={Logo} className="logo" alt="logo"/>Playground
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/services" activeStyle>
                        Services
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to="/signup" activeStyle>
                        Sign up
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
        
        
        );
};
export default Navbar;