import React from 'react'
import { BranchSideContainer } from './styles/branchStyles'
import BranchToolBar from './components/TopToolBar'
import CommitInput from './components/CommitInput'
import ChangedSection from './components/ChangedSection'

export default function Branch(props) {
  return (
    <BranchSideContainer active={props.active}>
     <BranchToolBar/>
     <CommitInput/>
     <ChangedSection/>
    </BranchSideContainer>
  )
}
