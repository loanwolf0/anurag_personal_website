import React from 'react'
import projectData from '../../data/projectData'
import Project from '../Project/Project'
import './ProjectsCard.css'



const ProjectsCard = () => {

  return (
    <div className="projects-container">
        <h1>All Projects <span>({projectData.length - 2 }+)</span> </h1>

        <div className='projects'>
                {
                projectData.reverse().map((prjct) => {
                    return(
                    <Project
                        key={prjct.id}
                        id= {prjct.id}
                        imgL={prjct.imgL}
                        pName={prjct.pName}
                        disc={prjct.disc}
                        view={prjct.view}
                        source={prjct.source}
                    />
                    )
                })

                }
        </div>
    </div>
  )
}

export default ProjectsCard