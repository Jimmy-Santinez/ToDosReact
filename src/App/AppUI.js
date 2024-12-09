import { useContext } from 'react';

import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { Modal } from '../components/Modal';
import { TodoForm } from '../components/TodoForm';
import { TodosLoading } from '../components/TodosLoading';
import { TodosError } from '../components/TodosError';
import { TodosEmpty } from '../components/TodosEmpty';

import { TodoContext } from '../components/TodoContext';

function AppUI(){
    const { 
        todosBuscados, 
        completeTodo, 
        deleteTodo,
        loading, 
        error,
        isModalOpen
    } = useContext(TodoContext);

    return(
        <div className="min-h-screen bg-gradient-to-br from-moradoHsla to-azulHsla grid grid-cols-1 gap-8 md:gap-12 px-10 py-12 md:px-12 md:py-62">
    
            {/* Div principal (solo en pantallas medianas o mayores) */}
            {/* <div className="bg-cardBg rounded-[20px] shadow-2xl box-border pl-[48px] pr-[48px] pt-[64px] md:h-[400px] hidden md:block mt-[78px] ml-[84px]"></div> */}
    
            {/* Segundo div */}
            <div>
    
                <TodoCounter />
                <TodoSearch />
    
                
                <TodoList>
                    {
                        loading && 
                        <>
                            <TodosLoading />
                            <TodosLoading />
                            <TodosLoading />
                        </>
                    }
                    {error && <TodosError />}
                    {(!loading && todosBuscados.length === 0) &&  <TodosEmpty />}

                    {
                        todosBuscados.map(todo => {
                            return(
                            <TodoItem
                                key={todo.texto}
                                texto={todo.texto}
                                completed={todo.completed}
                                onComplete={() => completeTodo(todo.texto)}
                                onDelete={() => deleteTodo(todo.texto)}
                            />
                            );
                        })
                    }
                </TodoList>
    
    
                
                <CreateTodoButton />
                {isModalOpen && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                )}
            </div>
    

            
            
        </div>
    );
}

export { AppUI };