import React,{useState} from 'react'
import '../App.css'

const ContactList = (props) => {
	const [showAge, setShowAge] = useState(false)

	console.log(props.avatar); 
	console.log(props.name);
	console.log(props.email);
	console.log(props.age);


	return (
		<div>
			<div className="contact-card">
				<img src={props.avatar} alt="Profile"/>
			
			<div className="user-details">
				<p>Name: {props.name}</p>
				<p>Email: {props.email}</p>
				<button onClick={()=> setShowAge(!showAge)}>Show Age</button>
				{ showAge && <p>Age: {props.age}</p>}
			</div>
			</div>

		</div>
	)
}

export default ContactList