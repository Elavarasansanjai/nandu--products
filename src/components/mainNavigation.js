import React, { useEffect, useState } from 'react';
import { UseSelector } from 'react-redux/es/hooks/useSelector';
import { useSelector } from 'react-redux';
import { abdateUser } from './store/script';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MdShoppingBasket } from 'react-icons/md';
import { abdateCurentUser } from './store/script';
import style from '../style.scss';
import { color } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const MainNavigation = () => {
  const cartDispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  // useEffect(() => {
  //   const sendData = async () => {
  //     try {
  //       const res = await fetch(
  //         'https://sanjeev-dd151-default-rtdb.firebaseio.com/prodectcart.json',
  //         {
  //           body: JSON.stringify({ name: users }),
  //           method: 'PUT',
  //           headers: {
  //             'content-type': 'application/json',
  //           },
  //         }
  //       );

  //       const data = await res.json();
  //       console.log(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   sendData();
  // }, [users]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(
  //         'https://sanjeev-dd151-default-rtdb.firebaseio.com/prodectcart.json'
  //       );

  //       if (!res.ok) {
  //         console.log('err');
  //       }
  //       const data = await res.json();
  //       console.log(data.name);

  //       cartDispatch(abdateUser(data.name));

  //       // userDispatch(abdateCurentUser(getCurentUser));
  //     } catch {
  //       console.log('err');
  //     }
  //   };
  //   fetchData();
  // }, [cartDispatch]);
  // const getCurentUser = JSON.parse(localStorage.getItem('curentuser'));

  // const userDispatch = useDispatch();

  // const [quantity,setQuantity]=useState(JSON.parse(localStorage.getItem('curentuser')).cart
  // .totalQuantity)
  // const totalQuantity = JSON.parse(localStorage.getItem('curentuser')).cart
  //   .totalQuantity;
  //   useEffect(()=>{
  //        setQuantity()
  //   },[totalQuantity])
  const navigate = useNavigate();
  const totalQuantity = useSelector(
    ({ users }) => users.curentUser.cart.totalQuantity
  );
  const userName = useSelector(({ users }) => users.curentUser.name);
  return (
    <div className="navigation">
      <div className="logo">
        <h1
          onClick={() => {
            navigate('/root');
          }}
        >
          Nandu products
        </h1>
      </div>
      <div className="pages">
        <div className="links">
          <ul>
            <NavLink
              to="/root"
              style={({ isActive }) =>
                isActive
                  ? { color: 'red', textDecoration: 'none' }
                  : { color: 'black', textDecoration: 'none' }
              }
              end
            >
              <li className="link mob"> Home </li>
            </NavLink>
          </ul>

          <Link
            to="/root/cart"
            style={{
              textDecoration: 'none',
              color: 'white',
              padding: '4px',
              backgroundColor: 'rgb(19, 18, 18)',
              border: '0.4px solid white',
            }}
          >
            <div className="carticon">
              <div>
                <h2 className="cart-icon">
                  <MdShoppingBasket />
                </h2>
              </div>
              <div className="quantity">
                <p className="showQuantity">{totalQuantity}</p>
              </div>
            </div>
          </Link>

          <Link
            to="/root/profile"
            style={{ textDecoration: 'none', color: 'blue' }}
          >
            {userName}
          </Link>
          <p className="mob">
            <Link
              style={{ color: 'black', textDecoration: 'none' }}
              to="/root/additem"
            >
              AddProduct
            </Link>
          </p>
          {/* <Link to="/">signin</Link> * */}
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
