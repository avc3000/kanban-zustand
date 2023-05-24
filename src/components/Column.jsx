import { useStore } from '../store';
import { useState } from 'react';
import './Column.css';
import Task from './Task';
import classNames from 'classnames';

const Column = ({ state }) => {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const tasks = useStore((store) => store.tasks.filter((task) => task.state === state));
  const addTask = useStore((store) => store.addTask);
  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const draggedTask = useStore((store) => store.draggedTask);
  const moveTask = useStore((store) => store.moveTask);

  return (
    <div className={classNames("column", { drop: drop })} onDragOver={(e)=> { setDrop(true); e.preventDefault(); }} onDragLeave={(e) => { setDrop(false); e.preventDefault(); }} onDrop={() => { setDrop(false); moveTask(draggedTask, state); setDraggedTask(null); }}>
      <div className='titleWrapper'>
        <p className='state'>{state}</p>
        {
          state === 'PLANNED' && (<button onClick={() => setOpen(true)}>ADD</button>)
        }
      </div>
      {
        tasks.map((task, index) => (
          <Task key={index} title={task.title} />
        ))
      }
      {
        open && (
          <div className='modal'>
            <div className='modalContent'>
              <input className='textModal' placeholder='Task ...' type="text" onChange={(e) => setText(e.target.value)} value={text} />
              <button className='buttonModal' onClick={() => { addTask(text, state); setText(''); setOpen(false); }}>SAVE</button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Column;