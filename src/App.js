import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RecommendedVideos from './components/RecommendedVideos';
import { BrowserRouter as Router, Switch, route, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
const App = () => {
	return (
		<div className="app">
			<Router>
				{/* header */}
				<Header />
				<Switch>
					<Route path="/search/:searchTerm">
						<div className="app_page">
							{/* sidebar*/}
							<Sidebar />
							{/* recommended videos*/}
							<SearchPage />
						</div>
					</Route>
					<Route path="/">
						<div className="app_page">
							{/* sidebar*/}
							<Sidebar />
							{/* recommended videos*/}
							<RecommendedVideos />
						</div>
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;
