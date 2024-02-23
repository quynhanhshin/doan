import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../imgs/logo.png";
import iconcart from "../../imgs/icon cart.png";
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarText, NavbarToggler, UncontrolledDropdown } from "reactstrap";
import "./header.css";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className="header">
            {/* <div className="left">
                <div className="logo">
                    <Link to={`/`}>
                        <img alt="logo" src={logo} />
                    </Link>
                </div>
                <div className="menu">

                </div>
            </div> */}
            <div>
                <Navbar expand="md">
                    <NavbarBrand href="/">
                        <img alt="logo" src={logo} />
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="me-auto" navbar>
                            <NavItem>
                                <NavLink href="/">HOME</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/page">PAGE</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/products">SHOP</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/blog">BLOG</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    <NavItem>
                            <NavLink className="cart" href="/cart">
                                <img alt="cart" src={iconcart} />
                                CART
                            </NavLink>
                        </NavItem>
                </Navbar>
            </div>
        </div>
    );
}
export default Header;
