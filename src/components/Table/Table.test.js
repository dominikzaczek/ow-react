import { render, screen } from '@testing-library/react'
import { Router } from 'react-router';
import Table from './Table'
// jest.fn()

let items;

beforeEach(() => {
  items = [
    {
        'Title Number': '243751',
        'Property Address': '31-35 Kirby Street, London, EC1N 8TE',
        Tenure: 'Freehold',
        X: -0.107690402,
        Y: 51.52028757,
    },
    {
        'Title Number': '342999',
        'Property Address': '102-108 Clerkenwell Road, London (EC1M 5SA)',
        Tenure: 'Freehold',
        X: -0.104842377,
        Y: 51.52256431,
    },
    {
        'Title Number': '41229',
        'Property Address': '75 Farringdon Road, London (EC1M 3JY)',
        Tenure: 'Freehold',
        X: -0.106601162,
        Y: 51.52122929,
    },
]
})
 
test('displays the correct first property id', () => {
    render(<Table items={items}/>)
    const firstCell = screen.getByText('243751');
    expect(firstCell).toBeInTheDocument();
})

test('displays all the rows by default', () => {
  render(<Table items={items}/>)
  const rows = screen.getAllByRole("row")
  // It should expect 3 + 1
  expect(rows).toHaveLength(4);
})



