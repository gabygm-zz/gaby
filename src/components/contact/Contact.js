import React from 'react'

export default () => {
    return (
        <div> 
            <div className="col-md-12 blog-entry text-center">
                <h2>
                Gabriela Guamán
                </h2>
                <h5>
                    Full-stack Developer
                </h5>
            </div>
            <div className="col-md-12 text-center">
                 <button type="button" class="btn btn-default contact-icon" aria-label="Left Align">
                    <a href="https://github.com/gabygm"><i className="icon-github text-dark" ></i></a>
                 </button>

                 <button type="button" class="btn btn-default contact-icon" aria-label="Left Align">
                    <a href="mailto:paogaby0803@gmail.com"><i className="icon-envelope text-dark" ></i></a>
                 </button>  
            </div>
            <div className="col-md-12 blog-entry text-center">
                <button type="button" class="btn btn-default contact-icon" aria-label="Left Align">
                    <a href="https://www.facebook.com/pao.gabu"><i className="icon-facebook"></i></a>
                </button>
                <button type="button" class="btn btn-default contact-icon" aria-label="Left Align">
                    <a href="https://twitter.com/gabyp_gm"><i className="icon-twitter"></i></a>
                </button>
                <button type="button" class="btn btn-default contact-icon" aria-label="Left Align">
                    <a href="https://www.instagram.com/gabyp_gm"><i className="icon-instagram"></i></a>
                </button>
                <button type="button" class="btn btn-default contact-icon" aria-label="Left Align">
                    <a href="https://www.linkedin.com/in/gabygm/"><i className="icon-linkedin"></i></a>
                </button>
            </div>
        </div> 
    )
}
