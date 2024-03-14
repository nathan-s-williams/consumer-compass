// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";

function Footer() {
    return(
        <div className="fixed bottom-0 inset-x-0 h-20 flex items-center">
            <p className="ml-5 text-black">Copyright { new Date().getFullYear() }</p>
        </div>
    );
}

export default Footer;