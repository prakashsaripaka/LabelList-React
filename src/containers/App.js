import React, { Component } from 'react';
import style from'./App.css';

import LabelList from '../components/LabelList/LabelList';

class App extends Component {

    constructor(props){
        super(props);
    }
    render() {

        return (
        <div className={style.App}>
            <LabelList/>
        </div>
    );
  }
}

export default App;
