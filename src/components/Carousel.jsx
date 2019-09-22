import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import './Carousel.scss';

/* eslint react/destructuring-assignment: 0 */
export const Carousel = props => {
  const { children, disableSlider, enabledBetween, containerClassName = 'carousel' } = props;

  // Track viewport width is enabledBetween prop is set
  const [vw, setVw] = useState(0);

  const listenToVw = enabledBetween && Array.isArray(enabledBetween) && enabledBetween.length === 2;

  const getViewportWidth = () => {
    const newVw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    setVw(newVw);
  };

  useEffect(() => {
    if (listenToVw) {
      getViewportWidth();
      window.addEventListener('resize', getViewportWidth);
    }
    return () => {
      if (listenToVw) window.removeEventListener('resize', getViewportWidth);
    };
  }, []);

  // Determine if slider is disabled
  const sliderIsDiabled = disableSlider || (listenToVw && vw < enabledBetween[0]) || (listenToVw && vw > enabledBetween[1]);

  const emptyFunc = () => {};
  // Props described here - https://github.com/maxmarinich/react-alice-carousel
  const settings = {
    items: props.items || [],
    duration: props.duration || 250,
    responsive: props.responsive || {},
    stagePadding: props.stagePadding || {},
    buttonsDisabled: props.buttonsDisabled || false,
    dotsDisabled: props.dotsDisabled || false,
    startIndex: props.startIndex || 0,
    slideToIndex: props.slideToIndex || 0,
    swipeDisabled: props.swipeDisabled || false,
    mouseDragEnabled: props.mouseDragEnabled || true,
    infinite: props.infinite || false,
    fadeOutAnimation: props.fadeOutAnimation || false,
    keysControlDisabled: props.keysControlDisabled || false,
    playButtonEnabled: props.playButtonEnabled || false,
    autoPlay: props.autoPlay || false,
    autoHeight: (typeof window !== 'undefined' && props.autoHeight) || false,
    autoPlayInterval: props.autoPlayInterval || 250,
    autoPlayDirection: props.autoPlayDirection || 'ltr',
    disableAutoPlayOnAction: props.disableAutoPlayOnAction || false,
    stopAutoPlayOnHover: props.stopAutoPlayOnHover || true,
    showSlideInfo: props.showSlideInfo || false,
    preventEventOnTouchMove: props.preventEventOnTouchMove || true,
    onSlideChange: props.onSlideChange || emptyFunc,
    onSlideChanged: props.onSlideChanged || emptyFunc,
    onInitialized: props.onInitialized || emptyFunc,
    onResized: props.onResized || emptyFunc,
  };
  if (sliderIsDiabled) return <div className={`${containerClassName} disabled`}>{children}</div>;
  return (
    <div className={containerClassName}>
      <AliceCarousel {...settings}>{children}</AliceCarousel>
    </div>
  );
};
