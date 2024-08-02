/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './BoutonConnexion.module.css'

const BoutonConnexion = (props) => {
  return (
    <Container
      className={` ${styles['bouton-connexion']} ${styles[props.rootClassName]} ${props.params?.styles} `}
    />
  )
}

BoutonConnexion.defaultProps = {
  fields: {},
  rootClassName: '',
  rendering: {},
}

BoutonConnexion.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default BoutonConnexion
