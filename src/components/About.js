import React from 'react';
import '../index.css';

export default function About(){
    return (
        <main>
            <section className="info">
                <h1 className="name">Faysal Mahmud</h1>
                <h4 className="title">Frontend Developer</h4>
                <small><p className="website">faysalmahmud.website</p></small>
                <div className="contactBtn">
                    <button className="emailBtn">Email</button>
                    <button className="linkedinBtn">LinkedIn</button>
                </div>
            </section>

            <div className="about">
                <h2>About</h2>
                <p className="description">
                I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                </p>
            </div>
            <div className="interests">
                <h2>Interests</h2>
                <p className="description">
                Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </p>
            </div>
        </main>
    );
}