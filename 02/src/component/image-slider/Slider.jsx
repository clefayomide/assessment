import React, { useState } from "react";
import "./slider.css";
import { AppSliderButton } from "..";
import { EyeClose, EyeOpen } from "../../assets/icon";
import { useEffect } from "react";
import { useRef } from "react";

const ImageCarousel = ({ images }) => {
	const [visible, setVisible] = useState(true);
	const [animation, setAnimation] = useState({
		direction: "stop",
		imageIndex: 0,
	});

	const getSecondImageIndex = (currIndex, dir) => {
		return dir === "stop"
			? currIndex
			: (currIndex + (dir === "right" ? 1 : -1) + images.length) %
					images.length;
	};

	const onNext = () => {
		if (animation.direction === "stop") {
			setAnimation({
				...animation,
				direction: "right",
			});
		}
	};

	const onPrevious = () => {
		if (animation.direction === "stop") {
			setAnimation({
				...animation,
				direction: "left",
			});
		}
	};

	const onTransitionEnd = () => {
		setAnimation((prevAnimation) => ({
			...prevAnimation,
			direction: "stop",
			imageIndex: getSecondImageIndex(
				prevAnimation.imageIndex,
				prevAnimation.direction
			),
		}));
	};

	const imageRef = useRef();
	useEffect(() => {
		if (visible) {
			imageRef.current.classList.remove(".blur");
		} else {
			imageRef.current.classList.add(".blur");
		}
	}, [visible]);

	return (
		<div className="carousel">
			<div>
				<img
					className="image firstImage"
					src={images[animation.imageIndex].url}
					data-animate={animation.direction}
					onTransitionEnd={onTransitionEnd}
					ref={imageRef}
				/>
				<button
					className="toggle-visibility"
					onClick={() => {
						setVisible(!visible);
						imageRef.current.classList.toggle("blur");
					}}
					style={{
						position: "absolute",
						left: "47%",
						top: "45%",
						zIndex: "29",
						color: "white",
						background: "none",
						border: "none",
						outline: "none",
						cursor: "pointer",
					}}
				>
					{visible ? <EyeOpen /> : <EyeClose />}
				</button>
			</div>
			<img
				className="image"
				src={
					images[getSecondImageIndex(animation.imageIndex, animation.direction)]
						.url
				}
			/>

			{/* Buttons */}
			<AppSliderButton className="btn prevBtn" onClick={onPrevious}>
				Previous
			</AppSliderButton>
			<AppSliderButton className="btn nextBtn" onClick={onNext}>
				Next
			</AppSliderButton>
		</div>
	);
};
export default ImageCarousel;
