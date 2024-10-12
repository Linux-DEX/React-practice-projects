import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const BookLayout = () => {
    return (
            <>
                <Link to="/books/1">book 1</Link>
                <br />
                <Link to="/books/2">book 2</Link>
                <br />
                <Link to="/books/new">New Book</Link>
                <Outlet context={{ hello: "world"}} />
            </>
    )
}

export default BookLayout