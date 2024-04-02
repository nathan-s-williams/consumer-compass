
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import {render} from "@testing-library/react";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

//Simple render tests
it('NavBar renders without crashing.', () => {
    render(<NavBar />)
})

it('Footer renders without crashing.', () => {
    render(<Footer />)
})