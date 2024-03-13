// Factory function for Todo Project sub-items
export const createTodoItem = () => {
    let title = '';
    let description = '';
    let dueDate = '';
    let priority = '';

    const setTitle = value => {
        title = value;
    }

    const setDescription = value => {
        description = value;
    }

    const setDueDate = value => {
        dueDate = value;
    }

    const setPriority = value => {
        priority = value;
    }

    const getTitle = () => {
        return title;
    }

    const getDescription = () => {
        return description;
    }

    const getDueDate = () => {
        return dueDate;
    }

    const getPriority = () => {
        return priority
    }

    return {
        setTitle,
        setDescription,
        setDueDate,
        setPriority,
        getTitle,
        getDescription,
        getDueDate,
        getPriority
    }
}