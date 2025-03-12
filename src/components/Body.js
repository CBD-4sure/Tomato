import Card from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { URL } from "../utils/data";
import { Link } from "react-router";
/* eslint-disable react/react-in-jsx-scope */
export default function Body() {
	const [data, setData] = useState([]);
	const [filData, setFilData] = useState([]);
	const [searchText, setSearchText] = useState("");

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await fetch(URL);
				const json = await data.json();
				const newRes = json?.data?.cards.find(
					(item) => item?.card?.card?.id == "restaurant_grid_listing"
				)?.card?.card?.gridElements?.infoWithStyle?.restaurants;
				console.log(newRes);
				setData(newRes);
				setFilData(newRes);
			} catch (error) {
				console.error(error);
			}
		}
		fetchData();
	}, []);

	const filterData = () => {
		const newData = data.filter(
			(res) => parseFloat(res.info.avgRatingString) >= 4.3
		);
		setSearchText("");
		setFilData(newData);
	};

	return data?.length === 0 ? (
		<Shimmer />
	) : (
		<div className="bodydiv">
			<div className="searchbar">
				<input
					type="text"
					placeholder="search"
					value={searchText}
					onChange={(e) => {
						setSearchText(e.target.value);
					}}
				></input>
				<button
					onClick={() => {
						const newList = data.filter((res) =>
							res.info.name
								.toLowerCase()
								.includes(searchText.toLowerCase())
						);
						setFilData(newList);
					}}
				>
					Search
				</button>
			</div>
			<div className="filter">
				<button onClick={filterData}>Top Rated</button>
			</div>
			<div className="cardholder">
				{filData.map((rescard) => (
					<Link className="cardTag" to={"/restaurant/"+rescard.info.id} key={rescard.info.id}><Card  resCard={rescard} /></Link>
					
				))}
			</div>
		</div>
	);
}
