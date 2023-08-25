import React from 'react'

function ProposBox() {
  return (
    <div className="about__boxes grid">
        <div className="about_box">
            <i className="about__icon icon-fire"></i>

            <div>
                <h3 className="about__title">60</h3>
                <span className="about__subtitle">Projetct Completed</span>
            </div>
        </div>

        <div className="about_box">
            <i className="about__icon icon-cup"></i>

            <div>
                <h3 className="about__title">5670</h3>
                <span className="about__subtitle">Cup of Coffee</span>
            </div>
        </div>

        <div className="about_box">
            <i className="about__icon icon-people"></i>

            <div>
                <h3 className="about__title">427</h3>
                <span className="about__subtitle">Satisfied Clients</span>
            </div>
        </div>

        <div className="about_box">
            <i className="about__icon icon-people"></i>

            <div>
                <h3 className="about__title">35</h3>
                <span className="about__subtitle">Nominees Winner</span>
            </div>
        </div>
    </div>
  )
}

export default ProposBox
