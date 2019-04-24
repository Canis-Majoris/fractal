import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classes from './P5Wrapper.css';
import sketch1 from './sketch1'

class P5Wrapper extends Component {

    componentDidMount() {
        this.canvas1 = new window.p5(sketch1, 'canvas1-container')
        this.canvas1.props = this.props.p5Props
        this.canvas1.onSetFramerate = this.props.onSetFramerate
    }

    shouldComponentUpdate(nextProps) {
        this.canvas1.props = nextProps.p5Props
        return false
    }

    componentWillUnmount() {
        this.canvas1.remove()
    }

    render() {
        return (
            <div
                id="canvas1-container" className={classes.CanvasWrapper}
                style={{ width: "100%", textAlign: "center" }}
            />
        )
    }
}

P5Wrapper.propTypes = {
    p5Props: PropTypes.object.isRequired
}

export default P5Wrapper;