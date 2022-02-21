import React from "react";
import { useState, useEffect } from "react";
import Form from "../../components/Form/Form";
import TodoList from "../../components/TodoList/TodoList";
import { Main } from "./styles";

const MainPage = () => {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		getItems();
	}, []);

	useEffect(() => {
		saveItems();
	}, [todos]);

	const saveItems = () => {
		localStorage.setItem("todoItems", JSON.stringify(todos));
	};

	const getItems = () => {
		if (localStorage.getItem("todoItems") === null) {
			localStorage.setItem("todoItems", JSON.stringify([]));
		} else {
			let todoItem = JSON.parse(localStorage.getItem("todoItems"));
			setTodos(todoItem);
		}
	};

	return (
		<Main>
			<div className='app-title'>
				<h1 className='glitch-title'>Todo App</h1>
			</div>
			<Form
				inputText={inputText}
				setInputText={setInputText}
				setTodos={setTodos}
				todos={todos}
			/>
			<TodoList todos={todos} setTodos={setTodos} />
		</Main>
	);
};

export default MainPage;
