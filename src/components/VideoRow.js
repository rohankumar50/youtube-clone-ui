import React from 'react';
import './VideoRow.css';
const VideoRow = ({ image, title, channel, timestamp, description, subs, views }) => {
	return (
		<div className="videoRow">
			<img src={image} />
			<div className="videoRow_text">
				<h3>{title}</h3>
				<p>
					{views} views . {timestamp}
				</p>
				<p>
					{channel} . {subs} Subscribers
				</p>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default VideoRow;
