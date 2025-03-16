import { useDispatch, useSelector } from "react-redux";
import MenuCard from "./components/MenuCard";
import { bestsellerMenuCard } from "./components/MenuCard";
import { clearItems } from "./utils/cartSlice";

export default function Cart() {
	const cartList = useSelector((state) => state.cart.items);
	const BestMenuCard = bestsellerMenuCard(MenuCard);
	const clearCart = useDispatch();
	const clearHandle = () => {
		clearCart(clearItems());
	};

	return (
		<div className="px-4 w-[900px]">
			<div>
				<button
					className="border-1 rounded-xl mx-2  px-4 cursor-pointer"
					onClick={clearHandle}
				>
					Clear Cart
				</button>
			</div>
			{cartList.length == 0 ? (
				<h2 className="w-[900px] text-center text-xl">Add Items To Cart</h2>
			) : (
				cartList.map((item) =>
					item.card.info?.isBestseller ? (
						<BestMenuCard key={item.card.info.id} menuItem={item} />
					) : (
						<MenuCard key={item.card.info.id} menuItem={item} />
					)
				)
			)}
		</div>
	);
}
