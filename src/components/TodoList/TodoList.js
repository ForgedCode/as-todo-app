import React from "react";
import { STodoList } from "./styles";
import TodoItem from "./TodoItem/TodoItem";
import { AnimatePresence } from "framer-motion";

const TodoList = ({ todos, setTodos }) => {
	return (
		<STodoList>
			<div className='progress'>
				<div className='todo-progress'>
					<h2>In progress:</h2>
				</div>
				<ul>
					<AnimatePresence>
						{todos.map((todo) =>
							todo.completed === false ? (
								<TodoItem
									todos={todos}
									setTodos={setTodos}
									name={todo.todoItem}
									todo={todo}
									key={todo.id}
								/>
							) : (
								""
							)
						)}
					</AnimatePresence>
				</ul>
			</div>
			<div className='completed'>
				<div className='todo-progress'>
					<h2>Completed:</h2>
				</div>
				<ul>
					<AnimatePresence>
						{todos.map((todo) =>
							todo.completed === true ? (
								<TodoItem
									todos={todos}
									setTodos={setTodos}
									name={todo.todoItem}
									todo={todo}
									key={todo.id}
								/>
							) : (
								""
							)
						)}
					</AnimatePresence>
				</ul>
			</div>
		</STodoList>
	);
};

export default TodoList;
