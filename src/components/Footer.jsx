import React from "react";
import {
    AiFillTwitterCircle,
    AiFillFacebook,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillRedditCircle,
} from "react-icons/ai";

const Footer = () => {
    const iconSize = 26;

    return (
        <div className="flex flex-col gap-6 py-8 bg-primary text-textColor">
            <div className="flex gap-4 justify-center">
                <div>
                    <a
                        href="/"
                        target="_blank"
                        className="hover:text-headingColor"
                    >
                        <AiFillFacebook size={iconSize} />
                    </a>
                </div>
                <div>
                    <a
                        href="/"
                        target="_blank"
                        className="hover:text-headingColor"
                    >
                        <AiFillTwitterCircle size={iconSize} />
                    </a>
                </div>
                <div>
                    <a
                        href="/"
                        target="_blank"
                        className="hover:text-headingColor"
                    >
                        <AiFillInstagram size={iconSize} />
                    </a>
                </div>
                <div>
                    <a
                        href="/"
                        target="_blank"
                        className="hover:text-headingColor"
                    >
                        <AiFillLinkedin size={iconSize} />
                    </a>
                </div>
                <div>
                    <a
                        href="/"
                        target="_blank"
                        className="hover:text-headingColor"
                    >
                        <AiFillRedditCircle size={iconSize} />
                    </a>
                </div>
            </div>
            <div>
                <p className="text-center">
                    Copywright 2022 All rights reseved | This site is made by
                    Srdjan Lukic
                </p>
            </div>
        </div>
    );
};

export default Footer;
