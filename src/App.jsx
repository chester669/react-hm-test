import { userState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import "./App.css";
import Profile from "./components/Profile";
import userData from "./userData.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.username}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};
export default App;
