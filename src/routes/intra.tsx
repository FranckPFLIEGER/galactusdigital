import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/intra')({
  loader: () => {
    throw redirect({ to: '/presentiel', hash: 'intra' })
  },
  component: () => null,
})
