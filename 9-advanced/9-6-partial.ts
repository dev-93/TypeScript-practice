{
    type ToDo = {
        title: string;
        description: string;
        label: string;
        priority: 'high' | 'low';
    };

    function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
        return {...todo, ...fieldsToUpdate}
    };

    const todo: ToDo = {
        title: 'practice',
        description: 'study partial',
        label: 'study',
        priority: 'high',
    };

    const updated = updateTodo(todo, {priority: 'low'});
    console.log(updated);
    // {
    //     title: 'practice',
    //     description: 'study partial',
    //     label: 'study',
    //     priority: 'low'
    //   }
}