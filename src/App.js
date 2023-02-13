import logo from './logo.svg';
import './App.css';
import data from './components/data';
import Travel from './components/travel';

function App() {
  const travels =data.map((tra)=>{
    return(
      <Travel
    key= {tra.id}
    tra= {tra} />
    )
  })
  return (
    <section>
     {travels}
     </section>
  );
}

export default App;
