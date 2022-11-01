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
            name: "fa-brands fa-stack-overflow",
            links: "https://stackoverflow.com/users/19785955/courtney-caputo"
        }
    ]

    const LinkStyle = {
        fontSize: "50px",
        textDecoration: "none", 
        color: "black"
    }

    return (
        <footer> <center>
            {icons.map(icon => {
                return <a href={icon.links} key={icon.name} target="blank" style={LinkStyle}> <i className={icon.name}></i></a>
            })}
            </center>
        </footer>
    )
}

export default Footer;