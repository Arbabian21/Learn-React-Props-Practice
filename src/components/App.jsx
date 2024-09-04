import React from "react";
import Card from "./Card";
import  contacts  from "../contacts";

function App() {
	return (
		<div>
			<h1 className="heading">My Contacts</h1>
			{contacts.map((entry) => (
				<Card
					name={entry.name}
					phone={entry.phone}
					img={entry.imgURL}
					email={entry.email}
				></Card>
			))}
		</div>
	);
}

export default App;
