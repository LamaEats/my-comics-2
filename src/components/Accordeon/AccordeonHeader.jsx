import React from 'react'
import { Button } from '../Button'
import { Grid, Row, Col } from '../Grid'


export const AccordeonHeader = (props) => (
  <diV class="accordeon__header">
    <Grid>
      <Row>
        <Col col="10">
          {props.children}
        </Col>
        <Col>
          <Button onClick={props.toggle} />
        </Col>
      </Row>
    </Grid>
  </diV>
)
