import './about.scss';
import pic from '../../assets/images/me2.JPG';
export default function About() {
    return (
        <section id="about">
            <h1 className='about__title'>About Me</h1>
            <div className='about__container'>
            <img className='about__image' src={pic} alt="me"/>
            <p className='about__bio'>Hello, my name is Cesar Feliciano a recent gradute of Brainstation's 
            Full-Stack Web Development Bootcamp (April 2022). I have a background 
            in Hospitality Management and Finance. With the recent changes coronavirus 
            has brought us, I was able to explore a fasination I didnt think 
            I'd have. My passion for learning and solving problems was amplified,
            which has led me to the path of becoming a web developer.

            <h3 className='about__hobbies'>Hobbies and interests</h3>

            On my spare time I like to watch videos to better sharpen my tools. I also
            like to explore innovative crypto projects than can have a positive impact 
            on the space. Tech and crypto are a passion of mine.
            </p>
            </div>
           
        </section>
    )
}