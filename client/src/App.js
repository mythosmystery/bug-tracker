import React, { useMemo, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Container } from 'react-bootstrap';
import { UserContext } from './utils/UserContext';
import { SearchContext } from './utils/SearchContext';
import Auth from './utils/auth';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { addUser, getUser } from './utils/localStorage';
import Search from './pages/Search';
import Browse from './pages/Browse';

const httpLink = createHttpLink({
   uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
   // return the headers to the context so httpLink can read them
   return {
      headers: {
         ...headers,
         authorization: Auth.getToken() ? `Bearer ${Auth.getToken()}` : ''
      }
   };
});

const client = new ApolloClient({
   link: authLink.concat(httpLink),
   cache: new InMemoryCache()
});

function App() {
   const [user, setUserState] = useState(Auth.loggedIn() ? getUser() : null);
   const setUser = user => {
      setUserState(user);
      addUser(user);
   };
   const value = useMemo(() => ({ user, setUser }), [user, setUserState]);
   const homePage = Auth.loggedIn() ? Profile : Home;
   return (
      <ApolloProvider client={client}>
         <Router>
            <UserContext.Provider value={value}>
               <Navbar />
               <Container>
                  <Route exact path='/' component={homePage} />
                  <Route exact path='/search' component={Search} />
                  <Route exact path='/browse' component={Browse} />
               </Container>
            </UserContext.Provider>
         </Router>
      </ApolloProvider>
   );
}

export default App;
