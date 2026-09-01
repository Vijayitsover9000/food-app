import React from 'react';
import { createRoot } from 'react-dom/client';
import logoImg from 'url:./images/logo-img.png';

const Logo = () =>{
    return (
        <img className='logo' src={logoImg} alt='Logo'/>
    )
}
const NavItemComponent = () => {
    return (
        <div className='nav-item-container'>
            <div>Home</div>
            <div>About Us</div>
            <div>Contact</div>
            <div>Email</div>
        </div>
    )
}
const Header = () => {
    return (
        <div className='header'>
            <Logo/>
            <NavItemComponent/>
        </div>
    )
}
const AppComponent = () =>(
    <>
        <Header />
        {/* <BodyComponent />
        <Footer /> */}
    </>
)
const root = createRoot(document.getElementById('root'));
root.render(<AppComponent/>);