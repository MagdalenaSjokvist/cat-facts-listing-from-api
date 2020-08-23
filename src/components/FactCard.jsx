import React from "react"
import { Link } from "react-router-dom"

export default function FactCard({ id, text, name, upvotes }) {
	return (
		<div className="card m-4 p-2 bg-light mb-3">
			<div className="card-body p-2">
				{/* {renderDescription()}
				{renderShowMore()} */}
				<h5 className="card-title">It's a fact...</h5>
				<p className="card-text">{text}</p>
				<p className="card-text">By: {name}</p>
				<p className="card-text">Votes: {upvotes}</p>

				<Link className="card-link btn btn-info btn-sm" to={`/facts/${id}`}>
					Read the full fact
				</Link>
			</div>
		</div>
	)
}
