import React, { useRef, useState } from 'react';
import Ratio from 'react-bootstrap/Ratio';
import YouTube from 'react-youtube';
import MyModel from './MyModel';

const VideoComponent = (props) => {
  const videoId = props.link.split('v=')[1];
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(true);

  const handleMouseEnter = () => {
    if (!loading && videoRef.current) {
      videoRef.current.internalPlayer.playVideo();
      videoRef.current.internalPlayer.mute();
    }
  };

  const handleMouseLeave = () => {
    if (!loading && videoRef.current) {
      videoRef.current.internalPlayer.pauseVideo();
      videoRef.current.internalPlayer.unMute();
    }
  };

  const handleReady = (event) => {
    if (event.target.G) {
      setLoading(false)
    }
  }

  const videoOptions = {
    width: '100%',
    height: '100%',
    playerVars: {
      cc_lang_pref: 'en',
      cc_load_policy: 1,
    },
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Ratio aspectRatio="4x3">
        <YouTube
          className="videoPlayer"
          videoId={videoId}
          opts={videoOptions}
          onReady={handleReady}
          ref={videoRef}
        />
      </Ratio>
      {loading ?<MyModel load = {loading}/>: null}
    </div>
  );
};

export default VideoComponent;