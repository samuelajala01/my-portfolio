import "../styles/AboutSection.css";
import TextSphere2 from './TextSphere2'

const AboutSection2 = () => {

    return (
        <section id="about">
            <h2>more about me</h2>
            <div className="info">

                <div className="info-text">
                    <p>
                        I'm currently studying Computer Engineering at the Lagos State
                        University. I've explored different tech domains
                    </p>
                </div>
                <div className="info-text-2">
                    <TextSphere2 />
                </div>

            </div>
        </section>
    );
};

export default AboutSection2;





