import { useState } from 'react';
import './App.css';
import CardsForm from './components/CardsForm';
import DataTable from './components/DataTable';
import logo from './assets/Logo.svg'

function App() {
  const [data, setData] = useState([])

  function splitCardNumber(number) {
    let newStr = '';
    for (let i = 0; i < number.length; i++) {
      newStr += (i % 4 === 0 && i !== 0 ? ' ' : '') + number[i];
    }
    return newStr
  }

  const rows = data.map(({ month, year, name, number, code }) => ({
    name: name.split(' ').map(el => el[0].toUpperCase() + el.substr(1)).join(' '),
    number: splitCardNumber(number),
    date: `${month}/${year}`,
    code: `**${code[2]}`
  }))
  console.log(rows);

  return (
    <div className='app'>
      <div className='container'>
        <div className='form_logo'>
          <CardsForm data={data} setData={setData} />
          <img className='logo' src={logo} alt="" />
        </div>
        <DataTable rows={rows} />
      </div>
    </div>
  );
}

export default App;
