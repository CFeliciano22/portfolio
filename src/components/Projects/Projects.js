import './Projects.scss'
import Tipsy from '../../assets/images/Tipsy.png'
 
export default function Projects() {
  return (
    <section className="projects">
        <h2 className='projects__title'>Projects</h2>
        <div className='projects__container'>
            <div className='projects__item'>
                <div className='project__item-image'>
                    <img className='image' src={Tipsy} alt='Tipsy'/>
                </div>
                <h3 className='projects__item__title'>Tipsy</h3>
                <a href='https://github.com' className='btn projects__btn' target='_blank'>Github</a>
                <a href='' className='btn projects__btn' target='_blank'>Website</a>
            </div>
        </div>
    </section>
    )
}

 
       