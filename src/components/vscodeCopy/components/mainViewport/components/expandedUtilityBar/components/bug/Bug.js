import React from 'react'
import { BugSideContainer } from './styles/bugStyles'

export default function Bug(props) {
  return (
    <BugSideContainer active={props.active}>
      Bug
    </BugSideContainer>
  )
}
