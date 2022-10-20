//import logo from '../pages/components/images/logo.png'; 

const Header = () => {
  return (
    <div className='header'>
      <div className='headerRow'>
        <div className='headerColumn8'>
          <div style={{padding: 12.5}}>
            <img src='./images/logo.png' style={{width: 75, height: 75, float:'left'}} />
          </div>
        </div>
        <div className='headerColumn15'>
        <p>&nbsp;</p>
            <p style={{fontSize: 30}}>Barnes-N-Web</p>
        </div>
      </div>
    </div>
  )
}

export default Header