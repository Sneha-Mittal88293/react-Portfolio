import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray =['n','e','h','a',' ','M','i','t','t','a','l']
    const jobArray=['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']

    useEffect(() =>{
        return setTimeout(() =>{
            setLetterClass('text-animate-hover')
        },4000)
    },[])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span> 
                <span className={`${letterClass} _8`}>i,</span>
                <br/>
                <span className={`${letterClass} _9`}>I</span>
                <span className={`${letterClass} _10`}>'m</span>
                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={11}/>
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}/>
                </h1>
                <h2>Frontend Developer / Java</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home