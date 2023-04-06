import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from 'react-player';

const YoutubeEmbed = ({ link, embedId, width, height }) => (
  <div className="video-responsive">
    <ReactPlayer width={width} height={height} url={link} />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;