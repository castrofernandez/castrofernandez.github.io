import React from 'react';

import MobileMenu from './Mobile.menu';
import Header from './Header';
import Intro from './Sections/Intro/Intro';
import Experience from './Sections/Experience/Experience';
import Studies from './Sections/Studies';
import Projects from './Sections/Projects';
import Footer from './Footer';

export default class App extends React.Component {
    render() {
        return (
            <main className="app">
                <MobileMenu />

                <div className="app-wrapper">
                    <div className="is-mobile">
                        <span id="mobile-breakpoint" />
                        <span id="tablet-breakpoint" />
                        <span id="tablet-landscape-breakpoint" />
                        <span id="small-desktop-breakpoint" />
                        <span id="desktop-breakpoint" />
                    </div>

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
