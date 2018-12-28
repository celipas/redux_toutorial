const toggleTodo = (todo) => {
    // return Object.assign({}, todo, {
    //     completed: !todo.completed
    // })
    return {
        ...todo,
        completed: !todo.completed
    }
}

const testToggelTodo = () => {
    const todoBefore = {
        id: 0,
        text: 'Learn Redux',
        completed: false
    };
    const todoAfter = {
        id: 0,
        text: 'Learn Redux',
        completed: true
    };

    deepFreeze(todoBefore)

    expect(
        toggleTodo(todoBefore)
    ).toEqual(todoAfter);

}
testToggelTodo()
console.log('passing toggel todo')
