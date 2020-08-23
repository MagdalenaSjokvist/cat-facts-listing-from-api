import React from "react"

export default function FactDetails({ text, upvotes }) {
	return (
		<div className="card m-4 p-2">
			<div className="card-body p-2">
				<p className="card-text">{text}</p>
				{/* <p className="card-text">{name}</p> */}
				<p className="card-text">{upvotes}</p>
			</div>
		</div>
	)
}
