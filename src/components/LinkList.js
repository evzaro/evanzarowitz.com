import React, { PureComponent } from 'react';

import styled from 'styled-components';

const ListContainer = styled.ul `
  padding: 1rem 2rem 0 1rem;
  list-style: none;
  @media (max-width: 700px) {
    padding: 0 1.5rem 0 1rem;
    min-width: 0;
  }
`
const ListItem = styled.li `
  display: inline-block;
  margin-right: 1.5rem;
  color: #191919;
  cursor: pointer;

  @media (max-width: 700px) {
    display: block;
    margin: 1rem 0;
  }

  &:hover {
    color: #6B6B6B;
  }

  &::before {
    font-size: 1.25rem;
    margin-right: 0.5rem;
  }

  transition: color 300ms;

`

class LinkList extends PureComponent {

  render() {
    return (
      <ListContainer>
        <a href='https://www.linkedin.com/in/evanzarowitz/' target="_blank">
          <ListItem className='icon-linkedin'>
            <p>LinkedIn</p>
          </ListItem>
        </a>
        <a href='https://github.com/evzaro' target="_blank">
          <ListItem className='icon-github'>
            <p>GitHub</p>
          </ListItem>
        </a>
        <a href='mailto:evzaro@gmail.com'>
          <ListItem className='icon-envelop'>
            <p>evzaro@gmail.com</p>
          </ListItem>
        </a>
      </ListContainer>
    )
  }
}

export default LinkList
