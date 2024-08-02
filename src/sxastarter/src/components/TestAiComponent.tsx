/* eslint-disable */
// @ts-nocheck 
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';

import React from 'react'
import { Container, Text, Image } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './TestAiComponent.module.css'

const TestAiComponent = (props) => {
  return (
    <Container
      className={` ${styles['test-ai-component']} ${styles[props.rootClassName]} ${props.params?.styles} `}
    >
      <Container>
        <Container className={styles['container01']}>
          <Container>
            <Container tag="button" className={styles['container03']}>
              <Text text={props.fields.text} tag="text" />
            </Container>
            <Container tag="button" className={styles['container04']}>
              <Text text={props.fields.text1} tag="text" />
            </Container>
          </Container>
          <Container>
            <Text
              text={props.fields.text2}
              tag="text"
              className={styles['text02']}
            />
            <Text
              text={props.fields.text3}
              tag="text"
              className={styles['text03']}
            />
            <Text
              text={props.fields.text4}
              tag="text"
              className={styles['text04']}
            />
          </Container>
        </Container>
        <Container className={styles['container06']}>
          <Image className={styles['image']} />
          <Container>
            <Text
              text={props.fields.text5}
              tag="text"
              className={styles['text05']}
            />
            <Text
              text={props.fields.text6}
              tag="text"
              className={styles['text06']}
            />
            <Image className={styles['image1']} />
            <Text
              text={props.fields.text7}
              tag="text"
              className={styles['text07']}
            />
            <Text
              text={props.fields.text8}
              tag="text"
              className={styles['text08']}
            />
            <Container className={styles['container08']}>
              <Text
                text={props.fields.text9}
                tag="text"
                className={styles['text09']}
              />
            </Container>
            <Text
              text={props.fields.text10}
              tag="text"
              className={styles['text10']}
            />
          </Container>
          <Container className={styles['container09']}>
            <Container tag="button" className={styles['container10']}>
              <Text text={props.fields.text11} tag="text" />
            </Container>
            <Container tag="button" className={styles['container11']}>
              <Text text={props.fields.text12} tag="text" />
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

TestAiComponent.defaultProps = {
  fields: {
    text: 'Share on Facebook',
    text1: 'Share on Twitter',
    text2: 'Blog Post Title',
    text3: 'by Author Name',
    text4: 'Published on Date',
    text5: 'Heading 1',
    text6:
      'This is a paragraph of the blog content. It provides detailed information about the topic discussed in the blog post.',
    text7: 'Heading 2',
    text8:
      'Another paragraph of the blog content. It continues to provide insights and valuable information to the readers.',
    text9:
      'This is a blockquote. It highlights a significant point or a quote from the blog content.',
    text10:
      'Final paragraph of the blog content. It wraps up the discussion and provides a conclusion or a call to action.',
    text11: 'Share on Facebook',
    text12: 'Share on Twitter',
  },
  rootClassName: '',
  rendering: {},
}

TestAiComponent.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default withDatasourceCheck()(TestAiComponent)
