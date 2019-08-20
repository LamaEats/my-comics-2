import React, { Component, Fragment } from 'react'
import UIComponents from '@@Components'

import { DefaultButtons, TextButtons, GroupButtons } from './parts/Buttons'


const {
  Grid: { Grid, Row, Col, Space },
  utils: { createSimpleArray },
  Button, Title, Accordeon, AccordeonItem, AccordeonHeader, AccordeonBody
} = UIComponents

const mapCallback = (_, i, arr) => ({
  content: i + 1,
  col: 12 / arr.length,
})

export class MainPage extends Component {
  state = {
    rows: [
      {
        items: createSimpleArray(mapCallback, 12),
      },
      {
        items: createSimpleArray(mapCallback, 6),
      },
      {
        items: createSimpleArray(mapCallback, 4),
      },
      {
        items: createSimpleArray(mapCallback, 3),
      },
      {
        items: createSimpleArray(mapCallback, 1),
      },
    ],
  }

  render () {
    return (
      <Grid className='example'>
        <Title level={1} text="Grid Example" />
        {
          this.state.rows.map(({ items }, key) =>
            <Fragment key={ key }>
              <Row align='center'>
                {
                  items.map(({ content, col }, key) =>
                    <Col key={ key } col={ col }>
                      <Title level={4} text={content} />
                    </Col>
                  )
                }
              </Row>
              <Space.XL/>
            </Fragment>
          )
        }
        <Title level={2}>
          Buttons
          <Button
            text
            className='pull-right'
            value='default'
            onClick={ this.onBtnClick }
            label="Buttons"
          />
        </Title>
        <DefaultButtons />
        <Space.XL />
        <TextButtons />
        <Space.XL />
        <GroupButtons />
        <Space.XL />
      </Grid>
    )
  }
}
