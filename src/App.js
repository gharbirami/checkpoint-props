import './App.css';
import Profile from './profile/Profile'

function App() {
  const handleName  = name => alert(name);
  return (
    <div className="App">
      <header className="App-header">
        <Profile fullName='Rami Gharbi' bio='18' profession='Student' handleName={handleName}>
          <img className='Photo' src="/rami.jpg" alt='MyImage' />
          </Profile>
      </header>
    </div>
  );
}

export default App;
