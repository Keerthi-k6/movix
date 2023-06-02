import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieSummary from './components/MovieSummary';
import BookingForm from './components/BookingForm';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<MovieList/>} />
          <Route path="/summary/:id" element={<MovieSummary/>} />
          <Route path="/book" element={<BookingForm/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
