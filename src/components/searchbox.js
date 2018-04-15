import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { colors } from '../color-palette'

const SearchBox = styled.input`
  background-color: ${colors.GrayDark};
  padding: 10px 20px;
  min-width: 250px;
  border-radius: 6px;
  border: none;
  color: ${colors.Lightgray};
  text-align: center;
  text-decoration: none;

  :hover {
    background-color: red;
  }
`
export default SearchBox