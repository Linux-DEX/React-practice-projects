import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from '../Recoil/todoState';
import TodoListStats from "../Components/TodoListState";
import TodoListFilters from "../Components/TodoListFilter";
import TodoItemCreator from "../Components/TodoItemCreator";
import TodoItem from "../Components/TodoItem";

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
    </>
  );
}
