import React from "react";
import logo from "../../assets/image/QAirlineLogoVer2_colored.png";

function Footer() {
    return (
        <footer className="bg-theme-onPrimaryContainer text-white">
            <div className="max-w-6xl m-auto flex px-2 py-4 justify-between max-lg:flex-col max-lg: items-center max-lg:gap-4">
                <div className="max-lg:text-center">
                    <h2 className="text-3xl font-bold">QAirline</h2>
                    <h3 className="">This website is for demonstration purposes only and does not represent a real service.</h3>
                    <h3 className="">Any content or functionality shown is purely illustrative.</h3>
                </div>
                <div className="">
                    <h2 className="font-bold">Contact us at:</h2>
                    <h3 className=""><em>Phone: </em>+84 123 456 789</h3>
                    <h3 className=""><em>Email: </em>example@gmail.com</h3>
                </div>
                <div className="">
                    <h2 className="font-bold">Follow us on:</h2>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.png"/>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png"/>
                        </a>
                        <a href="https://www.x.com" target="_blank" rel="noreferrer">
                            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/twitter.png"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
