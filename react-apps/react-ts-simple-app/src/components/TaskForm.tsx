import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { Task } from "../interfaces/Task";
import { AiOutlinePlus } from "react-icons/ai";

interface Props {
    onAddTask: (task: Task) => void;
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialState = {
    title: "",
    description: "",
};

export const TaskForm = ({ onAddTask }: Props) => {
    const [task, setTask] = useState<Task>(initialState);
    const titleInput = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        onAddTask(task);
        setTask(initialState);
        titleInput.current?.focus();
    };

    const handleInputChange = ({ target: { name, value } }: HandleInputChange) =>
        setTask({ ...task, [name]: value });

    return (
        <div className="card card-body bg-secondary text-dark">
            <h1>Add a Task</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Write a Title"
                    name="title"
                    onChange={handleInputChange}
                    value={task.title}
                    className="form-control mb-3 rounded-0 shadow-none border-0"
                    autoFocus
                    ref={titleInput}
                />
                <textarea
                    onChange={handleInputChange}
                    name="description"
                    className="form-control mb-3 shadow-none border-0"
                    placeholder="Write a Description"
                    value={task.description}
                />
                <button type="submit" className="btn btn-primary">
                    Save <AiOutlinePlus />
                </button>
            </form>
        </div>
    );
};