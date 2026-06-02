import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/inter')({
  loader: () => {
    throw redirect({ to: '/presentiel', hash: 'inter' })
  },
  component: () => null,
})
