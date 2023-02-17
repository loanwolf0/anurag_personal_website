import './ProjectHomeData.css'
import '../ProjectsCard/ProjectsCard.css'
import React from 'react'
import Project from '../Project/Project'
import projectData from '../../data/projectData'
import pHData from '../../data/pHomeData'


const ProjectHomeData = ({title}) => {
  const pDataReverse = projectData;
  
  return (
    <div className="projects-container">
        <h1>{title}</h1>

        <div className='projects'>
                {
                pHData.map((prjct) => {
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

export default ProjectHomeData