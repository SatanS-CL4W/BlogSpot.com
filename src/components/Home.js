import React, { useEffect } from 'react';
//import { Jumbotron } from "react-toastify";
import { Container, Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';


const Home = () => {
    const btnHandle1 = () => {
        toast.info("Work Under progress!!!", {
            position: "top-right"
        });
    }

    useEffect(() => {
        document.title = "Home || Blogspot by Raunak";
    }, []);
    return (
        <>
            <div className='text-center mb-4 mx-auto'>
                <div className='bg-light'>
                    <h1 className='display-3'>Welcome to My Blog!!!</h1>
                    <p>Welcome to [Blogspot By Raunak]

                        Welcome to [Blogspot By Raunak], your go-to destination for insightful, informative, and engaging content on [Domain specific Blogs]]. Whether you're here to learn, be inspired, or simply explore new ideas, you've come to the right place. Our blog is dedicated to bringing you well-researched articles, expert opinions, and practical tips that cater to both beginners and seasoned enthusiasts alike.

                        <hr />
                        <b>What We Offer?</b><br /><br />

                        At [Blogspot By Raunak], we believe in the power of knowledge and the impact it can have on our lives. Our content spans a wide range of topics, including [mention a few key topics or categories your blog covers]. We aim to provide content that is not only informative but also actionable, helping you apply what you learn in your daily life or work.

                        Our articles are carefully crafted by a team of passionate writers, industry experts, and thought leaders who are committed to sharing their insights and experiences with you. We strive to ensure that every piece of content is accurate, up-to-date, and valuable, so you can trust the information you find here.

                        <hr />
                        <b>Why [Blogspot By Raunak]?</b><br /><br />

                        In today’s fast-paced digital world, we understand that your time is precious. That’s why we focus on delivering content that is concise, clear, and to the point. We cut through the noise to bring you only the most relevant information, ensuring that you can make informed decisions without having to wade through endless articles and sources.

                        But we’re more than just a blog—we’re a community. We encourage you to engage with our content by leaving comments, sharing your thoughts, and connecting with like-minded individuals. Whether you agree, disagree, or have your own unique perspective to add, your voice matters here.

                        Join Our Journey

                        We’re excited to have you join us on this journey of exploration and discovery. Whether you’re here for a quick read or plan to dive deep into our extensive archives, we hope you find our content enriching and worth your time. Be sure to subscribe to our newsletter to stay updated with the latest posts, and follow us on social media to join the conversation.

                        Thank you for visiting [Blogspot By Raunak]. We look forward to sharing this adventure with you!</p>
                    <ToastContainer />
                    <Container>
                        <Button className='my-6 p-2 mb-2' color='primary' onClick={btnHandle1}>Know more</Button>
                    </Container>
                </div>

            </div>
        </>
    );
}

export default Home;