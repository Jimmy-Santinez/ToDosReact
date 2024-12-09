import { createContext, useState } from "react";
import { useLocalStorage } from "../CustomHooks/useLocalStorage";

const TodoContext = createContext();

function TodoProvider({ children }) {
    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);
    const [ buscarValor, setBuscarValor ] = useState('');

    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;

    const todosBuscados = todos.filter(todo => {
        return todo.texto.toLowerCase().includes(buscarValor.toLowerCase());
    });

    const completeTodo = (texto) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
        todo => todo.texto == texto
        );
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    }

    const deleteTodo = (texto) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
        todo => todo.texto == texto
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    const addTodo = (texto) => {
        const newTodos = [...todos];
        newTodos.push({
            texto,
            completed: false
        });
        saveTodos(newTodos);
    };

    /** Funciones del modal */
    const [isModalOpen, setModalOpen] = useState(false);
    const [isRotated, setIsRotated] = useState(false);
    const toggleModal = () => {
        setModalOpen(!isModalOpen);
        setIsRotated(!isRotated);
    };

    return(
        <TodoContext.Provider value={{
            completedTodos, 
            totalTodos, 
            buscarValor, 
            setBuscarValor, 
            todosBuscados, 
            completeTodo, 
            deleteTodo,
            addTodo,
            toggleModal, 
            isRotated, 
            isModalOpen, 
            loading, 
            error 
        }}>
            { children }
        </TodoContext.Provider>
    );
}

// function TodoConsumer() {
//     return(
//         <TodoContext.Consumer>
            
//         </TodoContext.Consumer>
//     );
// }





export { TodoContext, TodoProvider };