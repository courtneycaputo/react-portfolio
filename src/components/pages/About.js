import React from 'react';
import myPicture from '../../assets/mypicture.png';


export default function About() {
  return (
    <div className="container">
      <br></br>
      <center><img src={myPicture} className="my-picture" alt="Courtney" /></center>
      
      <h1 className="nameFont">About Me</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
        velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
        ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
        non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
        ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
        rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
        tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
        porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
        vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
        fames ac ante ipsum primis in faucibus.
      </p>
      
      <p>
        Hello, and welcome to my portfolio! My name is Courtney, and after spending 11 years working in Accounting and Finance I decided to change career paths. I am currently a student in the Full Stack Coding class through UCSD Extensions.

        I have a bachelor's degree from UC Santa Barbara.
      </p>
    </div>
  );
}
