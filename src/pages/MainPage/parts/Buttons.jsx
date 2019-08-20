import React from 'react'
import UIComponents from '@@Components'


const {Grid: {Row}, Button, ButtonGroup} = UIComponents

const onBtnClick = (_, value) => console.log(value)


export const DefaultButtons = () => (
  <Row>
    <Button value='default' onClick={onBtnClick}>
      Default
    </Button>
    <Button primary value="primary" onClick={onBtnClick} label="Primary" />
    <Button error value="error" onClick={onBtnClick} label="Error" />
    <Button success value="success" onClick={onBtnClick} label="Success" />
    <Button warning value="warning" onClick={onBtnClick} label="Warning" />
    <Button disabled label="Disabled" onClick={onBtnClick} />
  </Row>
)
export const TextButtons = () => (
  <Row>
    <Button text value="text & children" onClick={onBtnClick}>
      Text Button
    </Button>
    <Button error text value="text & children" onClick={onBtnClick}>
      Text Button
    </Button>
    <Button text primary value="text & children" onClick={onBtnClick}>
      Text Button
    </Button>
    <Button text warning value="text & children" onClick={onBtnClick}>
      Text Button
    </Button>
    <Button text success value="text & children" onClick={onBtnClick}>
      Text Button
    </Button>
    <Button text value="text & children" disabled onClick={onBtnClick}>
      Text Button
    </Button>
  </Row>
)

export const GroupButtons = () => (
  <Row>
    <ButtonGroup>
      <Button primary label="Button One" onClick={onBtnClick} />
      <Button primary label="Button Two" onClick={onBtnClick} />
      <Button primary label="Button Three" onClick={onBtnClick} disabled />
    </ButtonGroup>
  </Row>
)
