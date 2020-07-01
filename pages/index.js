import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/Nav';

const Index = () => (
    <div>
        <Head>
            <title>Home page</title>
            <meta name="description" content="SSR React with Next JS" />
            <meta name="keywords" content="react next ssr" />
            <meta name="author" content="Adam Carroll" />
        </Head>
    	<Nav />
        <h2>HOME PAGE</h2>
        <Link href="/about">
            <a>Go to about page</a>
        </Link>
    </div>
);

export default Index;