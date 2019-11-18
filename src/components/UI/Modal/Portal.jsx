import React, { Children } from 'react'
import { createPortal } from 'react-dom'
import { portalNode } from '@@Components/UI/Modal/constants'

export class ModalPortal extends React.Component {
  container = document.createElement('div')
  root = portalNode

  state = {
    shown: false
  }

  modal = null

  static getDerivedStateFromProps(nextProps) {
    return !nextProps.shown ? false : nextProps;
  }

  componentDidMount () {
    this.container.className = this.props.className
    this.root.appendChild(this.container)
  }

  shouldComponentUpdate(nextProps) {
    if (!nextProps.shown && nextProps.shown !== this.props.shown) {
      this.setClosingAnimation();
    }

    return true;
  }

  setClosingAnimation = () => {
    if (this.modal) {
      this.modal.style.transform = 'translate3d(100%, 0, 0)';
      setTimeout(() => {
        this.setState({ shown: false });
      }, 300);
    } else {
      this.setState({ shown: false });
    }
  };

  handleRef = (ref) => this.modal = ref

  componentDidUpdate () {
    this.container.className = this.props.className
  }


  componentWillUnmount () {
    this.root.removeChild(this.container)
  }

  render () {
    return createPortal(this.props.children({ createRef: this.handleRef }), this.container)
  }
}
