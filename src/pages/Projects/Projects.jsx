import React from 'react'
import projectData from '../../data/projectData'
import Project from '../../components/Project/Project'
import './Projects.css'
import Hero from '../../components/Hero/Hero'
import ProjectsCard from '../../components/ProjectsCard/ProjectsCard'


const Projects = () => {
  return (

    <>
    
      <Hero
        cName='heroMid'
        img='https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        title='All Projects '
        typeClass='hide'
        btnClass='heroBtnHide'
      />
      <ProjectsCard/>

    </>

    
  )
}

export default Projects