import React from 'react';

const Blogs = () => {
    return (
        <div className='b-5 p-5'>
            <div>
                <h2 className='text-2xl'>How will you improve the performance of a React Application? </h2>
                <p className='pt-3'>Internally, React uses several clever techniques to minimize the number of costly DOM operations required to update the UI. While this will lead to a faster user interface without specifically optimizing for performance for many cases, there are ways where you can still speed up your React application. This post will go over some useful techniques you can use to improve your React code.Efficient React Components: A Guide to Optimizing React Performance · Speed up your React app by optimizing your components' render-diff process. </p>
            </div>
            <br />
            <div>
                <h2 className='text-2xl'>What are the different ways to manage a state in a React application? </h2>
                <p className='pt-3'>There are four main types of state you need to properly manage in your React apps:<br />Local state,<br /> Global state <br />,Server state,<br /> URL state.<br />
                State management in React has been a hotly debated topic for years, yet little attention seems to be paid to enterprise-level applications and their specific requirements. Let’s take a closer look and compare three of the most popular state management tools available today.
                </p>
            </div>
            <br />
            <div>
                <h2 className='text-2xl'>How does prototypical inheritance work? </h2>
                <p className='pt-3'>JWT stands for JSON WEB TOKEN, jwt is an open standard used to share security information between two parties client and server. JWT can be used for an authentication system and can also be used for information exchange. The token is mainly composed of header, payload, signature speared by three dots. JWT defines the structure of information we are sending from one party to the another. The approach is mainly used to transfer the data through the network with each request and response.Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes </p>
            </div>
            <br />
            <div>
                <h2 className='text-2xl'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts </h2>
                <p className='pt-3'>A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components. We’ll learn other Hooks later.
                     It returns a pair of values: the current state and a function that updates it. This is why we write const [count, setCount] = useState(). This is similar to this.state.count and this.setState in a class, except you get them in a pair. If you’re not familiar with the syntax we used, we’ll come back to it at the bottom of this page. </p>
            </div>
            <br />
            <div>
                <h2 className='text-2xl'>What is a unit test? Why should write unit tests? </h2>
                <p className='pt-3'>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.Why should we write unit tests?
Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently. </p>
            </div>
        </div>
    );
};

export default Blogs;