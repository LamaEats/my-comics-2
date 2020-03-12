import React from 'react'


export class TableHeader extends React.Component {
  MakeHeaders = ({cell}) => this.props.headers.map(cell)

  MakeHeader = (header, index) => {
    const HeaderWrapper = (props) => (
      <th className='table--row-header'>
        { props.children }
      </th>
    )

    if (typeof header === 'function') {
      const HeaderComponent = header
      return <HeaderWrapper key={index}>
        <HeaderComponent/>
      </HeaderWrapper>
    }
    
      return (
        <HeaderWrapper key={index}>{ header || '' }</HeaderWrapper>
      )
    
  }

  render () {
    const { MakeHeaders, MakeHeader } = this
    return (
      <thead className="table--row">
        <tr>
          <MakeHeaders cell={MakeHeader}/>
        </tr>
      </thead>
    )
  }
}
