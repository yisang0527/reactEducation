import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './App';
// import Library from './chapter_03/Library';
// import Family from './family/Parent';
// import Clock from './clock/Clock';
// import CommentList from './chapter_05/CommentList';
// import NotificationList from './chapter_06/NotificationList';
// import Counter from './counter/Counter';
// import NameInput from './chapter_06/NameInput';
// import Total from './chapter_06/Total';
// import MovieList from './Movie/MovieList';
// import UseMemoEx from './chapter_07/UseMemoEx';
// import TextInputWithFocusButton from './chapter_07/TextInputWithFocusButton';
// import MeasureExample from './chapter_07/MeasureExample';
// import Accommodate from './chapter_07/Accommodate';
// import Toggle from './chapter_08/Toggle';
// import MyButton from './chapter_08/MyButton'
// import ConfirmButton from './chapter_08/ConfirmButton';
// import LandingPage from './chapter_09/LandingPage';
// import AttendanceBook from './chapter_10/AttendanceBook';
import SignUp from './chapter_11/SighUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SignUp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
