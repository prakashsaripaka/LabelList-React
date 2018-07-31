import React, { Component } from 'react';
import classnames from 'classnames';
import { Button } from 'react-bootstrap';



import CustomLable from '../CustomLabel/CustomLabel';
import Header from '../Header/Header.js'
import style from './LabelList.css';
import styles from '../CustomLabel/CustomLabel.css';

class LabelList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          labelsList: ["","",""],
          seletedListIndex: [],
          bulkDeleteClicked: false,
        };
    }

    getLabelsList(){
            const {labelsList} = this.state;
            let listLength = labelsList.length;
            return labelsList.map((item , index) => {
                    return  <CustomLable    key={index+1}
                                            data={index+1}
                                            labelText={item.labelText}labelIndex={index+1}
                                            handleDeleteClick={this.deleteListItem}
                                            handelLabelSelection={this.handelLabelSelection}
                                            lastItem={(listLength == index + 1)?true:false}
                                            bulkDeleteClicked={this.state.bulkDeleteClicked}
                                            >
                            </CustomLable>
                })
        }





    handelAddLabelClick= () => {
                var newlabelsList = this.state.labelsList
                newlabelsList.push("")
                this.setState ({
                     todoList:newlabelsList
                 })
            }

    handelBulkDelete = () => {

       var  newlabelsList = this.state.labelsList;
       this.state.seletedListIndex.map((item , index) => {
       newlabelsList.splice(item, 1);
       });

       this.setState({labelsList:newlabelsList,
        seletedListIndex:[],
        bulkDeleteClicked:!this.state.bulkDeleteClicked});


    }
    deleteListItem = (index) =>{


        var  newlabelsList = this.state.labelsList;
        newlabelsList.splice(index -1 , 1);
        this.setState({labelsList:newlabelsList});
    }

    handelLabelSelection = (index , checked) =>{
        var newSeletedListIndex = this.state.seletedListIndex;
        if(checked){

            newSeletedListIndex.push(index - 1)

        }
        else{
            var indexToBeRemoved = newSeletedListIndex.indexOf(index -1);
            if (indexToBeRemoved > -1)
                newSeletedListIndex.splice(indexToBeRemoved, 1);
            }
         this.setState ({
            seletedListIndex:newSeletedListIndex
         })
	}

    render() {
        const { seletedListIndex } = this.state;

        return (

            <React.Fragment>

            <Header/>
            <div className={classnames(style.appContainer)}>


                <div  className={style.headerText}>
                  <h3>Section Heading</h3>
                </div>
                <Button  bsStyle="danger"
                        disabled={ seletedListIndex.length > 0? false : true }
                        onClick={this.handelBulkDelete}
                        className={classnames(style.pageHeaderBtn , styles.hide)}
                        >REMOVE
                </Button>
                <span className={classnames(style.pageHeaderBtn , styles.hide )}>{seletedListIndex.length + " Labels Selected"}</span>


                {this.getLabelsList()}

                <hr/>

                <Button bsStyle="primary"
                        className={classnames(style.pageHeaderBtn , style.floatRightContent)}
                        onClick={this.handelAddLabelClick}
                        >
                    ADD LABEL
                </Button>
                <Button bsStyle="primary"
                        className={classnames(style.submitBtn , "mt-5")}
                        onClick={this.handelAddLabelClick}
                        >
                    SUBMIT
                </Button>
            </div>

            </React.Fragment>
          );
    }
}




export default LabelList;

