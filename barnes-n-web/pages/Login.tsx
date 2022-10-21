import Header from "./components/Header";


const Login = () => {
  return (
    <div className='page'>

        {/* Header Component */}
        <Header />

        {/* Login Section */}
        <div className='loginBox'>

          {/* Login Text */}
          <div className='LoginText'>
            <p style={{position:'relative', textAlign:'center', top:'40px', fontSize:'50px', height:'45px'}}>Login</p>
          </div>

          {/* New User Link + Underline */}
          <div className='NewUser'>
            <p style={{position:'relative', textAlign:'center', top:'55px', fontSize:'17px', height:'0px'}}>
              <a href='' style={{textDecoration: 'none', color:'black'}}>New User? Sign Up</a>
            </p>
            <p style={{position:'relative', textAlign:'center', left: '155px',top:'65px', fontSize:'15px', height:'10px', borderTop: '1px solid', width: '180px'}}></p>
          </div>

          <div className='LoginForm'>
            <form>
              {/* Email Box */}
              <label style={{position:'relative', textAlign:'left', left:'90px' , top:'70px', fontSize:'15px', height:'10px'}}>
                <input type="text" name="email" placeholder="Email" style={{width: '300px'}}/>
              </label>

              {/* Password Box */}
              <label style={{position:'relative', textAlign:'left', left:'90px' , top:'110px', fontSize:'15px', height:'10px'}}>
                <input type="password" name="password" placeholder="Password" style={{width: '300px'}}/>
              </label>

              {/* Forgot Password Link */}
              <p style={{position:'relative', textAlign:'left',left:'90px' , top:'115px', fontSize:'15px', height:'10px'}}>
                <a href=''  style={{textDecoration: 'none', color:'black'}}>Forgot Password?</a>
              </p>

              {/* Submit Button */}
              <input style={{position:'relative', textAlign:'center', left:'170px' , top:'150px', fontSize:'15px', height:'40px', width:'150px', background:'#FB8500', borderRadius: 
              '25px'}} type="submit" value="Submit" />

            </form>
          </div>
        </div>

    </div>
  )
}

export default Login