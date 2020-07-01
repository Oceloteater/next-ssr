import Link from 'next/link';

const Index = () => (
    <div>
        <h2>HOME PAGE</h2>
        <Link href="/about">
            <a>Go to about page</a>
        </Link>
    </div>
);

export default Index;