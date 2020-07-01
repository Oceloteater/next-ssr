import Link from 'next/link';
import Nav from '../components/Nav';

const About = () => (
    <div>
    	<Nav />
        <h2>ABOUT PAGE</h2>
	    <Link href="/">
	        <a>Go to index page</a>
	    </Link>
    </div>
);

export default About;