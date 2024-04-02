import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"


describe('Pruebas en <GifItem/>', () => { 

    const title = 'App';
    const url = 'https://hohola.com//app.jpg';

    test('debe de hacer match con el snapshot', () => { 
       const { container } = render(<GifItem title={ title } url={ url }/>)
       expect(container).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => { 

        render(<GifItem title={ title } url={ url }/>);
        //screen.debug();
        //expect( screen.getByRole('img').src).toBe(url);
        
        const { alt, src } = screen.getByRole('img');
        expect( alt ).toBe( alt );
        expect( src ).toBe( url);  
    });

    test('debe de mostrar el titulo', () => { 
        render(<GifItem title={ title } url={ url }/>);

        expect(screen.getByText(title)).toBeTruthy();
    })
 })