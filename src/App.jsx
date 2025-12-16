// 外部資源
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Modal } from 'bootstrap'

// 內部資源
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const modalRef = useRef(null)
  const customModal = useRef(null)

  // 運用解構的方式加入環境變數
  const { VITE_APP_PATH } = import.meta.env;

  // 匯入axios
  useEffect(() => {
    (async () => {
      const res = await axios.get(VITE_APP_PATH)
      console.log(res);

      // 在載入完axios後打開及關閉modal
      openModal()

      setTimeout(() => {
        closeModal()
      }, 2000);
    })()
  }, [])

  // 匯入bootstrap methods
  useEffect(() => {
    customModal.current = new Modal(modalRef.current);
    
  }, [])

  const openModal = () => {
    customModal.current.show();
  }
  const closeModal = () => {
    customModal.current.hide();
  }

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={() => openModal()}>
        Launch demo modal
      </button>

      <div className="modal fade" tabIndex="-1" ref={modalRef} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button className='btn btn-primary' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
