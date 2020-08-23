import React from "react"
import { Link } from "react-router-dom"

// export default function FactCard() {
// 	return (
// 		<div>
// 			<p>FactCard</p>
// 		</div>
// 	)
// }

export default function FactCard({ id, text, upvotes }) {
	return (
		<div className="card m-4 p-2">
			<div className="card-body p-2">
				{/* {renderDescription()}
				{renderShowMore()} */}
				<p className="card-text">{text}</p>
				{/* <p className="card-text">{name}</p> */}
				<p className="card-text">{upvotes}</p>

				<Link to={`/facts/${id}`}>Read the full fact</Link>
			</div>
		</div>
	)
}
