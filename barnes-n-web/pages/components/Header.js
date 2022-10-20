//import logo from '../pages/components/images/logo.png'; 

const Header = () => {
  return (
    <div className='header'>
      <div className='headerRow'>
        <div className='headerColumn'>
          <div style={{padding: 12.5}}>
            <img src='./images/logo.png' style={{width: 75, height: 75, float:'left'}} />
          </div>
        </div>
        <div className='headerColumn'>
          <p>&nbsp;</p>
          <div className='fontSansitaOne'>
            <p>Barnes-N-Web</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header