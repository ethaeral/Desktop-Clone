import React from 'react'
import { SearchSideContainer } from './styles/searchStyles'

export default function Search(props) {
  return (
    <SearchSideContainer active={props.active}>
      Search
    </SearchSideContainer>
  )
}
