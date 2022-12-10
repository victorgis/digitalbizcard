import React from 'react'
import ReactDOM from 'react-dom'

export default function App() {
    return (
        <div className='app'>
            <div className='container'>
                <img src="./vicman.png" className='img-fluid'></img>
                <div className='others'>
                    <h1 className='name'>Victor Essang</h1>
                    <p className='profession'>Frontend Developer</p>
                    <a href='https://www.veespatial.space'><p className='website'>veespatial.space</p></a>
                    <div className='padded'>
                        <div className='row flex'>
                            <div className='col-6 flex-item'>
                                <a href="mailto:essangvictor@gmail.com"><img src='./linkedin.svg'></img></a>
                            </div>
                            <div className='col-6 flex-item'>
                                <a href='https://www.linkedin.com/in/victoressang'><img src='./email.svg'></img></a>
                            </div>
                        </div>
                        <div className='otherText1'>
                            <h1>About</h1>
                            <p className='para'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                        </div>
                        <div className='otherText2'>
                            <h1>Interests</h1>
                            <p className='para'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                        </div>
                        
                    </div>
                </div>
                <div className='footer'>
                    <ul className='icons'>
                        <li><a href='https://www.facebook.com/victa.essang'><img src='./Facebook Icon.svg'></img></a></li>
                        <li><a href='https://www.github.com/victorgis'><img src='./GitHub Icon.svg'></img></a></li>
                        <li><img src='./Instagram Icon.svg'></img></li>
                        <li><a href='https://www.twitter.com'><img src='./Twitter Icon.svg'></img></a></li>
                    </ul>
                </div>
                
            </div>
        </div>
        
            

    )
}