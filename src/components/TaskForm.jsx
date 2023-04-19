import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { createTask } = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            title,
            description
        });

        setTitle('');
        setDescription('');

    };

    return (
        <div className="max-w-md mx-auto">
            <form className="bg-gray-800 p-3 mb-4" onSubmit={handleSubmit}>
                <h1 className="text-xl font-bold text-white mb-2">Crear tareas</h1>
                <input
                    placeholder='Agregar tarea'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    autoFocus
                    className="bg-slate-300 p-2 w-full mb-3"
                />
                <textarea
                    placeholder="Escribe la descripción de la tarea"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className="bg-slate-300 p-2 w-full mb-3"
                ></textarea>
                <button
                    className="bg-indigo-500 p-1 text-white">
                    Guardar
                </button>
            </form>
        </div>
    );
}

export default TaskForm;