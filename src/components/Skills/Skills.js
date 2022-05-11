import './Skills.scss';
import imageItems from '../imageItems';

export default function Skills() {
    return (
        <section id="skills">
            <h1 className='skills__title'>Skills</h1>
            <div className="skills__container">
            {imageItems.map((item) => {
                return (
                    <img key={item.id} className={item.className} height={item.height} src={item.src} alt='tech' />
                )
            }
            )}
          </div>
          
        </section>
    )
}