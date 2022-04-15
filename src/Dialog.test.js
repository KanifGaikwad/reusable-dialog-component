import {render, screen} from '@testing-library/react';
import Dialog from './Dialog';

test('renders test Dialog', () => {
    const dialogProps = {
        title: 'A Dialog for React Testing',
        footerActions: [{
            name: 'Save',
            backGroundColor: '#D8E00F',
            callback: () => {
                alert('Save Clicked');
            }
        }]
    }
    render(<Dialog {...dialogProps}/>);
    const linkElement = screen.getByText(/Dialog/i);
    expect(linkElement).toBeInTheDocument();
})