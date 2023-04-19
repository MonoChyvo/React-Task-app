import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {

    const { deleteTask } = useContext(TaskContext);

    return (
        <div className="bg-gray-900 text-sky-600 p-4 rounded-lg">
            <h1 className="text-2xl font-bold capitalize">{task.title}</h1>
            <p className="text-gray-500 text-sm">{task.description}</p>
            <button className="bg-red-700 text-white px-2 py-1 rounded-md mt-5 hover:bg-red-600" onClick={() => deleteTask(task.id)}>
                Eliminar
            </button>
        </div>
    );
}

export default TaskCard;