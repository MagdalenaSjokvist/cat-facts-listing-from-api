import React from "react"

export default function FactDetails({ text, name, upvotes }) {
	return (
		<div className="card m-4 p-2">
			<div className="card-body p-2">
				<p className="card-text">{text}</p>
				<p className="card-text">By: {name}</p>
				<p className="card-text">Votes: {upvotes}</p>
			</div>
		</div>
	)
}
