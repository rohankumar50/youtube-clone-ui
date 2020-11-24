import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import {
	ExpandMoreOutlined,
	History,
	OndemandVideo,
	ThumbUpOutlined,
	VideoLibrary,
	WatchLater
} from '@material-ui/icons';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<SidebarRow selected Icon={HomeIcon} title={'Home'} />
			<SidebarRow Icon={WhatshotIcon} title={'Trending'} />
			<SidebarRow Icon={SubscriptionIcon} title={'Subscription'} />
			<hr />
			<SidebarRow Icon={VideoLibrary} title={'Library'} />
			<SidebarRow Icon={History} title={'History'} />
			<SidebarRow Icon={OndemandVideo} title={'Your videos'} />
			<SidebarRow Icon={WatchLater} title={'Watch Later'} />
			<SidebarRow Icon={ThumbUpOutlined} title={'Liked video'} />
			<SidebarRow Icon={ExpandMoreOutlined} title={'Show More'} />
			<hr />
		</div>
	);
};

export default Sidebar;
