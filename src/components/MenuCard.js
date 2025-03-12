import { imgUrl } from "../utils/data";

export default function MenuCard({ menuItem }) {
	const { name, defaultPrice, price, description, ratings, imageId } =
		menuItem.card.info;

	return (
		<div className="menuCard">
			<div className="line"></div>
			<div className="item">
				<div className="subitem">
					<div>
						<h2>{name}</h2>
					</div>
					<div>Rating {ratings.aggregatedRating.rating} Star</div>
					<div>
						<h3 style={{ marginBottom: "5px", marginTop: "5px" }}>
							Rs. {(defaultPrice ? defaultPrice:price) / 100}
						</h3>
					</div>
					<div>
						<p style={{ marginBottom: "5px", marginTop: "5px" }}>
							{description}
						</p>
					</div>
				</div>

				<div
					className="imgres"
					style={{ height: "150px", width: "280px", alignSelf:"center" }}
				>
					<img src={imgUrl + imageId}></img>
				</div>
			</div>
		</div>
	);
}
