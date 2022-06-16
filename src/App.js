import TodoList from "./todoList";
import React, { useState } from "react";

function App() {
	const [todos, setTodos] = useState(["Todo 1", "Todo 2"]);
	return (
		<>
			<TodoList todos={todos} />
			<input type="text" />
			<button>Add ToDo</button>
			<button>Clear Completed Todos</button>
			<div>0 left to do</div>
		</>
	);
}

export default App;
