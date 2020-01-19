import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers=
[
  {
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name':'홍길동',
  'birthday':'890418',
  'gender':'여자',
  'job':'developer'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name':'리정혁',
  'birthday':'890418',
  'gender':'남자',
  'job':'developer'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name':'손예진',
  'birthday':'890418',
  'gender':'여자',
  'job':'developer'
},

]

class App extends Component{
  render(){
    return (
      <div>
      {
          customers.map(c => {
            return(
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />)
          })
      }
     </div>
    );
  }
}
export default App;
