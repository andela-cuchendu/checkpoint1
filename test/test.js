import React from 'react';
import {shallow} from 'enzyme';
import login from '../src/views/googlebutton';


describe('The main app', () => {
    it('the app should have text', () => {
        const app  = shallow(<login/>);
        expect(app.contains('sign in to google')).toBe(false);
    })
})