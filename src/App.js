import TodoList from "./todoList";
import React, { useRef, useState, useEffect } from "react";

const LOCAL_ST_KEY = "todos.todos";

function App() {
	const [todos, setTodos] = useState([]);
	const todoNameRef = useRef();

	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem(LOCAL_ST_KEY));

		if (storedTodos?.length) {
			setTodos(storedTodos);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_ST_KEY, JSON.stringify(todos));
	}, [todos]);

	function toggleTodo(id) {
		const newTodos = [...todos];
		const todo = newTodos.find((t) => t.id == id);
		todo.complete = !todo.complete;
		setTodos(newTodos);
	}

	function handleAddTodo(e) {
		const name = todoNameRef.current.value;
		if (name == "") return;

		setTodos((prevTodos) => {
			return [
				...prevTodos,
				{
					id: prevTodos.length + 1,
					name,
					complete: false,
				},
			];
		});
		todoNameRef.current.value = null;
	}

	function clearTodos() {
		const newTodos = todos.filter((todo) => !todo.complete);
		setTodos(newTodos);
	}
	return (
		<>
			<TodoList todos={todos} toggleTodo={toggleTodo} />
			<input ref={todoNameRef} type="text" />
			<button onClick={handleAddTodo}>Add ToDo</button>
			<button onClick={clearTodos}>Clear Completed Todos</button>
			<div>{todos.filter((t) => !t.complete).length} left to do</div>
		</>
	);
}

export default App;
