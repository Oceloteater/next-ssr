import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';

const Index = () => (
    <Layout title="My Next App" footer="Fin">
        <Head>
            <title>Home page</title>
        </Head>
        <h2>HOME PAGE</h2>
        <Link href="/about">
            <a>Go to about page</a>
        </Link>
    </Layout>
);

export default Index;