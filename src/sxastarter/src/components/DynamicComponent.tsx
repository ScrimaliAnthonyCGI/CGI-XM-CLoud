/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container, Button } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './DynamicComponent.module.css'

const DynamicComponent = (props) => {
  return (
    <Container
      className={` ${styles['container']} ${styles[props.rootClassName]} ${props.params?.styles} `}
    >
      <Button text={props.fields.text} className={'button-default'} />
    </Container>
  )
}

DynamicComponent.defaultProps = {
  fields: {
    text: 'Button',
  },
  rootClassName: '',
  rendering: {},
}

DynamicComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default withDatasourceCheck()(DynamicComponent)
