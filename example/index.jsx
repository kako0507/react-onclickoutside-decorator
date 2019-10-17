/* eslint-disable max-classes-per-file */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import GithubCorner from 'react-github-corner';
import ReactMarkDown from 'react-markdown';
import Modal from './modal';
import Readme from '../README.md';
import './app.scss';

const App = () => {
  const [show, setShow] = useState(false);
  const openModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
    alert('onClickOutside event has been triggered');
  };
  return (
    <>
      <GithubCorner
        href="https://github.com/kako0507/react-onclickoutside-decorator"
        octoColor="#64ceaa"
        bannerColor="#257459"
      />
      <section className="hero is-medium is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-1">
              React OnClickOutside Decorator
            </h1>
            <h2 className="subtitle">
              An onClickOutside decorator for React components
            </h2>
          </div>
        </div>
      </section>
      <section className="section has-background-white is-small">
        <div className="container is-small">
          <div className="columns is-mobile is-centered">
            <button
              type="button"
              className="button is-large"
              onClick={openModal}
            >
              Demo
            </button>
          </div>
          <ReactMarkDown className="content" source={Readme} />
        </div>
      </section>
      <Modal onClickOutside={closeModal} show={show} />
    </>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('main'),
);
