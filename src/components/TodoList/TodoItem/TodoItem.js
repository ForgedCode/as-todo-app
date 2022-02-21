import React from "react";
import { STodoItem } from "./styles";
import { popUpMotion } from "../../../framer/animation";

const TodoItem = ({ name, todos, todo, setTodos }) => {
	const completeHandler = () => {
		setTodos(
			todos.map((item) => {
				if (item.id === todo.id) {
					return {
						...item,
						completed: !item.completed,
					};
				}
				return item;
			})
		);
	};

	const deleteHandler = () => {
		setTodos(todos.filter((elem) => elem.id !== todo.id));
	};
	return (
		<STodoItem
			variants={popUpMotion}
			initial='hidden'
			animate='show'
			exit='exit'
		>
			<li>{name}</li>

			<div className='btn-container'>
				{todo.completed ? (
					<button className='uncomplete-btn' onClick={completeHandler}>
						Uncomplete
					</button>
				) : (
					<button className='complete-btn' onClick={completeHandler}>
						Complete
					</button>
				)}

				<button className='delete-btn' onClick={deleteHandler}>
					Delete
				</button>
			</div>
		</STodoItem>
	);
};

export default TodoItem;
