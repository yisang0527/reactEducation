// TodoPage.jsx

import TodoForm from "../component/TodoForm";
import TodoList from "../component/TodoList";

export default function TodoPage() {
    return (
        <div className="mx-auto max-w-xl p-10 space-y-4 border">
            <h1 className="text-xl">
                오늘 할 일 with 파이어베이스
            </h1>

            <TodoForm />
            <TodoList />

        </div>
    );
}