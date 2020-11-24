import { Avatar } from '@material-ui/core';
import React from 'react';
import './VideoCard.css';
const VideoCard = ({ image, title, channel, views, channelName, timestamp, channelImage }) => {
	return (
		<div className="videoCard">
			<img className="videoCard_thumbnail" src={image} alt="" />
			<div className="videoCard_info">
				<Avatar className="videoCard_avatar" alt={channelName} src={channelImage} />
				<div className="videoCard_text">
					<h4>{title}</h4>
					<p>{channel}</p>
					<p>
						{views}.{timestamp}
					</p>
				</div>
			</div>
		</div>
	);
};

export default VideoCard;
