import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { multipartFetchExchange } from '@urql/exchange-multipart-fetch';
import { cacheExchange, createClient, dedupExchange, Provider } from 'urql';

const client = createClient({
  url: "http://localhost:4000",
  exchanges: [dedupExchange, cacheExchange, multipartFetchExchange]
});

ReactDOM.render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
