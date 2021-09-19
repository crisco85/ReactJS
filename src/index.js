import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';


const Titulo = () => {
  return (
    <h1>Rincones de Nuestro Planeta</h1>
  );
}

const App = () => {
  return (
    <h2>Destinos</h2>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Titulo />
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
