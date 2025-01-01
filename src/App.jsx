import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Home"

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" Component={Home}/>
			</Routes>
		</Router>
	)
}
