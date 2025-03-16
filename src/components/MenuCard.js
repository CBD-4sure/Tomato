import { useDispatch } from "react-redux";
import { imgUrl } from "../utils/data";
import { addItem } from "../utils/cartSlice";

export default function MenuCard({ menuItem }) {
	const { name, defaultPrice, price, description, ratings, imageId } =
		menuItem.card.info;

	const dispatch = useDispatch();

	const handleAdd = () => {
		dispatch(addItem(menuItem));
	};

	return (
		<div className="flex flex-col gap-5">
			<div className="border-2 border-solid border-red-500 mt-2.5"></div>
			<div className="flex justify-between px-4 w-auto h-auto rounded-2xl">
				<div className="w-[730px]">
					<div>
						<h2 className="text-lg">
							<strong>{name}</strong>
						</h2>
					</div>
					<div className="text-green-600">
						{ratings.aggregatedRating.rating
							? `${ratings.aggregatedRating.rating} Star`
							: ""}
					</div>
					<div>
						<h3 className="my-1.5">
							<strong>
								Rs.{" "}
								{(defaultPrice ? defaultPrice : price) / 100}
							</strong>
						</h3>
					</div>
					<div>
						<p className="my-1 pr-2 w-[630px]">{description}</p>
					</div>
				</div>

				<div className="w-[200px] h-[160px] overflow-hidden rounded-lg">
					{imageId ? (
						<img
							className="object-cover w-[100%] h-[100%]"
							src={imgUrl + imageId}
						></img>
					) : (
						""
					)}
				</div>
				<div
					className="absolute ml-[770px] border-1 cursor-pointer bg-white text-green-600 px-4 py-1  rounded-lg"
					onClick={handleAdd}
				>
					<button className="cursor-pointer">ADD</button>
				</div>
			</div>
		</div>
	);
}

export function bestsellerMenuCard(MenuCard) {
	return (props) => {
		return (
			<div>
				<div className="absolute ml-[670px] mt-8 bg-black text-white px-1">
					<label>Bestseller</label>
				</div>
				<div>
					<MenuCard {...props} />
				</div>
			</div>
		);
	};
}
