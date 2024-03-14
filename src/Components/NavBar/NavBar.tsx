// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

function NavBar(){
    return (
        <Navbar
            shouldHideOnScroll
            classNames={{
                base: "bg-vivid-sky-blue",
                brand: "font-bold text-inherit text-xl text-white"
            }}
        >
            <NavbarBrand>
                <p className="font-roboto text-3xl font-normal">Consumer Compass</p>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem className="lg:flex">
                    <div className="no-hover-opacity">
                        <Link className="text-white" href="#">Login</Link>
                    </div>
                </NavbarItem>
                <NavbarItem>
                    <div className="no-hover-opacity">
                        <Button
                            as={Link}
                            href="#" variant="flat"
                            className="bg-white"
                        > Sign Up</Button>
                    </div>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}

export default NavBar;