function TodoItem({ texto, completed, onComplete, onDelete }) {
    return (
        <li className="bg-cardBg/70 flex items-center justify-between px-3 py-2 rounded-lg mb-3">
            {/* Ícono izquierdo */}
            <i 
                className={`fa-solid fa-circle-check  text-4xl ${completed ? "text-green-600" : "text-gray-500"}`}
                onClick={onComplete}
            ></i>

            {/* Texto central */}
            <p className={`text-poppins flex-1 text-center truncate md:text-clip ${completed && "line-through"}`}>{texto}</p>

            {/* Ícono derecho */}
            <i 
                className="fa-solid fa-circle-xmark text-red-600 text-4xl"
                onClick={onDelete}
            ></i>
        </li>
    );
}

export { TodoItem };