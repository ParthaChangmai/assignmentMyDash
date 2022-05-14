import Home from './components/home/Home';
import './Global.scss';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/notFound/NotFound';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
