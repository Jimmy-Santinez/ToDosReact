import { Fragment, useContext } from "react";
import { TodoContext } from "../TodoContext";


function TodoCounter() {
    const { completedTodos, totalTodos } = useContext(TodoContext);
    
    return (
        <Fragment>
            <h1 className='text-white text-5xl font-black mb-0 mt-[78px] text-center pb-5 font-poppins'>TO-DOs Pendientes</h1>
            <p className='text-white text-xl font-bold text-center pb-8'>Tienes {completedTodos} de {totalTodos} completados</p>
        </Fragment>
        
    );
};

export { TodoCounter };