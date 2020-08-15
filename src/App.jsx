import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TerminalReplica from './components/TerminalReplica.jsx';
import FaqQuestion from './components/FaqQuestion.jsx'

import { Element, scroller, animateScroll } from 'react-scroll';


function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-md navbar-light fixed-top">
        <div className="container-fluid">
          <div className="navbar-brand" href="#">
            <img className="navbar-brand" src="logo192.png" width="40" />
            TitanCodes
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" onClick={animateScroll.scrollToTop}> Home </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => scroll("faq")}> FAQ </a>
              </li>
              <li className="nav-item">
              <a className="nav-link" onClick={() => scroll("sponsors")}> Sponsors </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid display">
        <TerminalReplica />
      </div>
      <svg className="wave1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" d="M0,192L60,202.7C120,213,240,235,360,218.7C480,203,600,149,720,149.3C840,149,960,203,1080,218.7C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      <div className="container-fluid main section">

        <div className="content">
          <h1> About </h1>
          <p>
            TitanCodes is a programming competition for California State University, Fullerton students being held on September 19th.
            The event will have 20 teams of 4 competing for cash prizes.
            The event will consist of a competition phase including a lunch followed by a career fair with the sponsors and other companies.
          </p>
        </div>

        <Element name="faq" />
        <div className="content">
          <h1> FAQ </h1>
          <FaqQuestion
            question="How do I find a team?"
            answer="You can sign up with up as an independent or as any team size up to 4 people.
            Whether you sign up independent or as a group you will be placed into a full sized group
            before the competition starts. We will also be hosting a team finding meeting for independents or
            partial groups to find teamates before the competition so they do not receive random teamates."
          />
          <FaqQuestion
            question="Question 2?"
            answer="Answer to Question 2 that has enough text to expand to several lines instead of just one"
          />
          <FaqQuestion
            question="Question 3?"
            answer="Answer to Question 3 that has enough text to expand to several lines instead of just one"
          />
          <FaqQuestion
            question="Question 4?"
            answer="Answer to Question 4 that has enough text to expand to several lines instead of just one"
          />
          <FaqQuestion
            question="Question 5?"
            answer="Answer to Question 5 that has enough text to expand to several lines instead of just one"
          />
          <FaqQuestion
            question="Question 6?"
            answer="Answer to Question 6 that has enough text to expand to several lines instead of just one"
          />
        </div>
      </div>
      <svg className="wave2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" d="M0,256L48,234.7C96,213,192,171,288,154.7C384,139,480,149,576,176C672,203,768,245,864,256C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      <div className="container-fluid second section">
        <Element name="sponsors" />
        <div className="content">
          <h1 className="big"> Sponsors </h1>
          <p>If  you'd like to sponsor the event, please contact info@titan.codes</p>
        </div>
      </div>
      <footer>
        <div className="container-fluid">
          <div>
            <a href="https://github.com/AaronLieb/titan_codes">
              <svg className="icon" width="40" role="img" fill="#eee" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
          </div>
          <div>
            Made with ❤️ by &nbsp;
            <a className="link" href="https://github.com/AaronLieb" target="_blank">
              @AaronLieb
            </a>
            &nbsp; and &nbsp;
            <a className="link" href="https://github.com/EthanThatOneKid" target="_blank">
              @EthanThatOneKid
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helpers
const scroll = anchor => {
  scroller.scrollTo(anchor, {
    duration: 1500,
    delay: 100,
    smooth: true,
    offset: -170
  });
};

export default App;
