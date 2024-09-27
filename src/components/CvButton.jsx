import React from 'react'
import pdf from "/cv/RAJAT_SHARMA-(RESUME).pdf"

export default function CvButton({ cvCSS }) {

  function clickHandler() {
    window.open(pdf, "_blank")
  }

  let css = "btn fs-2 text cv-button "
  if (cvCSS) {
    css += cvCSS
  }
  return (
    <a href={pdf} download>
      <button type="button" className={css} onClick={clickHandler}>Download CV</button>
    </a>
  )
}
