import React from "react";

const VideoDetail = ({ video }) => {
  // const displayContent = video ? video.snippet.title : "Loading...";
  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="ui embed">
        <iframe
          title="video-player"
          src={`https://youtube.com/embed/${video.id.videoId}`}
        />
      </div>

      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
