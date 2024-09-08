import { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: ''});

    const handleChange = (e) => {
        const { username, value } = e.target;
        setFormData(prevState => ({ ...prevState, [username]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="name"
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
            name="passowrd"
            value={password}
            onChange={handleChange} 
            />
            <button type="submit">Submit</button>
        </form>
    );
};


export default RegistrationForm;