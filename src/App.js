import Home from './components/home/Home';
import './Global.scss';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/notFound/NotFound';
import Graph from './components/graph/Graph';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/graph" element={<Graph />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
