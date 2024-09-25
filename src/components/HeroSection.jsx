import CvButton from "./CvButton";
import Icons from "./Icons";


export default function HeroSection() {
    return (
        <section id="hero" className="">
            <div className="row">
                <div className="col-lg-9">
                    <div className="image-container" data-aos="zoom-in-right" data-aos-duration="2000">
                        <div className="hero-title-container" data-aos="fade" data-aos-delay="2000"  >
                            <h4 data-aos="slide-right" data-aos-delay="">HELLO, I&apos;M</h4>
                            <h1 data-aos="slide-right" data-aos-delay="">Rajat Sharma.</h1>
                            <h3 data-aos="slide-right" data-aos-delay="" >A <span className="typing"></span></h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 ">
                    <div className="profile-container" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-out">
                        <div className="profile-info">
                            <img src="https://www.icon0.com/free/static2/preview2/stock-photo-kid-boy-avatar-people-icon-character-cartoon-32922.jpg" className="avatr-image mb-4" alt="" />
                            <h1 className="mt-2 mb-5">Rajat Sharma</h1>
                            <p className="my-4">Btech in Mechanical Engineering. India, Delhi</p>
                            <p className="mb-4">rajat9.lyfe@gmail.com +91-8287419534</p>
                            <div className="d-flex justify-content-center icon ">
                                <Icons/>
                            </div>
                            <CvButton cvCSS="cv-light" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
