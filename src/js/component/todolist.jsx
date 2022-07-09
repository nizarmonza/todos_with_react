import React from "react";
import { useState, useEffect } from "react";



//create your first component
const ToDos = () => {
	const [toDo, setToDo] = useState([
		"Running",
		"Biking",
		"Swimming"
	]);
	

	
	const [isShown, setIsShown] = useState({
		state: false,
		index : 0
	})
	

	const list = toDo.map((item, i) => {
		return (
			<div className="repeating" key = {i}>
				<li
					onMouseEnter={() => setIsShown({state: true, index: i})}
					onMouseLeave={() => setIsShown({state: false, index: 0})}>
					{item}
					{isShown.state == true && isShown.index == i ?(
						<button onClick = {() => removeList(i)}>X</button>
					) :(""
					)}
				</li>
			</div>
		)
	})

	const removeList = index =>{
		const newArray = toDo.filter((item, i) => i != index);
		setToDo(newArray);

	};
	const update = e =>{
		if(e.keyCode == 13){
			let user = e.target.value;
			const result = [...toDo, user];
			setToDo(result);
			console.log("this is enter")
		}
	}



	return (
		<div className="toDo">
			<h1>ToDos</h1>
			<input 
				onKeyDown={update}
				type="text"
				placeholder="please write">
			</input>
			<ul>
				{list}
			</ul>

		</div>	
		
		
		
		);
};

export default ToDos;
