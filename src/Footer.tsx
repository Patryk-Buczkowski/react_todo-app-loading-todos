import { Todo } from './types/Todo';
import { Status } from './enums/status';
import cn from 'classnames';
import { useState } from 'react';

type Props = {
  todos: Todo[];
  isAnyCompleted: boolean;
};

export const Footer = ({ todos, isAnyCompleted }: Props) => {
  const [stat, setStat] = useState('All');
  const notActive = todos.reduce(
    (acc, todo) => (todo.completed === false ? acc + 1 : acc),
    0,
  );

  const handleDeleteActiv = () => {
    //delete all active
  };

  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {notActive} items left
      </span>

      <nav className="filter" data-cy="Filter">
        {Object.values(Status).map(status => (
          <a
            key={status}
            href={status === Status.all ? '#/' : `#/${status}`}
            className={cn('filter__link', { selected: stat === status })}
            data-cy={`FilterLink${status}`}
            onClick={() => setStat(status)}
          >
            {status}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        disabled={!isAnyCompleted}
        onClick={handleDeleteActiv}
      >
        Clear completed
      </button>
    </footer>
  );
};
