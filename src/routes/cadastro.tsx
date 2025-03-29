import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cadastro')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Cadastro</div>
}
