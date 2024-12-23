import React from 'react';
import Jeremy from './jerm.png';
import zoom from './jerm-zoom.png';
import './animate.css';


export default function Zoomin(){
    return (
        <div  className=''>
            // eslint-disable-next-line
            <img src={Jeremy} height='400px'className='jeremy'alt="Description of image"/>
            // eslint-disable-next-line
            <img src={zoom} height='550px' className='zoom'alt="Description of image"/>

        </div> 
    )
}
