import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import {render} from '@testing-library/react';
it('Render react',()=>{
const div=document.createElement('div');
ReactDOM.render(<Button></Button>)
}
)