import logo from './logo.svg';
import './App.css';
// import HelloWorld from './HelloWorld';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
function App() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState('du');

  const onIncreaseAge = () => {
    setAge(age + 1);
  };

  const DemoComponent = (props) => {
    return (
      <div>
        <div>Đây là tuổi: {props.age}</div>
        <div>Đây là tên: {props.displayName}</div>
      </div>
    );
  };
  return (
    <div>
    <Header/>
    <Footer/>
    <div>
        <div className='container'>
          <div>{age}</div>
          <div onClick={onIncreaseAge}>Tăng age lên 1</div>
          <DemoComponent age={age} displayName={name} />
        </div>
      </div>
    </div>
  );
}

export default App;
