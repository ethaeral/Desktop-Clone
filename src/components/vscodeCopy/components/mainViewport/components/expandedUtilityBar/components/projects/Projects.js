import React from 'react'
import { ProjectsSideContainer } from './styles/projectsStyles'

export default function Projects(props) {
  return (
    <ProjectsSideContainer active={props.active}>
      Project
    </ProjectsSideContainer>
  )
}
