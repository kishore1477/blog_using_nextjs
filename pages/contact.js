import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'

const contact = () => {
    // write sum of two number
    const [name, setname] = useState('');

    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [desc, setdesc] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, phone, desc)
        const data = { name, email, phone, desc };

        fetch('http://localhost:3000/api/postContact/', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        // .then(response => response.text())
        .then(data => {
          console.log('Success: is .. ', data);
          alert("Thanks for contact us");
          setname('');
          setemail('');
          setphone('');
          setdesc('');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
                
                
        
                  
        
                
        
                
              
    }
    const handleChange = (e) => {
        console.log(e, "Change")
        if (e.target.name === 'name') {
            setname(e.target.value)
            console.log(name)
        }
        else if (e.target.name === 'phone') {
            setphone(e.target.value)
        }
        else if (e.target.name === 'email') {
            setemail(e.target.value)
        } 
        else if (e.target.name === 'desc') {
            setdesc(e.target.value)
        } 
    }
    return (
        <div className={styles.container}>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.mb3}>

                    <label htmlFor="name" className={styles.label}>Enter your name</label>
                    <input type="text" onChange={handleChange} value={name} className="form-control" id="name"  name="name" aria-describedby="emailHelp" />
                </div>
                <div className={styles.mb3}>

                    <label htmlFor="email" className={styles.label}>Email address</label>
                    <input type="email" value={email} onChange={handleChange} className="form-control" id="email" name='email' aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className={styles.mb3}>
                    <label htmlFor="phone" className={styles.label}>Phone</label>
                    <input type="phone" value={phone} onChange={handleChange} className="form-control" id="phone" name='phone' />
                </div>
                <div className={styles.mb3}>
                    <label htmlFor="desc" className={styles.label}>Elaborate your concern</label>
                    <textarea type="phone" value={desc} onChange={handleChange} className="form-control" id="desc" name='desc' />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default contact
