import FilterView from "./components/Filter/FilterView";
import { Doctor } from "./interfaces/Doctor";
import { ResponseDTO } from "./interfaces/ResponseDTO";

async function getDoctorData() {
  const res = await fetch(
    "https://run.mocky.io/v3/c9a2b598-9c93-4999-bd04-0194839ef2dc"
  );
  const doctorData: ResponseDTO<Doctor> = await res.json();
  return doctorData;
}

export default async function Home() {
  const { data } = await getDoctorData();

  return (
    <main className="max-w-6xl mx-auto py-5 px-4">
      <FilterView doctorData={data} />
    </main>
  );
}
