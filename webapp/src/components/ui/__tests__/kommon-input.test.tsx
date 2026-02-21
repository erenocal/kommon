import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { KommonInput } from '../kommon-input'

describe('KommonInput', () => {
  it('renders with label', () => {
    render(<KommonInput label="Email" name="email" />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('renders with placeholder', () => {
    render(<KommonInput label="Email" name="email" placeholder="Enter email" />)
    expect(screen.getByPlaceholderText('Enter email')).toBeInTheDocument()
  })

  it('handles text input', async () => {
    const handleChange = jest.fn()
    const user = userEvent.setup()
    
    render(<KommonInput label="Name" name="name" onChange={handleChange} />)
    const input = screen.getByLabelText('Name')
    
    await user.type(input, 'John Doe')
    
    expect(input).toHaveValue('John Doe')
    expect(handleChange).toHaveBeenCalled()
  })

  it('can be required', () => {
    render(<KommonInput label="Email" name="email" required />)
    expect(screen.getByLabelText('Email')).toBeRequired()
  })

  it('can be disabled', () => {
    render(<KommonInput label="Email" name="email" disabled />)
    expect(screen.getByLabelText('Email')).toBeDisabled()
  })

  it('should display error message', () => {
    render(<KommonInput label="Email" name="email" error="Invalid email" />)
    expect(screen.getByText('Invalid email')).toBeInTheDocument()
  })

  it('applies error styling when error is present', () => {
    render(<KommonInput label="Email" name="email" error="Invalid email" />)
    const input = screen.getByLabelText('Email')
    expect(input).toHaveClass('border-destructive')
  })

  it('supports different input types', () => {
    const { rerender } = render(<KommonInput label="Email" name="email" type="email" />)
    expect(screen.getByLabelText('Email')).toHaveAttribute('type', 'email')

    rerender(<KommonInput label="Password" name="password" type="password" />)
    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'password')
  })

  it('forwards ref correctly', () => {
    const ref = jest.fn()
    render(<KommonInput label="Email" name="email" ref={ref} />)
    expect(ref).toHaveBeenCalled()
  })
})
