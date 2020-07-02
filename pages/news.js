import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';
import fetch from 'isomorphic-fetch';

const News = ({ news }) => {
    return (
        <Layout title="News">
            <div>
                <h2>List of headlines</h2>
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


News.getInitialProps = async () => {
    let news;
    try {
        //const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const res = await fetch('https://hn.algolia.com/api/v1/search?query=react');
        news = await res.json();
        console.log(news);
    } catch (error) {
        console.log(error);
        data = [];
    }
    return { news }
};

export default News;