import React from 'react';
import { Link } from 'react-router-dom';

const SingleBook = ({ book }) => {
    return (
        <Link to={book.isbn13}>
            <div className="overflow-hidden relative transition duration-200 hover:-translate-y-2 rounded-lg lg:shadow-2xl ">
                <img className='object-cover w-full h-56 md:h-64 lg:h-80' src={book.image} alt="book cover" />
                <div className='p-6 bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200 flex flex-col '>
                    <p>{book.title} </p>
                    <br />
                    <p>{book.subtitle.substring(0, 40)}...</p>
                    <br />
                    <p className='mt-auto'>Price: ${book.price}</p>
                </div>
            </div>
        </Link>
    );
};

export default SingleBook;