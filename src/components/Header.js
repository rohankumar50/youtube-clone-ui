import React, { useState } from 'react';
import './header.css';
import MenuIcon from '@material-ui/icons/Menu';
import ytlogo from '../images/youtube.svg';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';

const Header = () => {
	const [ inputSearch, setInputSearch ] = useState('');
	return (
		<div className="header">
			<div className="header_leftblock">
				<MenuIcon />
				<Link to="/">
					<img className="header_logo" src={ytlogo} />
				</Link>
			</div>
			<div className="header_inputfield">
				<input
					type="text"
					placeholder="Search"
					onChange={(e) => setInputSearch(e.target.value)}
					value={inputSearch}
				/>
				<Link to={`/search/${inputSearch}`}>
					<button className="header_inputbutton">
						<SearchIcon />
					</button>
				</Link>
			</div>
			<div className="header_rightblock">
				<VideoCallIcon className="header_videocallicon" />
				<AppsIcon className="header_appicon" />
				<NotificationsIcon className="header_notificationicon" />
				<AccountCircleIcon />
			</div>
		</div>
	);
};

export default Header;
