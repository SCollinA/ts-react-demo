import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as enzyme from 'enzyme';
import Hello from './Hello';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hello name='TypeScript' />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the correct text when no enthusiasm level is given', () => {
    const hello = enzyme.shallow(<Hello name='Collin' />);
    expect(hello.find('.greeting').text()).toEqual('Hello Collin!');
});

it('renders the correct text with an explicit enthusiasm of 1', () => {
    const hello = enzyme.shallow(<Hello name='Collin' enthusiasmLevel={1}/>);
    expect(hello.find('.greeting').text()).toEqual('Hello Collin!');
});

it('renders the correct text with an explicit enthusiasm of 5', () => {
    const hello = enzyme.shallow(<Hello name='Collin' enthusiasmLevel={5}/>);
    expect(hello.find('.greeting').text()).toEqual('Hello Collin!!!!!');
});

it('throws when the enthusiasm level is 0', () => {
    expect(() => {
        enzyme.shallow(<Hello name='Collin' enthusiasmLevel={0} />);
    }).toThrow();
})

it('throws when the enthusiasm level is negative', () => {
    expect(() => {
        enzyme.shallow(<Hello name='Collin' enthusiasmLevel={-1} />);
    }).toThrow();
})

// it('triggers onIncrement when button is clicked', () => {
//     expect(() => {
//         const hello = enzyme.shallow(<Hello name='Collin' />);
//         expect(hello.find('button').)
//     })
// })