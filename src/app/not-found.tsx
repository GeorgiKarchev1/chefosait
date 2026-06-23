import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center bg-graphite-950 text-white">
      <Container className="py-32 text-center">
        <p className="font-display text-7xl font-bold text-accent-soft sm:text-8xl">
          404
        </p>
        <h1 className="mt-6 text-3xl font-semibold sm:text-4xl">
          Страницата не е намерена
        </h1>
        <p className="mx-auto mt-4 max-w-md text-white/65">
          Възможно е страницата да е преместена или вече да не съществува.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href="/" size="lg">
            Към началната страница
          </Button>
        </div>
      </Container>
    </section>
  );
}
