import React from "react"
import FactCard from "./FactCard"
import { useState, useEffect } from "react"

export default function FactList() {
	let [factList, setFactList] = useState([])

	function fetchFactList() {
		fetch("https://cat-fact.herokuapp.com/facts")
			.then((res) => res.json())
			.then((result) => {
				console.log(result) //Skriver ut objektet "all" som omsluter alla fact-poster
				console.log(result.all) //Skriver ut alla arrayer i objektet "all", dvs. alla fact-poster
				setFactList(result.all)
			})
	}

	useEffect(() => {
		fetchFactList()
		console.log("Nu är Feed på plats")
	}, [])

	return (
		<div>
			<h2>Card List</h2>
			<button onClick={fetchFactList}>Load Facts</button>

			<div className="row">
				{factList.map((fact, index) => {
					return (
						<FactCard
							key={index}
							id={index}
							text={fact.text}
							// name={fact.user.name.first}
							upvotes={fact.upvotes}
						/>
					)
				})}
			</div>
		</div>
	)
	// return (
	// 	<div>
	// 		<p>FactList</p>
	// 	</div>
	// )
}
