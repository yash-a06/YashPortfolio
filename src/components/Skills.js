import meter1 from "../assets/img/HTML.png";
import meter2 from "../assets/img/CSS.png";
import meter3 from "../assets/img/js.png";
import meter4 from "../assets/img/python.png";
import meter5 from "../assets/img/c.png";
import meter6 from "../assets/img/java.png";
import meter7 from "../assets/img/django.png";
import meter8 from "../assets/img/git.png";
import meter9 from "../assets/img/NodeJs.svg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills and Competences</h2>
                        <p>----------------------------------------------------</p>

                        <p><big>Languages....</big></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>Python</h5>
                                <p class="result">(Adanced)</p>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>C</h5>
                                <p class="result">(Intermediate)</p>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>JAVA</h5>
                                <p class="result">(Intermediate)</p>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>HTML</h5>
                                <p class="result">(Adanced)</p>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>CSS</h5>
                                <p class="result">(Adanced)</p>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>JavaScript</h5>
                                <p class="result">(Intermediate)</p>
                            </div>
                        </Carousel>
                        <p><big>Frameworks and Libraries...</big></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>Django</h5>
                                <p class="result">(Advanced)</p>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>Git</h5>
                                <p class="result">(Adanced)</p>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="Image" />
                                <h5>Nodejs</h5>
                                <p class="result">(Adanced)</p>
                            </div>
                        </Carousel>


                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
