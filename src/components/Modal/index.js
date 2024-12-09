import ReactDOM from "react-dom";


function Modal({ children }) {

    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
            <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-3/4">
                { children }
            </div>
        </div>,
        document.getElementById('modal')
    );
};

export { Modal };