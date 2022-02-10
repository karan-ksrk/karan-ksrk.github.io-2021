import React from 'react'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {


    const project_data = [
        { 'img_url': 'https://random.imagecdn.app/500/150', 'category': 'web' },
        { 'img_url': 'https://random.imagecdn.app/500/110', 'category': 'web' },
        { 'img_url': 'https://random.imagecdn.app/500/120', 'category': 'mobile' },
        { 'img_url': 'https://random.imagecdn.app/500/130', 'category': 'mobile' },
        { 'img_url': 'https://random.imagecdn.app/500/140', 'category': 'images' },
        { 'img_url': 'https://random.imagecdn.app/500/160', 'category': 'design' },
        { 'img_url': 'https://random.imagecdn.app/500/170', 'category': 'videos' },
        { 'img_url': 'https://random.imagecdn.app/500/180', 'category': 'mobile' },
        { 'img_url': 'https://random.imagecdn.app/500/190', 'category': 'web' },
        { 'img_url': 'https://random.imagecdn.app/500/200', 'category': 'mobile' },
        { 'img_url': 'https://random.imagecdn.app/500/210', 'category': 'design' },


    ]
    const [projects, setProjects] = useState([]);
    const [activeFilter, setActiveFilter] = useState('all');

    useEffect(() => {
        setProjects(project_data);
        console.log(projects);
    }, []);



    return (
        <motion.div className="project-container">
            <div className="heading">
                <h2><span>P</span>rojects</h2>
            </div>
            <div className="filter-container">
                <button onClick={() => {
                    setActiveFilter('all');
                }} className={activeFilter === "all" ? "filter-item filter-active" : "filter-item"}>All</button>
                <button onClick={() => {
                    setActiveFilter('web');
                }} className={activeFilter === "web" ? "filter-item filter-active" : "filter-item"}>web</button>
                <button onClick={() => {
                    setActiveFilter('mobile');
                }} className={activeFilter === "mobile" ? "filter-item filter-active" : "filter-item"}>mobile</button>
                <button onClick={() => {
                    setActiveFilter('design');
                }} className={activeFilter === "design" ? "filter-item filter-active" : "filter-item"}>design</button>
                <button onClick={() => {
                    setActiveFilter('images');
                }} className={activeFilter === "images" ? "filter-item filter-active" : "filter-item"}>images</button>
                <button onClick={() => {
                    setActiveFilter('videos');
                }} className={activeFilter === "videos" ? "filter-item filter-active" : "filter-item"}>videos</button>
            </div>
            <AnimatePresence>
                <div className="project-items">
                    {
                        projects.map((project, index) => {

                            if (activeFilter === 'all' || project.category === activeFilter) {
                                return <motion.div
                                    layout
                                    animate={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    exit={{ opacity: 0 }} key={index}>
                                    <div className="project-item">
                                        <img src={project.img_url} alt="" />
                                    </div>
                                </motion.div>
                            }

                        })

                    }

                </div>
            </AnimatePresence>
        </motion.div >

    )
}

export default Projects