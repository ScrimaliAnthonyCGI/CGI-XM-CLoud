/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewAiComponent1.module.css'

const NewAiComponent1 = (props) => {
  return (
    <Container
      className={` ${styles['new-ai-component-1']} ${styles[props.rootClassName]} ${props.params?.styles} `}
    >
      <Container>
        <Container tag="button" className={styles['container1']}>
          <Text
            text={props.fields.text}
            tag="text"
            className={styles['text']}
          />
        </Container>
      </Container>
    </Container>
  )
}

NewAiComponent1.defaultProps = {
  fields: {
    text: 'Click me',
  },
  rootClassName: '',
  rendering: {},
}

NewAiComponent1.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default withDatasourceCheck()(NewAiComponent1)
