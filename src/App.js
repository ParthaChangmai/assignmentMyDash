import Home from './components/home/Home';
import './Global.scss';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/notFound/NotFound';
import Chart from './components/chart/Chart';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/chart" element={<Chart />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
