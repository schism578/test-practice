import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './messages';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Messages />, div);
    ReactDOM.unmountComponentAtNode(div);
})