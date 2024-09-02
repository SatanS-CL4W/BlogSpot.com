import React, { useState, useEffect } from 'react'
import Course from './Course';

function ViewBlogs() {

    useEffect(() => {
        document.title = "All-Blogs || Blogspot By Raunak";
    }, []);
    const [blogs] = useState([
        {title: "My Diary of summer" , description: "Heloo my world is in your world thanks for having me."},
        {title: "Agent Vinod" , description: "Best cameo played by shaif ali kahan  too goood."},
        {title: "Kalki: 2898 AD" , description: "Prabhas played role of kaal bhairava,  and aswatthama role played by amitabh bachhan."},
        {title: "Maharaja" , description: "Awesome Screenplay palyed by vijay south indian actor."}

    ])
    return (
        <>
            <div>
                <h1 className='display-3 text-center'>All Blogs</h1>
                {
                    blogs.length>0 ? blogs.map((item) => <Course course={item} />) : "No Course Found"
                }
            </div>
        </>
    );
}

export default ViewBlogs;