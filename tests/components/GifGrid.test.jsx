import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid'; 
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');


describe('Pruebas en <GifGrid />', () => { 

    const category = 'Mapache';

    test('debe de mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={ category } />);
        expect( screen.getByText('Cargando ...'));
        expect( screen.getByText( category ));

    });

    test('debe de mostrar items cuando se cargan las imagenes mediante el useFetchGifs ', () => { 

        const gifs = [
            {
                id: 'ABEB',
                title: 'Manzanas',
                url: 'https://localhost/etc.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        
        render(<GifGrid category={ category } />);
        //screen.debug();
        expect(screen.getAllByRole('img').length).toBe(1);
    })
 })