import React from 'react'
import { ExtSideContainer } from './styles/extStyle'

export default function Ext(props) {
  return (
    <ExtSideContainer active={props.active}>
      Ext
    </ExtSideContainer>
  )
}
