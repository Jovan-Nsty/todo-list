// Factory function for Todo Project
export const createTodo = (title => {
    const titleName = title;

    let taskList = [];

    const setTaskListItem = value => {
        taskList.unshift(value);
    }

    const removeTaskListItem = value => {
        taskList.splice(value, 1);
    }

    const getTaskList = () => {
        for (const task of taskList) {
            console.log(task.getTitle());
            console.log(task.getDescription());
            console.log(task.getDueDate());
            console.log(task.getPriority());
        }
    }

    const getTodoTitle = () => {
        return titleName;
    }

    return { getTodoTitle, setTaskListItem, removeTaskListItem, getTaskList }
})