import React from 'react'
import  styled from 'styled-components'
import SideUtilityBar from './components/sideUtlityBar/SideUtilityBar'
import ExpandedUtilityBar from './components/expandedUtilityBar/ExpandedUtilityBar'
import CodeEditior from './components/codeEditor/CodeEditior'

const Test = styled.div`
  border: 1px red solid;
  display: flex;
`;

export default function MainViewport() {
  return (
    <Test>
      MainViewport
      <SideUtilityBar/>
      <ExpandedUtilityBar/>
      <CodeEditior/>
    </Test>
  )
}
