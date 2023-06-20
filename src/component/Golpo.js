import AppRouter from '../Approuter';
import Container from 'react-bootstrap/Container';
import Footer from './Footer';
import Navigation from './Navigation';
import { BrowserRouter } from "react-router-dom";


export default function Golpo(){
    return(
        <div className="body">
            <BrowserRouter>
                <Navigation/>
                <Container>
                    <AppRouter/>
                </Container>
                <Footer/>
            </BrowserRouter>
        </div>
    ); 
}