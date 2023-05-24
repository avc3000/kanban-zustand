import './App.css'
import Column from './components/Column';

function App() {
  return (
    <div className='contentApp'>
      <div className='titleApp'>
        <h1>USE ZUSTAND WITH DRAG AND DROP</h1>
      </div>
      <div className='app'>
        <Column state="PLANNED" />
        <Column state="ONGOING" />
        <Column state="DONE" />     
      </div>
    </div>
  )
}

export default App;
