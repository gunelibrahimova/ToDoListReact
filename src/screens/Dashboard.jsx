import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getUserAction } from '../redux/Actions/UserAction';

const Dashboard = () => {
  const {userInfo} = useSelector((state) => state.user)
  
  const dispach = useDispatch()

  useEffect(() =>{
    dispach(getUserAction())
  },[])
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                {userInfo.fullName}
              </h5>
              <p>Email</p>
              <span>{userInfo.email}</span>
            </div>
            <div className="card-footer"></div>
          </div>
        </div>
        <div className="col-lg-8">
        </div>
      </div>
    </div>
  )
}

export default Dashboard