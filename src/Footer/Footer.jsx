import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import './Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className='footer1'>
                <h3>© Patricio Pereyra Gargiulo</h3>
                <p>2022</p>
            </div>
            <div className='footer2'>
                <p id='techs'>Technologies used:</p>
                <p>JS - CSS - ReactJS - React Table - Formik - MongoDB - Mongoose - NodeJS</p>
                <div className='redes'>
                    <div className='git'>
                        <p>You can view the code right here: </p>
                        <a href='https://github.com/Patriciopg02/Register-lemon' target='_blank'>
                            <img src={github} className='items' id='githubpng' alt='github'/>
                        </a>
                    </div>

                    <div className='linkd'>
                        <p>Let's connect!</p>
                        <a href='https://www.linkedin.com/in/patricio-pereyra-gargiulo-701617245/' target='_blank'>
                            <img src={linkedin} className='items' id='linkedinpng' alt='linkedin'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}