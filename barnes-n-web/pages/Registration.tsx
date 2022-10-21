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
          <p className='registrationText' >Registration</p>

          <div className='RegistrationForm'>
            <form>
              {/* Username Box */}
              <label className='registrationInputBox' style={{top:'20px'}}>
                <input type="text" name="username" placeholder="Username" style={{width: '300px'}}/>
              </label>

              {/* Password Box */}
              <label className='registrationInputBox' style={{top:'30px'}}>
                <input type="password" name="password" placeholder="Password" style={{width: '300px'}}/>
              </label>

              {/* Confirm Password Box */}
              <label className='registrationInputBox' style={{top:'40px'}}>
                <input type="password" name="confirmPassword" placeholder="Confirm Password" style={{width: '300px'}}/>
              </label>

              {/* Full Name Box */}
              <label className='registrationInputBox' style={{top:'50px'}}>
                <input type="text" name="fullName" placeholder="Full Name" style={{width: '300px'}}/>
              </label>
            
              {/* Phone Number Box */}
              <label className='registrationInputBox' style={{top:'60px'}}>
                <input type="text" name="phoneNumber" placeholder="Phone Number" style={{width: '300px'}}/>
              </label>

              {/* Email Box */}
              <label className='registrationInputBox' style={{top:'70px'}}>
                <input type="text" name="email" placeholder="Email" style={{width: '300px'}}/>
              </label>

              {/* Street Address Box */}
              <label className='registrationInputBox' style={{top:'80px'}}>
                <input type="text" name="streetAddress" placeholder="Street Address" style={{width: '300px'}}/>
              </label>

              {/* Optional Address Box */}
              <label className='registrationInputBox' style={{top:'90px'}}>
                <input type="text" name="optionalAddress" placeholder="Optional Address (Apt., PO, Etc.)" style={{width: '300px'}}/>
              </label>

              {/* City Box */}
              <label className='registrationInputBox' style={{top:'100px'}}>
                <input type="text" name="city" placeholder="City" style={{width: '210px'}}/>
              </label>

              {/* State Box */}
              <div className='registrationInputBox' style={{left:'310px' , top:'73px'}}>
                <StateDropdown />
                </div>

              {/* Zip Code Box */}
              <label className='registrationInputBox' style={{top:'95px'}}>
                <input type="text" name="zipcode" placeholder="Zipcode" style={{width: '210px'}}/>
              </label>

              {/* Upload ID Button */}
              <input className='registrationButton' style={{left:'-40px', top:'150px'}} type="button" value="Upload ID" />

              {/* Submit Button */}
              <input className='registrationButton' style={{left:'170px' , top:'170px'}} type="submit" value="Submit" />

            </form>
          </div>
        </div>

    </div>
  )
}

export default Login