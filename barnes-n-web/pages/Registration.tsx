import Header from "./components/Header";
import StateDropdown from "./components/StateDropdown"


const Login = () => {
  return (
    <div className='page'>

        {/* Header Component */}
        <Header />

        {/* Registration Section */}
        <div className='registrationBox'>

          {/* Registration Text */}
          <div className='RegistrationText'>
            <p style={{position:'relative', textAlign:'center', top:'10px', fontSize:'40px', height:'45px'}}>Registration</p>
          </div>

          <div className='RegistrationForm'>
            <form>
              {/* Username Box */}
              <label style={{position:'relative', textAlign:'left', left:'90px' , top:'20px', fontSize:'15px', height:'10px'}}>
                <input type="text" name="username" placeholder="Username" style={{width: '300px'}}/>
              </label>

              {/* Password Box */}
              <label style={{position:'relative', textAlign:'left', left:'90px' , top:'30px', fontSize:'15px', height:'10px'}}>
                <input type="password" name="password" placeholder="Password" style={{width: '300px'}}/>
              </label>

              {/* Confirm Password Box */}
              <label style={{position:'relative', textAlign:'left', left:'90px' , top:'40px', fontSize:'15px', height:'10px'}}>
                <input type="password" name="confirmPassword" placeholder="Confirm Password" style={{width: '300px'}}/>
              </label>

              {/* Full Name Box */}
              <label style={{position:'relative', textAlign:'left', left:'90px' , top:'50px', fontSize:'15px', height:'10px'}}>
                <input type="text" name="fullName" placeholder="Full Name" style={{width: '300px'}}/>
              </label>
            
              {/* Phone Number Box */}
              <label style={{position:'relative', textAlign:'left', left:'90px' , top:'60px', fontSize:'15px', height:'10px'}}>
                <input type="text" name="phoneNumber" placeholder="Phone Number" style={{width: '300px'}}/>
              </label>

              {/* Email Box */}
              <label style={{position:'relative', textAlign:'left', left:'90px' , top:'70px', fontSize:'15px', height:'10px'}}>
                <input type="text" name="email" placeholder="Email" style={{width: '300px'}}/>
              </label>

              {/* Street Address Box */}
              <label style={{position:'relative', textAlign:'left', left:'90px' , top:'80px', fontSize:'15px', height:'10px'}}>
                <input type="text" name="streetAddress" placeholder="Street Address" style={{width: '300px'}}/>
              </label>

              {/* Optional Address Box */}
              <label style={{position:'relative', textAlign:'left', left:'90px' , top:'90px', fontSize:'15px', height:'10px'}}>
                <input type="text" name="optionalAddress" placeholder="Optional Address (Apt., PO, Etc.)" style={{width: '300px'}}/>
              </label>

              {/* City Box */}
              <label style={{position:'relative', textAlign:'left', left:'90px' , top:'100px', fontSize:'15px', height:'10px'}}>
                <input type="text" name="city" placeholder="City" style={{width: '210px'}}/>
              </label>

              {/* State Box */}
              <div style={{position:'relative', textAlign:'left', left:'310px' , top:'73px', fontSize:'15px', height:'10px', width: '80px'}}>
                <StateDropdown />
                </div>


              {/*<label style={{position:'relative', textAlign:'left', left:'100px' , top:'100px', fontSize:'15px', height:'10px'}}>
                <input type="dropdown" name="state" placeholder="State" style={{width: '80px'}}/>
                </label>*/}

              {/* Zip Code Box */}
              <label style={{position:'relative', textAlign:'left', left:'90px' , top:'95px', fontSize:'15px', height:'10px'}}>
                <input type="text" name="zipcode" placeholder="Zipcode" style={{width: '210px'}}/>
              </label>

              {/* Upload ID Button */}
              <input style={{position:'relative', textAlign:'center', left:'-40px' , top:'150px', fontSize:'15px', height:'40px', width:'150px', background:'#FB8500', borderRadius: 
              '25px'}} type="button" value="Upload ID" />

              {/* Submit Button */}
              <input style={{position:'relative', textAlign:'center', left:'170px' , top:'170px', fontSize:'15px', height:'40px', width:'150px', background:'#FB8500', borderRadius: 
              '25px'}} type="submit" value="Submit" />
              

            </form>
          </div>
        </div>

    </div>
  )
}

export default Login