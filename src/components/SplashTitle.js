import React, { PureComponent } from 'react';

import styled from 'styled-components';

const HeaderContainer = styled.div `
  min-width: 610px;
  padding: 1rem;
  @media (max-width: 700px) {
    min-width: 0;
    h1 {
      font-size: 1.5rem;
    }
  }
`
const FadingHeader = styled.h1 `
  font-weight: 400;
  opacity:  ${props => props.show ? 1 : 0};
  transition: opacity 375ms ease-out;
  @media (max-width: 700px) {
    display: block;
    margin: 0.1em 0;
  }
`
class SplashTitle extends PureComponent {

  state = {
    techStack: [
      'JavaScript',
      'React.js',
      'Redux',
      'CSS3',
      'HTML5',
      'Ruby on Rails'
    ],
    currentIdx: 0,
    showHeader: true,
  }

  componentDidMount = () => {
    this.textInterval = setInterval(this.cycleTechStack, 2200)
  }

  componentWillUnmount = () => {
    clearTimeout(this.animationTimer)
    clearInterval(this.textInterval)
  }

  cycleTechStack = () => {
    this.hideHeader() //350 ms transition
    clearTimeout(this.animationTimer)
    this.animationTimer = setTimeout( () => {
      this.changeText()
      this.showHeader()
    }, 500)
  }

  changeText = () => {
    const { currentIdx, techStack } = this.state
    this.setState({
      currentIdx: currentIdx === techStack.length - 1 ? 0 : currentIdx + 1,
    })
  }

  showHeader = () => this.setState({ showHeader: true })

  hideHeader = () => this.setState({ showHeader: false })


  render() {
    const { techStack, currentIdx, showHeader } = this.state
    return (
      <HeaderContainer>
        <h1>Hey, I’m Evan, <br/> a developer specializing in </h1>
        <FadingHeader show={showHeader}>
          {techStack[currentIdx]}
        </FadingHeader>
      </HeaderContainer>
    )
  }
}

export default SplashTitle
