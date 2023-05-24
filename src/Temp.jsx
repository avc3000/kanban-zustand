import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const Temp = ({ state }) => {
  useStore((store) => store.tasks.filter((task) => task.state === state), shallow);
}

export default Temp;