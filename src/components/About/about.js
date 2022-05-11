import './about.scss';
import pic from '../../assets/images/me2.JPG';
export default function About() {
    return (
        <section id="about">
            <h1 className='about__title'>About Me</h1>
            <img className='about__image' src={pic} alt="me"/>
            <p className='about__bio'>Hello,my name is Cesar Feliciano a recent gradute of Brainstation's 
            Full-Stack Web Development Bootcamp (April 2022). I have a background 
            in Hospitality Management and Finance. With the recent changes coronavirus 
            has brought us, i was able to explore a fasination I didnt think 
            I'd have. My passion for learning and solving problems was amplified,
            which has led me to the path of becoming a web developer. 
            </p>
            <h3>Hobbies and interest</h3>
            <p>On my spare time i like to watch videos to better sharpen my tools. I also
            like to explore innovative crypto projects than can have a positive impact 
            on the space. Tech and crypto are a passion of mine.
            </p>
        </section>
    )
}