import { Route, Routes, useNavigate } from "react-router-dom";
import { useIdleTimer } from "react-idle-timer";
import { useEffect } from 'react';
import { routePaths } from "utils/constants";
import SignIn from "pages/SignIn/SignIn";
import SendbirdChatApp from "pages/SendBirdChatApp/SendbirdChatApp";
import Error from "components/templates/Error/Error";
import UnSecurePage from "pages/UnSecurePage/UnSecurePage";

const Router = () => { 
  const navigate = useNavigate();

  const onIdle = () => {
    console.log("You are idle for 5 seconds");
    navigate(routePaths.home);
    // sessionTimeoutRef.current = setTimeout(logOut, 5000);
  };

  const { getRemainingTime } = useIdleTimer({
    timeout: 60 * 60 * 1000,
    onIdle,
  });

  useEffect(() => {
    if(Math.ceil(getRemainingTime() / 1000) === 0)
    {
      navigate(routePaths.home);
    }
  }, []);

  return (
        <Routes>
          <Route path={routePaths.home} element={ <SignIn />} />
          <Route path={routePaths.supportChat} element={ <SendbirdChatApp />} />
          <Route path={routePaths.error} element={ <Error/> } />
          <Route path={routePaths.unsecurePage} element={ <UnSecurePage/> } />
        </Routes>
  )
};

export default Router;
