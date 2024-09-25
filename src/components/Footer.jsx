import React, { useState } from 'react'

export default function Footer() {

    let initialDate = new Date().getFullYear()
    const [date, setDate] = useState(initialDate);
    setInterval(() => {
        const newdate = new Date().getFullYear();
        setDate(newdate);
    }, 10000)


    return (
        <section id='footer'>
            <div >
                <p><em>{`© ${date} By Rajat Sharma.`}</em></p>
            </div>
        </section>
    )
}
