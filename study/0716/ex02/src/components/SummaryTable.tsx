type Complete = {
  user: string;
  car: string;
  date: string;
};

export default function SummaryTable({ user, car, date }: Complete) {
  return (
    <div className="m-8">
      <h2>{user}</h2>
      <p>{car}</p>
      <p>{date}</p>
    </div>
  );
}
