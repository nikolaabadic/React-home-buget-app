import Layout from './hoc/Layout/Layout'
import Account from './containers/Account/Account'
import NewPayment from './components/Payments/NewPayment/NewPayments';
import {Route} from 'react-router-dom'
import './assets/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Layout>
        <Route path="/new-payment" component={NewPayment}></Route>
        <Route path="/" exact component={Account}></Route>
      </Layout>
    </div>
  );
}

export default App;
