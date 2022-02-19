import React from 'react'
import injectSheet from 'react-jss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const externalLinksStyles = {
  externalLinkIcon: {
    fontSize: '1rem',
    marginLeft: '.5rem',
  },
}

class ExternalLink extends React.Component {
  state = {
    hovered: false,
  }

  showIcon = () => this.setState({ hovered: true })
  hideIcon = () => this.setState({ hovered: false })

  render() {
    return (
      <a
        className={this.props.className}
        href={this.props.href}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={this.showIcon}
        onMouseLeave={this.hideIcon}
      >
        {this.props.text}
        {this.state.hovered && (
          <FontAwesomeIcon
            icon="external-link-alt"
            className={this.props.classes.externalLinkIcon}
          />
        )}
      </a>
    )
  }
}

export default injectSheet(externalLinksStyles)(ExternalLink)
