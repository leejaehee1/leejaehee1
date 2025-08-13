import ScrapForm from "../components/ScrapForm";
import { cars } from "../data/initialFormData";

export default function ApplyScrapPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      {cars.map((car) => (
        <ScrapForm name={car.name} carNum={car.carNum} />
      ))}
    </main>
  );
}
