import React from 'react'
import { Button } from '@@Components/UI/Button'
import { Grid } from '@@Components/UI/Grid/Grid'
import { Row } from '@@Components/UI/Grid/Row'
import { Col } from '@@Components/UI/Grid/Col'


export const AccordeonHeader = (props) => (
  <diV class="accordeon__header">
    <Grid>
      <Row>
        <Col col="10">
          {props.children}
        </Col>
        <Col>
          <Button onClick={props.toggle}/>
        </Col>
      </Row>
    </Grid>
  </diV>
)
