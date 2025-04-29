import { createLazyFileRoute } from "@tanstack/react-router";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const Route = createLazyFileRoute("/registrarOrdem")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header title="Registrar uma Ordem" />
      <main className="flex justify-center items-center bg-dark-gray h-screen">
        <div className="columns-1">
        </div>
      </main>
      <Footer hasLogo={false}/>
    </>
  );
}
