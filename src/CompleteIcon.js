import React from 'react';
import { TodoIcon } from './TodoIcon';

function CompleteIcon({ completed, onComplete }) {
    return (
        <TodoIcon
            type="check"
            color={completed ? 'green' : 'gray'} //condicional (si completed es tru el color sera green y si no sera gray)
            onClick={onComplete}
        />
    );
}

export { CompleteIcon };