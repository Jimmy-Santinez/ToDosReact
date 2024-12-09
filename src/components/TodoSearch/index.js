import { Fragment, useContext } from "react";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
    const { buscarValor, setBuscarValor } = useContext(TodoContext);
    
    return (
        <Fragment>
            <div className="flex flex-col items-center mb-24">
                <input 
                    type="text" 
                    placeholder="buscar"
                    className="bg-cardBg/70 px-4 py-2 rounded-lg w-full md:w-1/2" 
                    value={buscarValor}
                    onChange={(event) => {
                        setBuscarValor(event.target.value)
                    }}
                />
            </div>
        </Fragment>
    );
};

export { TodoSearch };