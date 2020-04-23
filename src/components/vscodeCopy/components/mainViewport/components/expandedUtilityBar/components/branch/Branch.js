import React from 'react'
import { BranchSideContainer } from './styles/branchStyles'

export default function Branch(props) {
  return (
    <BranchSideContainer active={props.active}>
      Branch
    </BranchSideContainer>
  )
}
