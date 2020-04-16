import React from 'react'

import CodeDisplay from'./components/codeDisplay/CodeDisplay'
import VisualPreview from'./components/visualPreview/VisualPreview'
import { CodeStyles } from './styles/codeBoxStyles'



export default function CodeBox() {
  return (
    <CodeStyles>
      <CodeDisplay/>
      <VisualPreview/>
    </CodeStyles>
  )
}
