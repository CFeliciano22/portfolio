import './Homepage.scss'
import resume from '../../assets/downloads/Cesar Feliciano Resume.pdf'
import me from '../../assets/images/memoji2.jpg'
export default function Homepage() {
    return (
        <>
            <section id='home'>
            <div className='homepage'>
            <h1 className='homepage__header'>Hi, im Cesar Feliciano</h1>
            <p className='homepage__para'>Full-Stack Web Developer</p>
            <div className='homepage__links'>
            <a href={resume} className="btn hompage__resume" download>Download CV</a>  
            <a href='#contact' className='btn homepage__connect'>Connect</a>
            </div>
            </div>
            <div className='homepage__image-container'>  
            <img className='homepage__image' src={me} alt='me'/>'  
            </div>
            </section>
            
        </>
    )
}