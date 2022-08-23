import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserAction } from '../../redux/Actions/UserAction'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const { userInfo } = useSelector((state) => state.user)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const dispach = useDispatch() 

  const loginHandler = () => {
    dispach(loginUserAction(email, password))
  }
  useEffect(() => {
  }, [navigate])


  if (userInfo.length !== 0) {
    navigate("/dashboard")
  }


  return (
    <div className='container'>
      <div className="row">
        <div className="col-lg-8 m-auto">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-center">
                Login
              </h4>
            </div>
            <div className="card-footer">
              <div>
                <label>Email</label>
                <input onChange={(e) => setEmail(e.target.value)} className='form-control' type="text" />
              </div>
              <div>
                <label>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} className='form-control' type="password" />
              </div>
              <div className='my-2'>
                <button onClick={() => loginHandler()} className='btn btn-outline-success'>Daxil ol</button>
                <button onClick={() => navigate("/register")} className='btn btn-outline-success'>Qeydiyyatdan kec</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login