import { Button } from "../../theme/daisyui";

export default function Size() {
  return (
    <section className="mt-4">
      <h2 className="font-bold text-3xl text-center">Size</h2>
      <div className="mt-4 flex justify-evenly">
        <Button className="btn-lg btn-primary">BUTTON</Button>
        <Button className="btn-md btn-secondary">BUTTON</Button>
        <Button className="btn-sm btn-accent">BUTTON</Button>
        <Button className="btn-xs btn-info">BUTTON</Button>
      </div>
    </section>
  );
}
