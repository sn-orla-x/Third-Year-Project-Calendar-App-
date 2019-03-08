import Enzyme, {mount, shallow, render} from 'enzyme';
import Inputs from './addEventScreen';
import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
const fetch = jest.fn(() => new Promise(resolve => resolve()));

Enzyme.configure({adapter: new Adapter()})

it('should change state correctly if a start date is entered', () =>{
	const instanceOf = renderer.create(<Inputs />).getInstance();
	instanceOf.handleStartDateTime('2019-03-08 15:00');
	expect(instanceOf.state.startDateTime).toEqual('2019-03-08T15:00:00.00');
});

it('should change state correctly if an end date is entered', () =>{
	const instanceOf = renderer.create(<Inputs />).getInstance();
	instanceOf.handleEndDateTime('2019-03-08 15:00');
	expect(instanceOf.state.endDateTime).toEqual('2019-03-08T15:00:00.00');
})

it('should change state correctly if tennis is entered', () =>{
	const instanceOf = renderer.create(<Inputs/>).getInstance();
	instanceOf.handleclubSoc('Tennis');
	expect(instanceOf.state.clubSoc).toEqual('5ieg9f866hkuq7t2jvanst1808@group.calendar.google.com')
	});

it('should change state correctly if fotosoc is entered', () =>{
	const instanceOf = renderer.create(<Inputs />).getInstance();
	instanceOf.handleclubSoc('FotoSoc');
	expect(instanceOf.state.clubSoc).toEqual('4afhe3v6jqi6f9ohj658d5s8r4@group.calendar.google.com')
});

//describe('Inputs',() => {
//	describe('Rendering', () =>{
//		it('should match to snapshot', () => {
//			const component = shallow
//		})
//	})
//})
