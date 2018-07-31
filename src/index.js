import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './containers/App';


class ReduxedApp  extends React.Component{
    render (){
        return (

        <App></App>

        )
    }
}

ReactDOM.render(<ReduxedApp />, document.getElementById('root'));

