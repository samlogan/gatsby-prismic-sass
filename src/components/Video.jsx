import React, { Component } from 'react';
import './Video.scss';

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.state = { videoLoaded: false };
  }

  componentDidMount() {
    const { id } = this.props;
    const { videoLoaded } = this.state;
    const video = document.getElementById(id);
    // eslint-disable-next-line
    video.addEventListener('loadeddata', () =>  this.setState({ videoLoaded: true }), false);
    // Force video to show after 4 seconds incase
    // loadeddata listener does not fire
    setTimeout(() => {
      if (!videoLoaded) this.setState({ videoLoaded: true });
    }, 4000);
  }

  render() {
    const { src, type = 'video/mp4', id, placeholder, className } = this.props;
    const { videoLoaded } = this.state;
    return (
      <div
        className={`video-bg-container ${className || ''}`}
        style={{ background: `url('${placeholder}') center no-repeat` }}
      >
        <video preload="true" autoPlay muted loop className="video" id={id} style={{ opacity: videoLoaded ? 1 : 0 }}>
          <source src={src} type={type} />
          Sorry, your browser doesn&#39;t support embedded videos.
        </video>
      </div>
    );
  }
}
