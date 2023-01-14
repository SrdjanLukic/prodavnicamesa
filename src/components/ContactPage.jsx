import React from "react";
import AboutPageParagraph from "./AboutPageParagraph";
import AboutPageTitle from "./AboutPageTitle";
import ContactImg from "../img/contact-img.jpg";

const ContactPage = () => {
    return (
        <div>
            <AboutPageTitle text="Welcome to Meat Central!!!" />

            <AboutPageParagraph text="Thank you for visiting Meat Central! We are dedicated to providing our customers with the best service possible. If you have any questions or comments about our products or services, please don't hesitate to contact us." />
            <AboutPageParagraph text="You can reach us by phone at 555-555-5555 from Monday to Friday, 9am to 5pm EST." />
            <AboutPageParagraph text="You can also email us at info@meatcentral.com and we will get back to you as soon as possible." />
            <AboutPageParagraph text="If you prefer to visit us in person, our address is 123 Main Street, Anytown USA. Our hours of operation are Monday to Saturday, 9am to 6pm EST." />
            <AboutPageParagraph text="Thank you for choosing Meat Central for all your meat needs. We look forward to hearing from you!" />

            <img
                src={ContactImg}
                alt="meat product"
                className="w-3/4 mx-auto my-6 rounded-xl"
            />
        </div>
    );
};

export default ContactPage;
