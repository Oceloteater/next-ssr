import Link from 'next/link';
import Layout from '../components/Layout';

const About = () => (
	<Layout title="My Next App" footer="Fin">
        <h2>ABOUT PAGE</h2>
	    <Link href="/">
	        <a>Go to index page</a>
	    </Link>
    </Layout>
);

export default About;