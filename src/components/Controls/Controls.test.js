import { fireEvent, render, screen } from '@testing-library/react'
import Controls from './Controls';

test('displays next page button', () => {
    render(<Controls showNext />)
    const button = screen.getByRole("button", {name: "Next Page"})
    expect(button).toBeInTheDocument();
  })
  
  test('displays previous page button', () => {
    render(<Controls showPrevious />)
    const button = screen.getByRole("button", {name: "Previous Page"})
    expect(button).toBeInTheDocument();
  })

  test('displays 4 items with 5 per page', () => {
    render(<Controls total={15} />)
    const perPageList = screen.getByRole("listbox");
    expect(perPageList.options).toHaveLength(4)
    expect(perPageList.options[3]).toHaveTextContent('All')
  })