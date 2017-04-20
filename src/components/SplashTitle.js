import React, { PureComponent } from 'react';

import styled from 'styled-components';

const FadingHeader = styled.h1 `
  font-weight: 400;
  opacity:  ${props => props.show ? 1 : 0};
  transition: opacity 0.4s ease-in-out;
`

class SplashTitle extends PureComponent {

  state = {
    techStack: [
      'JavaScript.',
      'React.js.',
      'Redux.',
      'CSS3.',
      'HTML5.',
      'Ruby on Rails.'
    ],
    currentIdx: 0,
    showHeader: true,
  }


  componentDidMount = () => {
    setInterval(this.cycleTechStack, 2000)
  }

  componentWillUnmount = () => {

  }

  cycleTechStack = () => {
    this.hideHeader() //0.5 sec transition
    setTimeout( () => {
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

  showHeader = () => {
    this.setState({
      showHeader: true,
    })
  }

  hideHeader = () => {
    this.setState({
      showHeader: false,
    })
  }

  render() {
    const { techStack, currentIdx, showHeader } = this.state
    return (
      <div className='splash-title'>
        <h1>Hey, I’m Evan, <br/> a developer specializing in </h1>
        <FadingHeader show={showHeader}>
          {techStack[currentIdx]}
        </FadingHeader>
      </div>
    )
  }
}

export default SplashTitle
