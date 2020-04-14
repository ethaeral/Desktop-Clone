import React from 'react'
import  styled from 'styled-components'

import CodeDisplay from'./components/codeDisplay/CodeDisplay'
import VisualPreview from'./components/visualPreview/VisualPreview'

const Test = styled.div`
  border: 1px red solid;
  display: flex;
`;

export default function CodeBox() {
  return (
    <Test>
      CodeBox
      <CodeDisplay/>
      <VisualPreview/>
    </Test>
  )
}
