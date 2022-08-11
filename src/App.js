import logo from './assets/images/logo.svg';

import './App.css';

function App() {
  return (
    <div className="App">

      <div className='header'>

        <div className='homeIcon'>
          {/* <h4>home</h4> */}
          <img className='headerImg' src={logo} alt='logo' />
        </div>

        <h1 className='title'>rowdy_moto</h1>

        <div className='navigation'>
          <h5>navigation</h5>
        </div>

      </div>

      <div className='content'>
        
        {/* <h2>welcome ghostrider</h2> */}

        <div className='feed-container'>
          <h2>news/post: feed/forum/classified</h2>
                 
          <div className='contentCard'>
            <p>hello world.</p>
          </div>

          <div className='contentCard'>
            <p>hello world.</p>
          </div>

          <div className='contentCard'>
            <p>hello world.</p>
          </div>

          <div className='contentCard'>
            <p>hello world.</p>
          </div>

        </div>

        <div className='feature-container'>
          <h2>photo/feature carousel</h2>
          
        </div>

        <div className='utility-container'>
          <h2>user/messaging/settings</h2>
        </div>

      </div>
      
    </div>
  );
}

export default App;
