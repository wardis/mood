import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import HomePage from '../app/page'

vi.mock('@clerk/nextjs', () => {
  return {
    auth: () => new Promise((resolve) => resolve({ userId: 'qsdf' })),
    ClerkProvider: ({ children }) => <div>{children}</div>,
    useUser: () => ({
      isSignedIn: true,
      user: {
        id: 'user_2NNEqlL3nrIldJ297ndJlsiMEFHJ',
        fullName: 'John Travolta',
      },
    }),
  }
})

test('Home', async () => {
  render(await HomePage())
  expect(screen.getByText('The best journal app')).toBeTruthy()
  expect(
    screen.getByRole('button', { name: 'Get started' }),
  ).toBeInTheDocument()
})
