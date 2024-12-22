import "./index.css"

const Contact=()=>{
    return (
    <div className="contact-container">
        <div className="contact-content-container">
        <h1 className="contact-section-heading">Contact Me</h1>
            <p className="contact-section-description">
            Thank you for visiting my portfolio! I am always eager
             to explore new opportunities and expand my knowledge of 
             emerging technologies. If you have any questions, potential 
             opportunities, or would like to discuss a collaboration, I would 
             love to hear from you. Please don’t hesitate to get in touch—I’m
              excited to connect and discuss how I can contribute to your team 
              or project.
            </p>
            <p className="details-font email-text"> {"< madhukarbaikana17@gmail.com />"}</p>
           <div className="navigation-buttons-container">
        <button type="button" className="contact-section-button" onClick={()=>window.location.href="mailto:madhukarbaikana17@gmail.com"} >
            Send Email
                </button>
                <a href="https://www.linkedin.com/in/madhukar-baikana-7bm" target="_blank">
                <button type="button" className="contact-section-button" > 
                 Let’s Connect On LinkedIn
                </button></a>
                </div>

        </div>
    </div>
    )
}

export default Contact