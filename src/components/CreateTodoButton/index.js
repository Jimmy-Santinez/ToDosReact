import { useContext } from "react";
import { TodoContext } from "../TodoContext";

function CreateTodoButton() {
    const { isRotated, toggleModal } = useContext(TodoContext);

    return(
        <button
        className={`fixed bottom-4 right-4 bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center p-3 shadow-lg transform transition-transform duration-500 
            ${isRotated ? "rotate-180" : "rotate-0"}`}
        onClick={toggleModal}
        >
        <i className="fa-solid fa-plus text-xl"></i>
        </button>

    );
}

export { CreateTodoButton };