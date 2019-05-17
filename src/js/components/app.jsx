import React from 'react';

import MobileMenu from './mobile.menu';
import Header from './header';
import Intro from './intro';
import Experience from './experience';
import Studies from './studies';
import Projects from './projects';
import Footer from './footer';

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
