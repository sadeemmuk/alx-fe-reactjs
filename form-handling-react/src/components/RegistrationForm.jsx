import { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: ''});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        if(!username) {
           alert("Username is empty")
           return
        }
        if(!email) {
        alert("Email is empty")
        return
        }
        if(!password){
        alert("Password is empty")
        return
        }

    };

    const { username, email, password } = formData;



    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange} 
            />
            <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange} 
            />
            <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange} 
            />
            <button type="submit">Submit</button>
        </form>
    );
};


export default RegistrationForm;