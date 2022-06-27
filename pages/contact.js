import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'

const Contact = () => {
    // write sum of two number
    const [name, setname] = useState("");

    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [desc, setdesc] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = { name, email, phone, desc };

        fetch('http://localhost:3000/api/postContact/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        // .then(response => response.text())
        .then(data => {
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
        if (e.target.name === 'name') {
            setname(e.target.value)
        }
        else if (e.target.name === 'phone') {
            setphone(e.target.value)
        }
        else if (e.target.name === 'email') {
            setemail(e.target.value)
        } 
        else  {
            setdesc(e.target.value)
        } 
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.mb3}>

                    <label htmlFor="name" className={styles.label}>Enter your name</label> <br/>
                    <input type="text" onChange={handleChange} value={name} className={styles.input} id="name"  name="name" />
                </div>
                <div className={styles.mb3}>

                    <label htmlFor="email" className={styles.label}>Email address</label><br/>
                    <input type="email" value={email} onChange={handleChange} className={styles.input} id="email" name='email'  />
                    <div id="emailHelp" className={styles.emil}>We'll never share your email with anyone else.</div>
                </div>
                <div className={styles.mb3}>
                    <label htmlFor="phone" className={styles.label}>Phone</label><br/>
                    <input type="phone" value={phone} onChange={handleChange} className={styles.input} id="phone" name='phone' />
                </div>
                <div className={styles.mb3}>
                    <label htmlFor="desc" className={styles.label}>Elaborate your concern</label><br/>
                    <textarea type="text" value={desc} onChange={handleChange}    className={styles.desc} id="desc" name='desc' />
                </div>

                <button type="submit" className={styles.btn}>Submit</button>
            </form>
        </div>
    )
}

export default Contact
