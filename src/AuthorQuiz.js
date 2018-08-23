import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import PropValidation from './components/PropValidation';
import Hero from './components/Hero';
import Turn from './components/Turn';
import Continue from './components/Continue';
import Footer from './components/Footer';

function AuthorQuiz({ turnData }) {
  return (
    <div class="container-fluid">
      <Hero />
      <Turn {...turnData} />
      <Continue />
      {/* <PropValidation a={5} b={2} /> */}
      <Footer />
    </div >
  );
}

export default AuthorQuiz;
