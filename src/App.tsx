import './App.css'
import ManageProduct from './ManageProduct'

export default function App() {
  return (
    <div>
      <ManageProduct />
      <button
        onClick={async () => {
          // const devices = await navigator.mediaDevices.enumerateDevices();
          // console.info(devices)

          const devices = (await navigator.mediaDevices.enumerateDevices())
            .filter(it => it.kind === 'videoinput')

          console.info(devices.map(it => it.label))
        }}
      >Click me</button>
    </div>
  )
}
