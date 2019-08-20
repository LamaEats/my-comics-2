import React, { Component } from 'react'
import { Cover } from '../Cover'
import { Title } from '../Title'
import { makeClassNames } from '@@Components/UI/utils/makeClassNames'
import { slots } from '@@Components/UI/HOCs/slots'


const baseClassName = 'card'
const DEFAULT_THEME = `${baseClassName}-light`

@slots('heading', 'cover', 'description')
export class Card extends Component {
  static defaultProps = {
    dark: false,
    light: false,
    flat: false,
  }

  makeThemedClass = () => {
    const {dark, light, flat, onClick} = this.props

    return makeClassNames(`${baseClassName}`, {
      [`${DEFAULT_THEME}`]: (dark && light) || (light || (!light && !dark)),
      [`${baseClassName}-dark`]: dark,
      [`${baseClassName}-flat`]: flat,
      [`${baseClassName}_interactive`]: typeof onClick === 'function',
    })
  }

  render () {
    const {
      heading,
      description,
      onClick = () => {},
    } = this.props

    return (
      <div className={`${this.makeThemedClass()}`} onClick={onClick}>
        <div className={`${baseClassName}--cover`}>
          {this.props.cover}
        </div>
        {heading && this.props.heading}
        {description && this.props.description}
      </div>
    )
  }
}

Card.Title = ({title}) => (
  <Title level={4} className={`${baseClassName}--heading`}>
    {title}
  </Title>
)
Card.Description = ({description}) => (
  <div className={`${baseClassName}--description`}>
    <p className={`${baseClassName}--description-text`}>
      {description}
    </p>
  </div>
)
Card.Cover = ({heading, path, circle}) => <Cover alt={heading} src={path} circle={circle}/>
