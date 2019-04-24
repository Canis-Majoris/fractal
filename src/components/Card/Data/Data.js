import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from "react-dom";
import P5Wrapper from '../P5Wrapper'

const Data = props => {
	const wrapperRef = useRef(null);
	const [slider, setSlider] = useState(0);
	// const [frameRate, setframeRate] = useState(null);
	const [width, setWidth] = useState(null);
	const [height, setHeight] = useState(null);

	useEffect(() => {
		wrapperRef.current && setWidth(measureElement(wrapperRef.current).width);
		wrapperRef.current && setHeight(measureElement(wrapperRef.current).height);
	}, [])

	// const onSetFrameRate = (newState, cb) => {
	// 	setframeRate(newState);
	// }

	const onSliderChange = (event) => {
		setSlider(+event.target.value);
	}

	const updateSliderValue = (value) => {
		setSlider(value);
	}

	let p5Props = {
		angle: slider,
		width: width,
		height: height,
		nodeLenghtModifier: 0.8,
		onUpdateSliderValue: updateSliderValue
	}

	return (
		<div className="row">
			<div className="col-12">
				<div className="draw-wrapper" ref={wrapperRef}>
					<P5Wrapper
						p5Props={p5Props}
						// onSetFrameRate={onSetFrameRate}
						onUpdateSliderValue={updateSliderValue}
					/>
					<div style={{ textAlign: 'center' }}>
						<strong>Angle: {slider}</strong>
						<br />
						<input
							type="range"
							min={0} max={2 * Math.PI} step={0.001}
							value={slider}
							style={{ width: '90%', maxWidth: '900px' }}
							onChange={onSliderChange}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

const measureElement = element => {
	const DOMNode = ReactDOM.findDOMNode(element);
	return {
		width: DOMNode.offsetWidth,
		height: DOMNode.offsetHeight,
	};
}

export default Data;