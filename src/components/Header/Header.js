import React from 'react';
import classnames from 'classnames';
import style from '../LabelList/LabelList.css';
import { Button } from 'react-bootstrap';

const Header = ({name}) => (
 <div className={classnames(style.appContainer, style.headerBackground)}>
     <div  className={style.headerText}>
        <h3>CATEGORY</h3>
        <h4>Page Heading</h4>
     </div>
     <Button  bsStyle="primary" className={classnames(style.pageHeaderBtn)} >Button</Button>
 </div>
);

export default Header;
