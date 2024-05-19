import homeIllustration from '../assets/home.svg'

// CSS
import '../App.css'

function Home() {
  return (
    <div className="homeDiv">
      <div className="Text">
        <p>Hi! This is</p>
        <h1>Patrizio Milione</h1>
        <h4>Self-taught</h4>
        <h2>Web Developer</h2>
        <h2>Software Developer</h2>
        <p>Welcome to my portfolio!</p>
      </div>
      <img src={homeIllustration} alt="homeSVG" />
    </div>
  )
}

export default Home
