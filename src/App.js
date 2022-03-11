import React from "react";
import { observer } from 'mobx-react-lite'

const App = observer((props) => {
  return (
    <div>
      <h1>Contador</h1>
      <p>Valor: {props.store.count}</p>
      <button type="button" onClick={() => props.store.increment()}>Incrementar</button>
      <button type="button" onClick={() => props.store.decrement()}>Decrementar</button>
    </div>
  )
})

export default App;