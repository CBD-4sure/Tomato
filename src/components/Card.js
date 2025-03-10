/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */


export default function Card({resCard}) {

    const {image,name,rating,cuisine,cft,locality} = resCard.info

	return (
		<div className="card">
			<div className="img">
				<img src={image.url}></img>
			</div>
			<div className="res">
				<div className="resinfo">
					<div><strong>{name}</strong></div>
					<div>{rating.rating_text}</div>
				</div>
				<div className="resinfo">
					<div>{cuisine[0].name}</div>
					<div>{cft.text}</div>
				</div>
				<div className="resinfo">
					<div>{locality.name}</div>
					<div>{resCard.distance}</div>
				</div>
			</div>
		</div>
	);
}
