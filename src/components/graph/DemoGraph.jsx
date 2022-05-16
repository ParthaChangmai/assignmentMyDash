import { useState } from "react";
import BarChart from "./BarChart";


const DemoGraph = () =>{
    const randomArray = (length, max) =>
		[...new Array(length)].map(() => Math.round(Math.random() * max));


	const [data, setData] = useState([
		100, 500, 200, 300, 400, 200, 400, 600, 400, 200,
	]);

	const changeData = (e) => {
		e.preventDefault();
		const data = randomArray(15, 500);
		setData(data);
	};
    
return(
    <div>
         <button onClick={changeData}>Change Data</button>
            <BarChart width={800} height={400} data={data} />
    </div>
)
}

export default DemoGraph;