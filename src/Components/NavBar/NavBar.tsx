import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
export default function NavBar() {
    return (
        <Navbar
            shouldHideOnScroll
            classNames={{
                base: "bg-vivid-sky-blue",
                brand: "font-bold text-inherit text-xl text-white"
            }}
        >
            <NavbarBrand>
                <p>Consumer Compass</p>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem className="lg:flex">
                    <Link className="text-white" href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button
                        as={Link}
                        href="#" variant="flat"
                        className="bg-light-soft-blue"
                    > Sign Up</Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}