/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { imgUrl } from "../utils/data";
export default function Card({ resCard }) {
	const {
		cloudinaryImageId,
		name,
		avgRatingString,
		cuisines,
		costForTwo,
		locality,
		sla,
	} = resCard.info;

	return (
		<div className="flex flex-col shadow-md  m-3 rounded-lg  hover:shadow-red-300 ">
			<div className="w-[300px] h-[240px] overflow-hidden rounded-lg">
				<img className="object-cover w-[100%] h-[100%]" src={imgUrl + cloudinaryImageId}></img>
			</div>
			<div className="flex flex-col p-2.5">
				<div className="flex justify-between">
					<div className="text-lg">
						<strong>{name}</strong>
					</div>
					<div className="text-lg text-lime-600">{avgRatingString} Star</div>
				</div>
				<div className="resinfo">
					<div>{cuisines[0]}</div>
					<div>{costForTwo}</div>
				</div>
				<div className="resinfo">
					<div>{locality}</div>
					<div>{sla.lastMileTravelString}</div>
				</div>
			</div>
		</div>
	);
}
