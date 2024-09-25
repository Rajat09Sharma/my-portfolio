
export default function HeadingContainer({heading,description}) {
  return (
    <div className="heading-container" data-aos="fade-down-right" data-aos-delay="200" data-aos-duration="800">
    <h1><em>{heading}</em></h1>
    <h6>{description}</h6>        
</div>
  )
}
