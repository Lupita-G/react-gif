import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => { 
    test('debe de cambiar el valor de la caja de texto', () => { 

        render( <AddCategory onNewCategory={ () => {} } />);
        const input = screen.getByRole('textbox');
       
        
        fireEvent.input( input, { target: {value: 'Fresas'}} );
        expect( input.value ).toBe('Fresas');
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => { 

        const inputValue = 'Manzanas';
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory } />);

        const form = screen.getByRole('form');
        const input = screen.getByRole('textbox');
 
        fireEvent.input( input, { target: { value: inputValue}} );
        fireEvent.submit( form );
        //screen.debug();

        expect(input.value).toBe('');
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue);
    });

    test('no debe de llamar el onNewCategory si el input está vació', () => { 
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory } />);

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).not.toHaveBeenCalled();
    })

 })