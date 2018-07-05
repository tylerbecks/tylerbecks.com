import React from 'react'
import injectSheet from 'react-jss'

const externalLinksStyles = {
  externalLinkIcon: {
    fontSize: '.8rem',
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
        onMouseEnter={this.showIcon}
        onMouseLeave={this.hideIcon}
      >
        {this.props.text}
        {this.state.hovered && (
          <span
            className={`oi oi-external-link ${
              this.props.classes.externalLinkIcon
            }`}
          />
        )}
      </a>
    )
  }
}

export default injectSheet(externalLinksStyles)(ExternalLink)
