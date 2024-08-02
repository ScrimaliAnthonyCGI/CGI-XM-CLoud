/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './NewAiComponent.module.css'

const NewAiComponent = (props) => {
  return (
    <Container className={` ${styles['main']} ${styles[props.rootClassName]} ${props.params?.styles} `}>
      <Container className={styles['container']}>
        <Container className={styles['container1']}>
          <Text
            text={props.fields.text}
            tag="text"
            className={styles['text']}
          />
          <Text
            text={props.fields.text1}
            tag="text"
            className={styles['text1']}
          />
          <Container tag="button" className={styles['container2']}>
            <Text
              text={props.fields.text2}
              tag="text"
              className={styles['text2']}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

NewAiComponent.defaultProps = {
  fields: {
    text: 'Revolutionize Your Workflow with AI',
    text1: 'Our AI tools automate and optimize your business processes.',
    text2: 'Get Started',
  },
  rootClassName: '',
  rendering: {},
}

NewAiComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default NewAiComponent
