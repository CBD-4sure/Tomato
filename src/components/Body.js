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
		<div className="flex flex-col w-[1000]">
			<div className="self-center flex gap-5">
				<input
					className="border-2 solid w-lg mt-1.5 pl-2.5 rounded-lg h-7"
					type="text"
					placeholder="search"
					value={searchText}
					onChange={(e) => {
						setSearchText(e.target.value);
					}}
				></input>
				<button
					className="border-2 solid rounded-lg px-2 mt-1.5"
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
			<div className="items-start border-2 border-solid w-25 mt-2.5 text-center ml-10 rounded-2xl">
				<button onClick={filterData}>Top Rated</button>
			</div>
			<div>
				<div className="flex flex-wrap w-auto ml-2.5">
					{filData.map((rescard) => (
						<Link
							className="cardTag"
							to={"/restaurant/" + rescard.info.id}
							key={rescard.info.id}
						>
							<Card resCard={rescard} />
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
