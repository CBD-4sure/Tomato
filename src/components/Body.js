import Card from "./Card";
import { RESDATA } from "../utils/data";
import { useState } from "react";
/* eslint-disable react/react-in-jsx-scope */
export default function Body() {
	const [data, setData] = useState(RESDATA);
	const filterData = () => {
		const newData = data.filter((res) => parseFloat(res.info.rating.rating_text) >= 4.2);
		setData(newData);
	};
	return (
		<div className="bodydiv">
			<div className="filter">
				<button onClick={filterData}>Top Rated</button>
			</div>
			<div className="cardholder">
				{data.map((rescard) => (
					<Card key={rescard.info.resId} resCard={rescard} />
				))}
			</div>
		</div>
	);
}
