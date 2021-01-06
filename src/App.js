import React, {useState, useEffect} from 'react';
import {Route}        from 'react-router-dom';
import Login          from './containers/Login/Login';
import SignUp         from './containers/SignUp/SignUp';
import FPContent      from './containers/Frontpage';
import Header         from './components/Header/Header';
import Footer         from './components/Footer/Footer';
import PrivateRoute   from './components/PrivateRoute';
import './App.css';
import AddGuide      from './components/Add-Edit/Add';
import ViewGuide     from './components/Add-Edit/ViewGuide';
import Edit          from './components/Add-Edit/Edit';
import {GuideContext} from './components/GuideContext';
import GuideList from './containers/Frontpage/GuideList';
import Search from './components/Header/Search';
import { axiosWithAuth } from './components/Axios/axiosWithAuth';


function App(props) {

  const [guide, setGuide] = useState([]);
    

  const fetchData = () => {
    axiosWithAuth()
    .get('/api/items')
    .then(res => {
       console.log(res)
       setGuide(res.data) 
    }) 
    .catch(err => console.log(err))
  }

    useEffect(() => {
       fetchData()
    }, [])
    
    return (
        <div className="App">
            <GuideContext.Provider value={{ guide }}> 
            <Header />
            <Route path="/search" render={(props)=> <Search {...props} guide={guide} GuideList={GuideList} fetchData={fetchData} />}/>
            <Route exact path='/' component={Login} />   
            <Route path='/sign-up' component={SignUp} />
            <Route path="/item/:id" render={(props)=> <ViewGuide {...props} guide={guide} GuideList={GuideList} fetchData={fetchData} />}/>
            <PrivateRoute exact path="/protected" component={FPContent} fetchData={fetchData} />
            <Route path='/add-guide' component={AddGuide}  />
            <Route path='/edit-guide/:id'>
              <Edit guide={guide} setGuide={setGuide} />
            </Route>    
            <Footer/>
            </GuideContext.Provider>
        </div>
    );
}

export default App;
