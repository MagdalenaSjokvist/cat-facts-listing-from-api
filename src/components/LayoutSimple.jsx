import React from "react"
import { Link } from "react-router-dom"

export default function LayoutSimple({ children }) {
	return (
		<div>
			<h1 className="my-4">Welcome to Cat Facts</h1>
			<div>
				<Link className="btn btn-info btn-lg mx-2" to="/">
					Home
				</Link>
				<Link className="btn btn-info btn-lg mx-2" to="/facts">
					See all the Cat Facts
				</Link>
			</div>
			{children}
		</div>
	)
}
