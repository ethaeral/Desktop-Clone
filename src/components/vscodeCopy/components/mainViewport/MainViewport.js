import React from 'react'
import  styled from 'styled-components'
import SideUtilityBar from './components/sideUtlityBar/SideUtilityBar'
import ExpandedUtilityBar from './components/expandedUtilityBar/ExpandedUtilityBar'
import CodeEditior from './components/codeEditor/CodeEditior'

const Test = styled.div`

  display: flex;
  width: 100%;
  height: 100%;
`;

export default function MainViewport() {
  return (
    <Test>

      <SideUtilityBar/>
      <ExpandedUtilityBar/>
      <CodeEditior/>
    </Test>
  )
}
