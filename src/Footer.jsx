import React from 'react'
import github from './img/github.png';
import linkedin from './img/linkedin.png';
import phone from './img/phone-call.png';
import swal from 'sweetalert';
const Footer = () => {
    const handlePhone = () => {
        swal({
            title: "+447867060691",
            text: "Hurry Up!"
          });
    }
  return (
    <footer>
        <a href="https://github.com/roberromero"><img src={github} alt="github icon"/></a>
        <a href="https://www.linkedin.com/in/roberto-romero-martin-204939230/"><img src={linkedin} alt="linkedin icon"/></a>
        <img onClick={handlePhone} src={phone} alt="smartphone icon"/>
    </footer>
  )
}

export default Footer
