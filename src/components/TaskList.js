import React from 'react';
import Task from './Task';

export default function TaskList ({ loading, tasks, onPinTask, onArchiveTask}) {
    const events = {
        onPinTask,
        onArchiveTask,
    };

    if(loading) {
        return <div className="list-item">loading</div>;
    }

    if(tasks.length === 0) {
        return <div className="list-item">empty</div>;
    }

    return (
        <div className="list-items">
            {tasks.map(task => (
                <Task key={task.id} task={task} {...events} />
            ))}
        </div>
    );
};
