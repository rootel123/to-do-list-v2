import { Link } from "react-router-dom";

const TodoCard = ({ todo }) => {
  return (
    <li className="h-12 flex items-center text-xl">
      <span className="w-2/12 text-center text-indigo-600">{todo.id}</span>
      <span className={`w-7/12 pl-4`}>{todo.title}</span>
      <Link
        to={`/${todo.id}?title=${todo.title}&is-done=${todo.isDone}`}
        className="w-3/12 hover:font-bold"
      >
        ☰
      </Link>
    </li>
  );
};

export default TodoCard;
