import { Task } from "../interfaces/Task";

interface Props {
    task: Task;
    onDeleteTask: (id: number) => void;
}

export const TaskCard = ({ task, onDeleteTask }: Props) => (
    <div className="card card-body bg-secondary rounded-0">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <button
            className="btn btn-danger btn-block"
            onClick={() => task.id && onDeleteTask(task.id)}
        >
            Delete
        </button>
    </div>
);