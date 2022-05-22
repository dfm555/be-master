import { render, screen } from '@testing-library/react'
import Home from 'pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a form', () => {
    render(<Home />)

    const inputNameNode = screen.getByPlaceholderText('Name', {})
    const inputSpeciesNode = screen.getByPlaceholderText('Species', {})
    const inputTypeNode = screen.getByPlaceholderText('Type', {})

    expect(inputNameNode).toBeInTheDocument()
    expect(inputSpeciesNode).toBeInTheDocument()
    expect(inputTypeNode).toBeInTheDocument()
  })
})
