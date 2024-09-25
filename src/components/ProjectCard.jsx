import React from 'react'
import CardSpan from './CardSpan'

export default function ProjectCard({ imgSrc, date, title, teckStack, body, liveURL }) {
    return (
        <div className='col-lg-4 mb-5 p-2'>
            <div className="card" data-aos="flip-right" data-aos-delay="300" data-aos-duration="1000" >
                <img src={imgSrc} className="card-img-top card-image " alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-3 text-body-secondary">{date}</h6>
                    <p className="card-text mt-2">{body}</p>
                    <div className='my-3'>
                        {teckStack && teckStack.map(item => <CardSpan key={item} title={item} />)}
                    </div>
                    <button className='btn card-button'><a href={liveURL}><i className="fa-solid fa-globe me-1 icon"></i>Website</a></button>
                </div>
            </div>
        </div>
    )
}
