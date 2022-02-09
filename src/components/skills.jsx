import React from 'react'
import { useState, useEffect } from 'react';

const Skills = () => {
    const skills_data = [
        { 'name': 'Python', 'category': 'language' },
        { 'name': 'C', 'category': 'language' },
        { 'name': 'C++', 'category': 'language' },
        { 'name': 'Java', 'category': 'language' },
        { 'name': 'Javascript', 'category': 'language' },
        { 'name': 'HTML5', 'category': 'frontend' },
        { 'name': 'CSS', 'category': 'frontend' },
        { 'name': 'Django', 'category': 'backend' },
        { 'name': 'React', 'category': 'frontend' },
        { 'name': 'Rest API', 'category': 'backend' },
        { 'name': 'Processing', 'category': 'tool' },


    ]
    const [skils, setSkills] = useState([]);
    const [activeFilter, setActiveFilter] = useState('all');
    return (
        <div className="skill-container">
            <div className="heading">
                <h2><span>S</span>kills</h2>
            </div>
            <div className="skill-filter-container">
                <button onClick={() => {
                    setActiveFilter('all');
                }} className={activeFilter === "all" ? "filter-item filter-active" : "filter-item"}>All</button>
                <button onClick={() => {
                    setActiveFilter('language');
                }} className={activeFilter === "language" ? "filter-item filter-active" : "filter-item"}>languages</button>
                <button onClick={() => {
                    setActiveFilter('backend');
                }} className={activeFilter === "backend" ? "filter-item filter-active" : "filter-item"}>backend</button>
                <button onClick={() => {
                    setActiveFilter('frontend');
                }} className={activeFilter === "frontend" ? "filter-item filter-active" : "filter-item"}>frontend</button>
                <button onClick={() => {
                    setActiveFilter('tool');
                }} className={activeFilter === "tool" ? "filter-item filter-active" : "filter-item"}>tools</button>
            </div >
            <div className="skill-items">
                {
                    skills_data.map((skill, index) => {
                        return (
                            <div className={activeFilter === skill.category ? "skill-item active-skill-item" : activeFilter === "all" ? "skill-item active-skill-item" : "skill-item"} key={index}>
                                <div className="skill-name">{skill.name}</div>
                            </div>
                        )
                    })
                }

            </div>
        </div >
    )
}

export default Skills