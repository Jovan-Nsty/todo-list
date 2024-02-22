export const createTodo = (title => {
    const titleName = title;
    const getTodoTitle = () => {
        return titleName;
    }

    return { getTodoTitle }
})