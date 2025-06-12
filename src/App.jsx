import { BrowserRouter as Router } from 'react-router-dom';
import GetRoutes from "./router/GetRoutes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollToTop from './hooks/ScrollToTop';

function App() {
    return (
        <>
            <Router>
                <ScrollToTop />
                <Header />
                <GetRoutes />
                <Footer />
            </Router>
        </>
    )
}

export default App
