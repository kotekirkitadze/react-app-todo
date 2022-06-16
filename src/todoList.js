import React from "react";
import Todo from "./todo";

export default function TodoList({ todos }) {
	return todos.map((t) => <Todo key={t} todo={t} />);
}
