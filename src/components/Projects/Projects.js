import './Projects.scss'
import ProjectItems from './ProjectItems'
import { Modal } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';


export default function Projects() {



  return (
    <section id="projects">
    <h3 className='projects__title'>Projects</h3>
        <div className='projects__container'>
            {ProjectItems.map((item) => {
                 return (
            <div className='projects__item'>
                <div className='projects__item-image'>
                    <img key={item.id} className='image' src={item.src} alt={item.title}/>
                    <div className='projects__image-overlay'>
                        <p className='projects__description'>{item.description}</p>
                    </div>
                </div>
                    <h3 className='projects__item__title'>{item.title}</h3>
                    <a href={item.github} className='button projects__btn' target='_blank'>Github</a>
                    <a   className='button projects__btn' >Demo</a>
                    <Modal show={false} >
                        <Modal.Header>{item.title}</Modal.Header>
                        <Modal.Body></Modal.Body>
                        <Modal.Footer><button >Close</button></Modal.Footer>
                    </Modal>
            </div>)} )}
        </div>
    </section>
    )
}

 
       