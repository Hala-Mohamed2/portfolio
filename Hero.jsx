import './Hero.css';


const Hero = () => {
  return(
    <section className="hero">
      <div className='left-section'>
        <img className='avatar' src='./WhatsApp Image 2025-06-19 at 2.22.51 AM.jpeg'/>
        <h6>Hello I'm</h6>
        <h4>Hala Mohammed</h4>
        <h1>Frontend React Developer</h1>
        <p>I'm a passionate front-end developer with a strong foundation in HTML, CSS, and JavaScript. I enjoy creating clean, responsive,
        and user-friendly websites. Currently, I'm improving my skills in React and building real-world projects to expand my portfolio. I'm highly motivated,
        always eager to learn, and looking forward to opportunities where I can grow and contribute to creative development teams.</p>
        <div className='all-icons'>
          <span className='icon-twitter'></span>
          <span className='icon-instagram'></span>
          <span className='icon-github'></span>
          <span className='icon-linkedin'></span>
        </div>
      </div>
    </section>
  )
}




export default Hero;