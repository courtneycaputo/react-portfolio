import React from 'react';

function Footer (){
    const icons = [
        {
            name:"fa-brands fa-github",
            links: "https://github.com/courtneycaputo",
        },
        {
            name: "fa-brands fa-linkedin",
            links: "https://www.linkedin.com/in/courtney-caputo-556614b5/"
        },
        {
            name: "fa-solid fa-envelope",
            links: "mailto:courtneycaputo@gmail.com"
        }
    ]


    return (
        <footer> <center>
            {icons.map(icon => {
                return <a href={icon.links} key={icon.name} target="blank" className="footer-link"> <i className={icon.name}></i></a>
            })}
            </center>
        </footer>
    )
}

export default Footer;