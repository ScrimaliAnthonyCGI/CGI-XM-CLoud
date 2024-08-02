/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container, Text, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './TitleAndText.module.css'

const Hero = (props) => {
  return (
    <Container className={` ${styles['main']} ${styles[props.rootClassName]} ${props.params?.styles} `}>
      <Container className={styles['texte']}>
        <Container className={styles['texte1']}>
          <Text text={props.fields.Title} className={styles['text']} />
          <Text text={props.fields.Text} className={styles['text1']} />
          <Text
            text="From $29.12/mo. or $699 before trade-in."
            className={styles['text2']}
          />
          <Text
            text="Buy directly from Apple with special carrier offers."
            className={styles['text3']}
          />
        </Container>
        <Container className={styles['cta']}>
          <Container className={styles['link']}>
            <Text text="Learn more" className={styles['text4']} />
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTcnIGhlaWdodD0nMTYnIHZpZXdCb3g9JzAgMCAxNyAxNicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTUuNzUgMTIuNkw5Ljc1IDguNkw1Ljc1IDQuNkw2LjU1IDNMMTIuMTUgOC42TDYuNTUgMTQuMkw1Ljc1IDEyLjZaJyBmaWxsPScjMjk2OEM1Jy8+Cjwvc3ZnPgo="
              alt="dashiconsarrowrightalt2146"
              className={styles['dashiconsarrowrightalt-2']}
            />
          </Container>
          <Container className={styles['link1']}>
            <Text text="Buy" className={styles['text5']} />
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTcnIGhlaWdodD0nMTYnIHZpZXdCb3g9JzAgMCAxNyAxNicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTUuMjUgMTIuNkw5LjI1IDguNkw1LjI1IDQuNkw2LjA1IDNMMTEuNjUgOC42TDYuMDUgMTQuMkw1LjI1IDEyLjZaJyBmaWxsPScjMjk2OEM1Jy8+Cjwvc3ZnPgo="
              alt="dashiconsarrowrightalt2149"
              className={styles['dashiconsarrowrightalt-21']}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

Hero.defaultProps = {
  fields: {
    Title:
      'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
    Text: 'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late.',
  },
  rootClassName: '',
  rendering: {},
}

Hero.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default withDatasourceCheck()(Hero)
