import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import UserPage from './pages/UserPage';
import WritePage from './pages/WritePage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);

  return (
    <>
      <Helmet>
        <title>Daliy Lab's</title>
      </Helmet>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route path="/" exact component={PostListPage} />
          </>
        ) : (
          <>
            <Route component={LoginPage} path="/" />
          </>
        )}
      </Switch>

      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} exact strict path="/@:username/:postId" />
      <Route component={UserPage} exact strict path="/@:username" />
    </>
  );
};

export default App;
