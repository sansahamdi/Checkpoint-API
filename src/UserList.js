import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

const UserList = () => {

    const [listOfUSer, setListOfUSer] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setTimeout(() => {
                    setListOfUSer(res.data)
                    setLoading(false)
                }, 2000)
            })
    }, [setListOfUSer])
    return (
        <div className='users'>
            <ul className='card my-card mt-5 ml-3 pt-3 pb-3'>
                <h1 className='container'>List of users</h1>
                {loading &&
                    <h2>Chargement....</h2>}
                {!loading &&
                    <>
                        {listOfUSer.map(el => (
                            <li className='animation row border mr-3' key={el.id}>{el.name}</li>
                        ))}
                    </>
                }

            </ul>
        </div>
    )
}

export default UserList

