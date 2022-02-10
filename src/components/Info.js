import React from 'react';
import '../index.css';
import ProfilePic from '../images/pp.png'

export default function Info(){
    return (
            <img src={ProfilePic} className="dp" alt="profile-pic" />
    );
}