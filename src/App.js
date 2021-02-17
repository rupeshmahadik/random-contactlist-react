import './App.css';
import ContactList from './components/ContactList'
import React,{useState,useEffect} from 'react'

// const contacts = [
//     { name: "Jenny Han", email: "jenny.han@notreal.com", age: 25 },
//     { name: "Jason Long", email: "jason.long@notreal.com", age: 45 },
//     { name: "Peter Pan", email: "peter.pan@neverland.com", age: 100 }
// ];

function App() {
	const handleClick = ()=>{
		console.log('clicked')
	}
	const [contacts, setContacts] = useState([])

	useEffect(()=>{
		fetch("https://randomuser.me/api/?results=3")
		.then(res =>res.json())
		.then(data => {
			setContacts(data.results)
		})
	},[])	
  return (
    <div className="App">
      <h2>Contact List</h2>
      {contacts.map(contact =>(
      	<ContactList
      		avatar={contact.picture.large}
      		name={contact.name.first + "" + contact.name.last}
      		email={contact.email}
      		age={contact.dob.age}
      		key={contact.id.value}
      	 />
      	))}
     <h2 onClick={handleClick} >Click</h2>
    </div>
  );
}

export default App;
