import { BrowserRouter, HashRouter } from 'react-router-dom';

// fix routing on github pages
// for BrowserRouter server for all request should return index page
export default function EnvSpecificRouter({ children }) {
	const Router = process.env.REACT_APP_HASH_ROUTER === 'true' ? HashRouter : BrowserRouter;
	return <Router basename={process.env.REACT_APP_HASH_ROUTER === 'true' ? undefined : process.env.PUBLIC_URL}>{children}</Router>;
}
