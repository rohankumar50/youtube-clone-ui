import { Avatar } from '@material-ui/core';
import { CheckCircleOutlineOutlined } from '@material-ui/icons';
import React from 'react';
import './ChannelRow.css';
const ChannelRow = ({ image, channel, subs, noOfVideos, description, verified }) => {
	return (
		<div className="channelRow">
			<Avatar className="channelRow_logo" src={image} alt={channel} />
			<div className="channelRow_text">
				<h4>
					{channel} {verified && <CheckCircleOutlineOutlined />}
				</h4>
				<p>
					{subs} subsribers . {noOfVideos}
				</p>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default ChannelRow;
