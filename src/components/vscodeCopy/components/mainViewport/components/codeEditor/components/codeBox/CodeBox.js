import React from 'react'
import  styled from 'styled-components'

import CodeDisplay from'./components/codeDisplay/CodeDisplay'
import VisualPreview from'./components/visualPreview/VisualPreview'

const Test = styled.div`

  display: flex;
  height: 100%;
`;

export default function CodeBox() {
  return (
    <Test>
      <CodeDisplay/>
      <VisualPreview/>
    </Test>
  )
}
