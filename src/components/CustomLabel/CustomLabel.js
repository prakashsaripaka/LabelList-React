import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import classnames from 'classnames';

import style from './CustomLabel.css';
import styles from '../LabelList/LabelList.css';

class CustomLabel extends Component {
    constructor(props) {
        super(props);
        this.state = {
          labelValue: "",
          checked:false
        };
    }

    componentWillReceiveProps(prevProp){
        if(prevProp.bulkDeleteClicked !== this.props.bulkDeleteClicked ){
            this.setState ({
                checked:false,
            })
        }
    }

    handelInputBlur(e){
        this.setState ({
            labelValue:e.target.value,

            })
    }

    handelLabelSelectionClick = (event) => {
        this.setState(prevState => ({
            checked: !prevState.checked
          }));
        this.props.handelLabelSelection(this.props.labelIndex , event.target.checked)
    }

    render() {


        return (
        <div className="row mt-4">
            <div className={classnames("mt-3 col-sm-1 col-md-1 col-lg-1  container", style.hide)}>
                <input type="checkbox" onClick={(e) => this.handelLabelSelectionClick(e) } />
                <span class="checkmark"></span>
            </div>

            <div  className="col-sm-6 col-md-7 col-lg-7">
                <div>
                    <span>{"Label " + this.props.labelIndex}</span>
                </div>
                <input type="text" value={this.props.labelText} class="form-control col-xs-4" onBlur={(e) => this.handelInputBlur(e)}/>
            </div>
            <div className={classnames("col-sm-5 col-md-4 col-lg-4" ,!this.props.lastItem?style.hide:null )}>
                <Button className={classnames(style.inlineDeleteBtn ,  styles.floatRightContent)} onClick={() => this.props.handleDeleteClick(this.props.labelIndex)}>REMOVE</Button>
            </div>
        </div>

          );
    }
}

export default CustomLabel;
