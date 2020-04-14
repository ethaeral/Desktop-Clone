import React from 'react'
import SideUtilityBar from './components/sideUtlityBar/SideUtilityBar'
import ExpandedUtilityBar from './components/expandedUtilityBar/ExpandedUtilityBar'
import CodeEditior from './components/codeEditor/CodeEditior'

export default function MainViewport() {
  return (
    <div>
      <SideUtilityBar/>
      <ExpandedUtilityBar/>
      <CodeEditior/>
    </div>
  )
}
