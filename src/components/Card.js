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
		<div className="card">
			<div className="img">
				<img src={imgUrl + cloudinaryImageId}></img>
			</div>
			<div className="res">
				<div className="resinfo">
					<div>
						<strong>{name}</strong>
					</div>
					<div>{avgRatingString}</div>
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
