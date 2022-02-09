import React from 'react'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


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
        <motion.div
            className="skill-container">
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

            <AnimatePresence>
                <div className="skill-items">
                    {/* {
                    skills_data.map((skill, index) => {
                        return (
                            <div className={activeFilter === skill.category ? "skill-item active-skill-item" : activeFilter === "all" ? "skill-item active-skill-item" : "skill-item"} key={index}>
                                <div className="skill-name">{skill.name}</div>
                            </div>
                        )
                    })
                } */

                        skills_data.map((skill, index) => {


                            if ((activeFilter === skill.category)) {
                                return (

                                    <motion.div
                                        layout
                                        animate={{ opacity: 1 }}
                                        initial={{ opacity: 0 }}
                                        exit={{ opacity: 0 }} className="skill-item" key={index}>
                                        <div className="skill-name"> {skill.name}</div>
                                    </motion.div>
                                )
                            }
                            else if (activeFilter === "all") {
                                return (
                                    <motion.div className="skill-item" key={index}>
                                        <div className="skill-name"> {skill.name}</div>
                                    </motion.div>
                                )
                            }
                        }
                        )
                    }


                </div>
            </AnimatePresence>
        </motion.div >
    )
}

export default Skills