import React from "react";

const VideoDetail = ({ video }) => {
  const displayContent = video ? video.snippet.title : "Loading...";
  return <div>{displayContent}</div>;
};

export default VideoDetail;
