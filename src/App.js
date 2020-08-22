import React from "react"
import logo from "./logo.svg"
import "./App.css"
import "bootstrap/dist/css/bootstrap.css"
import { Switch, Route } from "react-router-dom"
import LayoutSimple from "./components/LayoutSimple"
import FactDetailsPage from "./pages/FactDetailsPage"
import FactListPage from "./pages/FactListPage"
import StartPage from "./pages/StartPage"

function App() {
	return (
		<div className="App">
			<Switch>
				<Route
					path="/fact/:id:"
					render={(props) => {
						return (
							<LayoutSimple>
								<FactDetailsPage {...props} />
							</LayoutSimple>
						)
					}}
				></Route>

				<Route path="/facts">
					<LayoutSimple>
						<FactListPage />
					</LayoutSimple>
				</Route>

				<Route path="/">
					<LayoutSimple>
						<StartPage />
					</LayoutSimple>
				</Route>
			</Switch>
		</div>
	)
}

export default App
