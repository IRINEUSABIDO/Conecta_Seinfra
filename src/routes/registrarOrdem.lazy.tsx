import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/registrarOrdem')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/registrarOrdem"!</div>
}
