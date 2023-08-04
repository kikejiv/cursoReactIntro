import React from 'react';
import { TodoIcon } from './index';

function CompleteIcon({ completed, onComplete }) {
    return (
        <TodoIcon
            type="check"
            color={completed ? 'limegreen' : 'gray'} //condicional (si completed es tru el color sera green y si no sera gray)
            onClick={onComplete}
        />
    );
}

export { CompleteIcon };