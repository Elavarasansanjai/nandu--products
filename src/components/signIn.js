import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from './store/script';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { Link, redirect, useNavigate } from 'react-router-dom';
// import { abdateStatus } from './store/script';
const SignIn = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const [passWord, setPassWord] = useState('');
  const [message, setMessage] = useState('');
  const [err, setErr] = useState(false);
  const users = useSelector(({ users }) => users.users);
  const status = useSelector(({ status }) => status.status);
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();

    let strRegex = new RegExp(/^[a-z]+$/i);
    let result = strRegex.test(name);
    setMessage(false);
    if (!result) {
      setErr(true);
      return;
    }
    setErr(false);

    const exists = users.find((item) => {
      if (item) {
        return item.name === name;
      }
    });

    console.log(exists ? exists.name === name : false);
    if (exists ? exists.name === name : false) {
      setMessage(true);
      return;
    }
    dispatch(
      signIn({
        name,
        passWord,
      })
    );
    navigate('/root');
  };
  return (
    <div className="signin-container">
      <div className="signin-form">
        <h1>SignIn page</h1>
        <form onSubmit={submitHandler} className="form">
          <div>
            <label>Name </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="enter your name"
            />
          </div>
          {err && <p style={{ color: 'red' }}>name must be strings</p>}
          <div>
            <label>Password </label>
            <input
              onChange={(e) => setPassWord(e.target.value)}
              type="password"
              placeholder="enter your password"
            />
          </div>
          <button>{status ? status : 'Submit'}</button>
        </form>
        {message && <p style={{ color: 'red' }}>user Already Exists</p>}
        <p>
          if you already have acount in Nandu Products{' '}
          <Link className="link" to="/login">
            go Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
