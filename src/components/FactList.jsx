import React from "react"
import FactCard from "./FactCard"
import { useState, useEffect } from "react"

export default function FactList() {
	let [factList, setFactList] = useState([])

	function fetchFactList() {
		fetch("https://cat-fact.herokuapp.com/facts")
			.then((res) => res.json())
			.then((result) => {
				let allFacts = result.all
				// console.log(allFacts) //Skriver ut alla arrayer i objektet "all", dvs. alla fact-poster

				//Spara ner 20 random facts (items) från arrayen, i variabeln factList
				let factList = allFacts
					.sort(() => Math.random() - Math.random())
					.slice(0, 20)

				console.log(factList)
				setFactList(factList)
			})
	}

	useEffect(() => {
		fetchFactList()
		console.log("Nu är Feed på plats")
	}, [])

	return (
		<div>
			<button
				className="btn btn-success btn-lg mt-5 mb-2"
				onClick={fetchFactList}
			>
				Show me some facts
			</button>

			<div className="row justify-content-center">
				{factList.map((fact, index) => {
					if (fact.user) {
						return (
							<FactCard
								key={index}
								id={index}
								// pageId={fact._id}
								text={fact.text.substring(0, 20)}
								name={fact.user.name.first + " " + fact.user.name.last}
								upvotes={fact.upvotes}
							/>
						)
					} else {
						return (
							<FactCard
								key={index}
								id={index}
								// pageId={fact._id}
								text={fact.text.substring(0, 20)}
								name={"Unknown"}
								upvotes={fact.upvotes}
							/>
						)
					}
					{
					}
				})}
			</div>
		</div>
	)
}
