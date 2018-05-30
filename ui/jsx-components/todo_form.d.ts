/**
 * @author Calvin Feng
 */

import * as React from 'react'

declare interface TodoFormProps {
    handleSubmitTodo: (any) => void;
}

declare interface TodoFormState {
    name: string;
    description: string;
}

declare class TodoForm extends React.Component<TodoFormProps, TodoFormState> {}

export default TodoForm