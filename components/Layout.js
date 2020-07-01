import Nav from './Nav';

const Layout = ({ title, children, footer }) => (
    <div>
        <Nav/>
        <h1>{ title }</h1>
        <hr/>
        { children }
        <hr/>
        <h4>{ footer }</h4>
    </div>
);

export default Layout;