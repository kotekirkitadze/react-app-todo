import React from "react";

export default function Todo({ todo, toggleTodo }) {
	function handleToggleTodo() {
		toggleTodo(todo.id);
	}

	return (
		<div>
			<label>
				{todo.name}
				<input
					type="checkbox"
					checked={todo.complete}
					onChange={handleToggleTodo}
				></input>
			</label>
		</div>
	);
}
