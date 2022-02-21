import React from "react";
import { SForm } from "./styles";
import { v4 as uuidv4 } from "uuid";

const Form = ({ inputText, setInputText, todos, setTodos }) => {
	const inputTextHandler = (e) => {
		setInputText(e.target.value);
	};

	const submitTodoHandler = (e) => {
		if (inputText == "") {
			return null;
		} else {
			e.preventDefault();
			setTodos([
				...todos,
				{ todoItem: inputText, completed: false, id: uuidv4() },
			]);
			setInputText("");
		}
	};

	return (
		<SForm>
			<input
				value={inputText}
				onChange={inputTextHandler}
				type='text'
				required
			/>
			<button onClick={submitTodoHandler} type='submit'>
				Add
			</button>
		</SForm>
	);
};

export default Form;
