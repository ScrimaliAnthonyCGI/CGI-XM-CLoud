/* eslint-disable */
// @ts-nocheck
import React from 'react'
import { Container, Image, Text } from '@kajoo-ai/sitecore-nextjs'

import PropTypes from 'prop-types'

import styles from './Nav.module.css'

const Nav = (props) => {
  return (
    <Container className={` ${styles['main']} ${styles[props.rootClassName]} ${props.params?.styles} `}>
      <Container className={styles['nav']}>
        <Image
          src={props.fields.src}
          alt={props.fields.alt}
          className={styles['image']}
        />
        <Text text={props.fields.text} className={styles['text']} />
        <Text text={props.fields.text1} className={styles['text1']} />
        <Text text={props.fields.text2} className={styles['text2']} />
        <Text text={props.fields.text3} className={styles['text3']} />
        <Text text={props.fields.text4} className={styles['text4']} />
        <Text text={props.fields.text5} className={styles['text5']} />
        <Text text={props.fields.text6} className={styles['text6']} />
        <Container className={styles['icon']}>
          <Image
            src={props.fields.src1}
            alt={props.fields.alt1}
            className={styles['icon1']}
          />
          <Container className={styles['icon2']}>
            <Container className={styles['group']}>
              <Image
                src={props.fields.src2}
                alt={props.fields.alt2}
                className={styles['vector']}
              />
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

Nav.defaultProps = {
  fields: {
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTE3LjUxNzIgMTIuNTU1NUMxNy41MDc4IDEwLjk1NyAxOC4yMzIgOS43NTIzNCAxOS42OTQ1IDguODY0MDZDMTguODc2NiA3LjY5MjE5IDE3LjYzOTEgNy4wNDc2NiAxNi4wMDc4IDYuOTIzNDRDMTQuNDYzMyA2LjgwMTU2IDEyLjc3MzQgNy44MjM0NCAxMi4xNTQ3IDcuODIzNDRDMTEuNTAwOCA3LjgyMzQ0IDEwLjAwNTUgNi45NjU2MyA4LjgyODkxIDYuOTY1NjNDNi40MDA3OCA3LjAwMzEzIDMuODIwMzEgOC45MDE1NiAzLjgyMDMxIDEyLjc2NDFDMy44MjAzMSAxMy45MDU1IDQuMDI4OTEgMTUuMDg0NCA0LjQ0NjA5IDE2LjI5ODRDNS4wMDM5MSAxNy44OTY5IDcuMDE0ODQgMjEuODEzMyA5LjExMjUgMjEuNzVDMTAuMjA5NCAyMS43MjQyIDEwLjk4NTIgMjAuOTcxOSAxMi40MTI1IDIwLjk3MTlDMTMuNzk3NyAyMC45NzE5IDE0LjUxNDggMjEuNzUgMTUuNzM4MyAyMS43NUMxNy44NTQ3IDIxLjcxOTUgMTkuNjczNCAxOC4xNTk0IDIwLjIwMzEgMTYuNTU2M0MxNy4zNjQ4IDE1LjIxOCAxNy41MTcyIDEyLjYzNzUgMTcuNTE3MiAxMi41NTU1Wk0xNS4wNTM5IDUuNDA3MDNDMTYuMjQyMiAzLjk5NjA5IDE2LjEzNDQgMi43MTE3MiAxNi4wOTkyIDIuMjVDMTUuMDQ5MiAyLjMxMDk0IDEzLjgzNTIgMi45NjQ4NCAxMy4xNDM3IDMuNzY4NzVDMTIuMzgyIDQuNjMxMjUgMTEuOTM0NCA1LjY5NzY2IDEyLjAzMDUgNi45QzEzLjE2NDggNi45ODY3MiAxNC4yMDA4IDYuNDAzMTMgMTUuMDUzOSA1LjQwNzAzWicgZmlsbD0nI0Q0RDRENCcvPgo8L3N2Zz4K',
    alt: 'Image120',
    text: 'Mac',
    text1: 'iPad',
    text2: 'iPhone',
    text3: 'Watch',
    text4: 'TV',
    text5: 'Music',
    text6: 'Support',
    src1: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTIxLjMxODcgMjAuMDI3M0wxNS4yMzIgMTMuOTQwNkMxNi4xNzY2IDEyLjcxOTUgMTYuNjg3NSAxMS4yMjY2IDE2LjY4NzUgOS42NTYyNUMxNi42ODc1IDcuNzc2NTYgMTUuOTUzOSA2LjAxNDA2IDE0LjYyNzMgNC42ODUxNkMxMy4zMDA4IDMuMzU2MjUgMTEuNTMzNiAyLjYyNSA5LjY1NjI1IDIuNjI1QzcuNzc4OTEgMi42MjUgNi4wMTE3MiAzLjM1ODU5IDQuNjg1MTYgNC42ODUxNkMzLjM1NjI1IDYuMDExNzIgMi42MjUgNy43NzY1NiAyLjYyNSA5LjY1NjI1QzIuNjI1IDExLjUzMzYgMy4zNTg1OSAxMy4zMDA4IDQuNjg1MTYgMTQuNjI3M0M2LjAxMTcyIDE1Ljk1NjIgNy43NzY1NiAxNi42ODc1IDkuNjU2MjUgMTYuNjg3NUMxMS4yMjY2IDE2LjY4NzUgMTIuNzE3MiAxNi4xNzY2IDEzLjkzODMgMTUuMjM0NEwyMC4wMjUgMjEuMzE4N0MyMC4wNDI4IDIxLjMzNjYgMjAuMDY0IDIxLjM1MDggMjAuMDg3NCAyMS4zNjA0QzIwLjExMDcgMjEuMzcwMSAyMC4xMzU3IDIxLjM3NTEgMjAuMTYwOSAyMS4zNzUxQzIwLjE4NjIgMjEuMzc1MSAyMC4yMTEyIDIxLjM3MDEgMjAuMjM0NSAyMS4zNjA0QzIwLjI1NzggMjEuMzUwOCAyMC4yNzkgMjEuMzM2NiAyMC4yOTY5IDIxLjMxODdMMjEuMzE4NyAyMC4yOTkyQzIxLjMzNjYgMjAuMjgxNCAyMS4zNTA4IDIwLjI2MDIgMjEuMzYwNCAyMC4yMzY5QzIxLjM3MDEgMjAuMjEzNSAyMS4zNzUxIDIwLjE4ODUgMjEuMzc1MSAyMC4xNjMzQzIxLjM3NTEgMjAuMTM4IDIxLjM3MDEgMjAuMTEzIDIxLjM2MDQgMjAuMDg5N0MyMS4zNTA4IDIwLjA2NjQgMjEuMzM2NiAyMC4wNDUyIDIxLjMxODcgMjAuMDI3M1pNMTMuMzY4OCAxMy4zNjg4QzEyLjM3NSAxNC4zNjAyIDExLjA1NzggMTQuOTA2MiA5LjY1NjI1IDE0LjkwNjJDOC4yNTQ2OSAxNC45MDYyIDYuOTM3NSAxNC4zNjAyIDUuOTQzNzUgMTMuMzY4OEM0Ljk1MjM0IDEyLjM3NSA0LjQwNjI1IDExLjA1NzggNC40MDYyNSA5LjY1NjI1QzQuNDA2MjUgOC4yNTQ2OSA0Ljk1MjM0IDYuOTM1MTYgNS45NDM3NSA1Ljk0Mzc1QzYuOTM3NSA0Ljk1MjM0IDguMjU0NjkgNC40MDYyNSA5LjY1NjI1IDQuNDA2MjVDMTEuMDU3OCA0LjQwNjI1IDEyLjM3NzMgNC45NSAxMy4zNjg4IDUuOTQzNzVDMTQuMzYwMiA2LjkzNzUgMTQuOTA2MiA4LjI1NDY5IDE0LjkwNjIgOS42NTYyNUMxNC45MDYyIDExLjA1NzggMTQuMzYwMiAxMi4zNzczIDEzLjM2ODggMTMuMzY4OFonIGZpbGw9JyNENEQ0RDQnLz4KPC9zdmc+Cg==',
    alt1: 'icon122',
    src2: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTgnIGhlaWdodD0nMjInIHZpZXdCb3g9JzAgMCAxOCAyMicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz4KPHBhdGggZD0nTTQuNSA1Ljc1QzQuNSA1Ljc1IDQuNSAxLjI1IDkgMS4yNUMxMy41IDEuMjUgMTMuNSA1Ljc1IDEzLjUgNS43NU0xNy4yNSA2Ljc1VjE5Ljc1QzE3LjI1IDIwLjMwMjMgMTYuODAyMyAyMC43NSAxNi4yNSAyMC43NUgxLjc1QzEuMTk3NzIgMjAuNzUgMC43NSAyMC4zMDIzIDAuNzUgMTkuNzVWNi43NUMwLjc1IDYuMTk3NzIgMS4xOTc3MiA1Ljc1IDEuNzUgNS43NUgxNi4yNUMxNi44MDIzIDUuNzUgMTcuMjUgNi4xOTc3MiAxNy4yNSA2Ljc1Wicgc3Ryb2tlPScjRDRENEQ0JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnLz4KPC9zdmc+Cg==',
    alt2: 'Vector126',
  },
  rootClassName: '',
  rendering: {},
}

Nav.propTypes = {
  fields: PropTypes.object,
  rootClassName: PropTypes.string,
  rendering: PropTypes.object,
}

export default Nav
