import React, { useState } from 'react';
import IntroVideo from './IntroVideo';
import DisintegrationEffect from './DisintegrationEffect';
interface IntroSequenceProps {
  onComplete: () => void;
}
const IntroSequence: React.FC<IntroSequenceProps> = ({
  onComplete
}) => {
  const [showVideo, setShowVideo] = useState(true);
  const [showDisintegration, setShowDisintegration] = useState(false);
  const handleVideoEnd = () => {
    setShowVideo(false);
    setShowDisintegration(true);
  };
  const handleDisintegrationComplete = () => {
    setShowDisintegration(false);
    onComplete();
  };
  return <>
      {showVideo && <IntroVideo onVideoEnd={handleVideoEnd} />}
      {showDisintegration && <DisintegrationEffect onAnimationComplete={handleDisintegrationComplete} />}
    </>;
};
export default IntroSequence;