import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('white')
  function changeColor(color) {
    setColor(color)
  }
  return (
    <>
      <div className='bg-amber-50 w-full h-screen duration-200' style={{ backgroundColor: color }}>
        <h1 className='text-3xl bg-amber-300 border-b-2 border'>let's play : Color Clash</h1>
        <div className='absolute flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg  py-2 rounded-3xl bg-white'>
            <button
              onClick={() => changeColor('white')}
              className='outline-none px-4 py-1 rounded-full shadow-lg text-black '
              style={{ backgroundColor: 'grey' }}>
              none
            </button>
            <button
              onClick={() => changeColor('red')}
              className='outline-none px-4 py-1 rounded-full shadow-lg text-black '
              style={{ backgroundColor: 'red' }}>
              red
            </button>
            <button
              onClick={() => changeColor('green')}
              className='outline-none px-4 py-1 rounded-full shadow-lg text-black '
              style={{ backgroundColor: 'green' }}>
              green
            </button>
            <button
              onClick={() => changeColor('violet')}
              className='outline-none px-4 py-1 rounded-full shadow-lg text-black '
              style={{ backgroundColor: 'violet' }}>
              violet
            </button>
            <button
              onClick={() => changeColor('blue')}
              className='outline-none px-4 py-1 rounded-full shadow-lg text-black '
              style={{ backgroundColor: 'blue' }}>
              blue
            </button>
            <button
              onClick={() => changeColor('yellow')}
              className='outline-none px-4 py-1 rounded-full shadow-lg text-black '
              style={{ backgroundColor: 'yellow' }}>
              yellow
            </button>
            <button
              onClick={() => changeColor('orange')}
              className='outline-none px-4 py-1 rounded-full shadow-lg text-black '
              style={{ backgroundColor: 'orange' }}>
              orange
            </button>


          </div>
        </div>
      </div>
    </>
  )
}

export default App
