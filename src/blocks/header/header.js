import React from 'react';


class Header extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            isOpened: false
        }
    }

    clickHandler (event) {
        event.preventDefault();

        return this.setState(() => {
            return {
                isOpened: !this.state.isOpened
            }
        })
    }

    render() {
        const headerClassName = this.state.isOpened ? ' header_expand' : '';
        return (
            <div className={'header' + headerClassName}>
                <div className="header__overlay">
                    <div className="header__bubble"></div>
                </div>
                <a href="" className="header__link" onClick={this.clickHandler.bind(this)}>
                    <HeaderToggleText {...this.state} />
                </a>
            </div>
        )
    }
}

export default Header;

const HeaderToggleText = (props) => {
    "use strict";

    const { isOpened } = props;
    const iconText = isOpened ? 'less' : 'more';
    const iconClassName = isOpened ? ' glyphicon-circle-arrow-up' : ' glyphicon-circle-arrow-down';

    return (
        <span>
            {iconText}&nbsp;
            <i className={'glyphicon' + iconClassName}/>
        </span>
    )
};
