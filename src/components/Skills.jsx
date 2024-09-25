import HeadingContainer from "./HeadingContainer";
import Skill from "./Skill";


export default function Skills() {
  return (
    <section id="skills" className="sections-padding">
      <HeadingContainer heading="Skills" description="WHAT I BRING TO THE TABLE" />
      <div className="language">
        <Skill name="HTML" percent="90%" cssClass="p90" />
        <Skill name="CSS" percent="90%" cssClass="p90" />
        <Skill name="Javascript" percent="90%" cssClass="p90" />
        <Skill name="Nodejs" percent="70%" cssClass="p70" />
        <Skill name="Reactjs" percent="80%" cssClass="p80" />
        <Skill name="Git&Github" percent="60%" cssClass="p60" />
        <Skill name="MongoDB" percent="70%" cssClass="p70" />
        <Skill name="C/C++" percent="60%" cssClass="p60" />
      </div>
    </section>
  )
}
