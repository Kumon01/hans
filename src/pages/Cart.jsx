import React from "react";
import { formatRupiah } from "../utils";
import { useSelector } from "react-redux";

const Cart = () => {
	const { cart } = useSelector((root) => root);
	return (
    <div className="container">
    {cart.map((p, idx) => (
        <div className="card" key={idx}>
			<div className="card-hearder">
				<h5 className="card-title">{p?.products_name}</h5>
				<div className="card-body">
					<div className="row">
						<div className="col-lg-4">
						<img
							src={p?.img_url}
							className="card-img-top"
							alt="..."
							width={100}
						/>
						</div>
						<div className="col-lg-4">
							<h6 className="card-title">
								Price: {formatRupiah(p?.price)}
							</h6>
							<p className="card-title">{p?.description}</p>
							<p className="card-title">Stock: {p?.stock}</p>
						</div>
						<div className="col-lg-3">
							<h6 className="card-title">Subtotal: {formatRupiah(p?.price * p?.stock)}</h6>
						</div>
						<div className="col-lg-1">
							<button className="btn btn-danger"><i className="fa fa-trash"/></button>
						</div>
					</div>
				</div>
				{
					idx === cart.length - 1 ? (
						<div className="card-footer p-5">
							<div className="text-end">
								<h6>Total: {formatRupiah(cart.reduce((acc, curr) => acc + curr.price * curr.stock, 0))}</h6>
							</div>
						</div> 
					) : null
				}
			</div>
        </div>
    ))}
    </div>
	);
};

export default Cart; 