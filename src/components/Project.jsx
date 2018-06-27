import React from 'react'
import injectSheet from 'react-jss'

const styles = {}

const Project = ({ imageSrc, alt, description }) => (
  <div>
    <img src={imageSrc} alt={alt} />
    <p>{description}</p>
  </div>
)

export default injectSheet(styles)(Project)
