"use client";
import { ChangeEvent, FC, useState } from "react";
import DoctorListView from "./DoctorListView";
import { Doctor } from "../interfaces/Doctor";

const FilterView: FC<{ doctorData: Doctor[] }> = ({ doctorData }) => {
  const [doctorList, setDoctorList] = useState<Doctor[]>(doctorData);

  const handleChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    const filteredDoctor = doctorData.filter((doc) =>
      doc.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setDoctorList(filteredDoctor);
  };

  return (
    <section>
      <div className="border border-gray-100 shadow-md rounded-xl mb-8 px-4 py-5">
        <h1 className="text-2xl mb-4 md:text-3xl">Doctor Finder</h1>
        <div className="md:flex md:gap-3 md:items-center ">
          <input
            className="p-3 rounded-xl mb-5 max-w-sm md:mb-0 text-sm w-full border-gray-300 border outline-primary"
            type="text"
            placeholder="Nama Dokter"
            onChange={handleChangeKeyword}
          />
          <select name="hospital" id="hospital">
            <option value="1">Mitra Keluarga Bintaro</option>
            <option value="2">RS Bethesda</option>
          </select>
          <select name="specialization" id="hospital">
            <option value="1">Anak</option>
            <option value="2">Jantung</option>
          </select>
        </div>
      </div>
      <DoctorListView doctorList={doctorList} />
    </section>
  );
};
export default FilterView;
