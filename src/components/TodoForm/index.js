import { useState, useContext } from 'react';
import { TodoContext } from '../TodoContext';

function TodoForm() {
    const { toggleModal, addTodo } = useContext(TodoContext);

    const [ newTodoValue, setNewTodoValue ] = useState('');

    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault(); // Evita el envío por defecto
        addTodo(newTodoValue);
        toggleModal(); // Cierra el modal
    };

    return (
        <form 
            onSubmit={onSubmit}
        >
            <h2 className="text-lg font-bold text-black">Crear nuevo TO-DO</h2>

            <input
                type="text"
                placeholder="Escribe aquí..."
                className="bg-gray-200 text-gray-800 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-96 mt-4 mb-4"
                value={newTodoValue}
                onChange={onChange}
            />

            <div className="flex justify-between items-center">
                {/* Botón de registrar */}
                <button 
                    type="submit" 
                    className="bg-primary text-white px-4 py-2 rounded-lg"
                >
                    Registrar
                </button>

                {/* Botón de cancelar */}
                <button 
                    type="button" 
                    className="bg-gray-300 text-black px-4 py-2 rounded-lg"
                    onClick={toggleModal}
                >
                    Cancelar
                </button>
            </div>
        </form>
    );
};

export { TodoForm };
