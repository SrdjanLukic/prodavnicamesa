import React from "react";
import AboutPageParagraph from "./AboutPageParagraph";
import AboutImg from "../img/about-img.jpg";
import AboutPageTitle from "./AboutPageTitle";

const AboutPage = () => {
    return (
        <div>
            <AboutPageTitle text="Welcome to Meat Central!" />

            <AboutPageParagraph text="We are a family-owned business that has been operating for over 20 years. Our mission is to provide high-quality, locally sourced meats to our customers." />
            <AboutPageParagraph text="We work closely with local farmers and ranchers to ensure that all of our meats are of the highest quality. We pride ourselves on offering a wide variety of meats including beef, pork, chicken, and lamb." />
            <AboutPageParagraph text="Our online store makes it easy for customers to order their favorite meats and have them delivered right to their door. We also offer a subscription service for regular customers who want to have their meats delivered on a regular basis." />
            <AboutPageParagraph text="At Meat Central, we take great care in packaging and delivering our meats to ensure that they arrive in perfect condition. We stand behind the quality of our products and guarantee your satisfaction." />

            <img
                src={AboutImg}
                alt="skfh"
                className="w-3/4 mx-auto my-6 rounded-xl"
            />

            <AboutPageParagraph text="Thank you for choosing Meat Central for all your meat needs. We look forward to serving you!" />
        </div>
    );
};

export default AboutPage;
