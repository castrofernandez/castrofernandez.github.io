import React from 'react';

import MobileMenu from './Header/Mobile.menu';
import Header from './Header/Header';
import Intro from './Sections/Intro/Intro';
import Experience from './Sections/Experience/Experience';
import Studies from './Sections/Studies/Studies';
import Projects from './Sections/Projects/Projects';
import Footer from './Sections/Footer';
import ScrollStyle from '../styles/scroll';

export default class App extends React.Component {
    render() {
        return (
            <main className="app">
                <ScrollStyle />
                <MobileMenu />
                <div className="app-wrapper">
                    <Header />
                    <Intro />
                    <Experience />
                    <Studies />
                    <Projects />
                    <Footer />
                </div>
            </main>
        );
    }
}
