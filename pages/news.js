import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import Layout from '../components/Layout';
import fetch from 'isomorphic-fetch';

const News = ({ news }) => {
    const [query, setQuery] = useState('react');

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        Router.push(`/news?searchTerm=${query}`);
    };

    const searchArticles = () => (
        <form onSubmit={handleSubmit}>
            <input type="text" value={query} onChange={handleChange}></input>
            <button>Search</button>
        </form>
    );

    return (
        <Layout title="News">
            <div>
                <h2>List of headlines</h2>
                <hr/>
                { searchArticles() }
                <hr/>
                { news.hits.map((n, i) => (
                    <p key={i}>
                        <a href={n.url}>{n.title}</a>
                    </p>
                )) }
            </div>
        </Layout>
    )
};

//{ JSON.stringify(news) }


News.getInitialProps = async ({ query }) => {
    let news;
    try {
        //const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const res = await fetch(`https://hn.algolia.com/api/v1/search?query=${query.searchTerm}`);
        news = await res.json();
        console.log(news);
    } catch (error) {
        console.log(error);
        data = [];
    }
    return { news }
};

export default News;