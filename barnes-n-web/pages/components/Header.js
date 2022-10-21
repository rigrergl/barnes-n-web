//import logo from '../pages/components/images/logo.png'; 

const Header = () => {
  return (
    <div className='header'>
      <div className='headerRow'>
        <div className='headerLogo'>
          <div style={{padding: 12.5}}>
            <img className='headerLogo' src='./images/logo.png' />
          </div>
        </div>
        <div className='headerLogoText'>
            <p>Barnes-N-Web</p>
        </div>
      </div>
    </div>
  )
}

export default Header