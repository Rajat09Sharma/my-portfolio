import React from 'react'
import HeadingContainer from './HeadingContainer'
import ProjectCard from './ProjectCard'
import schoolSrc from "/images/school-website.png"
import foodSrc from "/images/food-website.png"
import managementSrc from "/images/management-website.png"
import placepickerSrc from "/images/placepicker-website.png"
import growthSrc from "/images/growth-website.png"
import notelSrc from "/images/notes-website.png"

export default function ProjectContainer() {
    return (
        <section id="project" className='sections-padding'>
            <HeadingContainer heading="PROJECTS" description="WHAT I'VE BUILD" />
            <div className='row'>
                <ProjectCard
                    title="School Website"
                    date="Aug-2024"
                    body="A modern, responsive school website that showcases important information like programs, faculty, and contact details. It highlights the educational offerings and provides an interactive interface for users to navigate easily."
                    imgSrc={schoolSrc}
                    teckStack={["HTML", "CSS", "JavaScript", "Ractjs", "Redux","React-router-dom","Bootstrap"]}
                    liveURL="https://schooll-website.netlify.app/"
                />
                <ProjectCard
                    title="FoodiPie Website"
                    date="June-2024"
                    body="An online platform that enables users to browse various food items, select their preferences, and place orders directly. The site uses a clean, user-friendly interface for an efficient food-ordering experience."
                    imgSrc={foodSrc}
                    teckStack={["HTML", "CSS", "JavaScript","Ractjs","ContextAPI","Nodejs","MongoDB"]}
                    liveURL="https://react-foodiepie-site.netlify.app/"
                />
                <ProjectCard
                    title="Management Website"
                    date="May-2024"
                    body=" A to-do list app designed to help users manage and organize their tasks efficiently. It provides features like task creation, editing, and deletion, with a responsive layout for better user experience."
                    imgSrc={managementSrc}
                    teckStack={["HTML", "CSS", "JavaScript", "Ractjs",]}
                    liveURL="https://management-todolist-app.netlify.app/"
                />
                <ProjectCard
                    title="PlacePicker Website"
                    date="May-2024"
                    body="A map-based application that allows users to search for and select specific locations. The interface supports real-time map interaction, making it easier for users to choose their desired place."
                    imgSrc={placepickerSrc}
                    teckStack={["HTML", "CSS", "JavaScript", "Ractjs"]}
                    liveURL="https://place-picker-rs.netlify.app/"
                />
                <ProjectCard
                    title="Landing Page"
                    date="June-2024"
                    body=" A well-designed landing page that focuses on showcasing product or service information. It features sections like services, testimonials, and calls-to-action, aimed at converting visitors into potential clients."
                    imgSrc={growthSrc}
                    teckStack={["HTML", "CSS", "JavaScript","Bootstrap"]}
                    liveURL="https://splendid-kitsune-ba78d7.netlify.app/"
                />
                <ProjectCard
                    title="Notes Website"
                    date="July-2024"
                    body="A simple, intuitive app that allows users to create, edit, and delete notes. It offers a streamlined experience for organizing personal or professional information in a user-friendly environment."
                    imgSrc={notelSrc}
                    teckStack={["HTML", "CSS", "JavaScript", "Ractjs", "Redux","Bootstrap"]}
                    liveURL="https://notes-website-app.netlify.app/"
                />
            </div>
        </section>
    )
}
