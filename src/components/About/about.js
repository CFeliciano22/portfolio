import './about.scss';
import pic from '../../assets/images/me2.JPG';
export default function About() {
    return (
        <section id="about">
            <h1 className='about__title'>About Me</h1>
            <div className='about__container'>
            <img className='about__image' src={pic} alt="me"/>
            <p className='about__bio'>Hello, my name is Cesar Feliciano and im a recent gradute of Brainstation's 
            Full-Stack Web Development Bootcamp (April 2022). I have a background 
            in Hospitality Management and Finance. With the recent changes coronavirus 
            has brought us, I was able to explore a fascination I didnt think 
            I'd have. My passion for learning and solving problems was amplified,
            and has led me on the path of becoming a web developer. I am driven by
            my passion and curiousity for tech, so in my free time I like to watch
            insightful videos to sharpen my skills. I also enjoy exploring innovative 
            crypto projects that can have a positive impact not only in the finance world but 
            also the tech industry. I look forward to growing as a developer and contributing 
            to this thriving ecosystem.

            </p>
            </div>
           
        </section>
    )
}