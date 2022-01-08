import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './component/profile/ProfilePhoto/ProfilePhoto';
import FullName from './component/profile/FullName/FullName';
import Address from './component/profile/Address/Address';
import './App.css'

function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <FullName/>
      <Address/>

    </div>
  );
};

export default App;
