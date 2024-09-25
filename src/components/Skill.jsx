

export default function Skill({name,percent,cssClass}) {
    let lineCss="line ";
    if(cssClass){
        lineCss +=cssClass
    }
    return (
        <div className="skill">
            <div className="skill-name">
                <span data-aos="fade-down-right" data-aos-delay="200" data-aos-duration="1200"   >{name}</span>
                <span data-aos="fade-down-left" data-aos-delay="200" data-aos-duration="1200"  >{percent}</span>
            </div>
            <div className={lineCss} data-aos="slide-right" data-aos-delay="0" data-aos-duration="1000" ></div>
        </div>
    )
}
