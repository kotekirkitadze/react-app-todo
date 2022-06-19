import React from "react";
import Todo from "./todo";

export default function TodoList({ todos, toggleTodo }) {
	return todos.map((t) => <Todo toggleTodo={toggleTodo} key={t.id} todo={t} />);
}
