import ContactColumn from "./ContactColumn";
import CvButton from "./CvButton";
import Icons from "./Icons";

export default function ContactMe() {
    return (
        <section id="contact" className="sections-padding">
            <div className="row py-3">
                <ContactColumn>
                    <h2 className="contact-col-heading" data-aos="zoom-in-right" data-aos-duration="1000">
                        <em>
                            I'd love to hear from you.
                        </em>
                    </h2>

                </ContactColumn>
                <ContactColumn>
                    <div data-aos="zoom-in-left" data-aos-duration="1000">
                        <p className="mb-4">rajat9.lyfe@gmail.com</p>
                        <p>+91-8287419534</p>
                    </div>

                </ContactColumn>
                <ContactColumn>
                    <div className="w-50 d-flex justify-content-between contact-icon " data-aos="zoom-in-right" data-a0s-duration="1000">
                        <Icons />
                    </div>
                </ContactColumn>
                <ContactColumn>
                    <div data-aos="zoom-in-left" data-aos-duration="1000">
                        <CvButton cvCSS="cv-dark" />
                    </div>
                </ContactColumn>
            </div>

        </section>
    )
}
