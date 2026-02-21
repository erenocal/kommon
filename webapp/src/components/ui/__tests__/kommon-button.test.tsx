import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { KommonButton } from '../kommon-button'

describe('KommonButton', () => {
  it('renders with children', () => {
    render(<KommonButton>Click me</KommonButton>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('applies primary variant by default', () => {
    render(<KommonButton>Button</KommonButton>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-hearth')
  })

  it('applies secondary variant when specified', () => {
    render(<KommonButton variant="secondary">Button</KommonButton>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-sage')
  })

  it('applies outline variant when specified', () => {
    render(<KommonButton variant="outline">Button</KommonButton>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('border-hearth')
  })

  it('applies correct size classes', () => {
    const { rerender } = render(<KommonButton size="sm">Small</KommonButton>)
    expect(screen.getByRole('button')).toHaveClass('h-9')

    rerender(<KommonButton size="md">Medium</KommonButton>)
    expect(screen.getByRole('button')).toHaveClass('h-11')

    rerender(<KommonButton size="lg">Large</KommonButton>)
    expect(screen.getByRole('button')).toHaveClass('h-12')
  })

  it('handles click events', async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()
    
    render(<KommonButton onClick={handleClick}>Click me</KommonButton>)
    await user.click(screen.getByRole('button'))
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('can be disabled', () => {
    render(<KommonButton disabled>Disabled</KommonButton>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })

  it('does not call onClick when disabled', async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()
    
    render(<KommonButton onClick={handleClick} disabled>Disabled</KommonButton>)
    await user.click(screen.getByRole('button'))
    
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('applies custom className', () => {
    render(<KommonButton className="custom-class">Button</KommonButton>)
    expect(screen.getByRole('button')).toHaveClass('custom-class')
  })

  it('supports type attribute', () => {
    render(<KommonButton type="submit">Submit</KommonButton>)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
  })
})
