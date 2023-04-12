export default function Home() {
  return (
    <main>
      <section className="px-2 py-5">
        <h1 className="text-2xl mb-4">Doctor Finder</h1>
        <div>
          <input
            className="p-3 rounded-xl shadow-md mb-5 text-sm w-full border-gray-100 border outline-primary"
            type="text"
            placeholder="Keyword"
          />
          <div>
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
      </section>
      <section>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div
            key={i}
            className="shadow-lg flex items-start rounded-3xl overflow-hidden border border-gray-100 m-4 p-2 gap-2"
          >
            <img
              src="https://cms-bucket-alteacare.s3.ap-southeast-1.amazonaws.com/thumbnail_dr_Melisa_Sp_A_2f3e933b06.png"
              alt=""
              className="rounded-3xl"
            />
            <div>
              <h3 className="font-semibold mb-2 text-lg">Dr Melisa</h3>
              <p className="text-gray-400 text-xs mb-2">
                RS Mitra Keluarga - Spesialis Anak
              </p>
              <div
                className="text-xs"
                dangerouslySetInnerHTML={{
                  __html:
                    '<p><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">&nbsp;dr. Melisa Lilisari,Sp.A adalah&nbsp;Dokter&nbsp;Spesialis Anak&nbsp;yang&nbsp;</span><span style="color:rgb(0,0,0);">telah</span><span style="background-color:rgb(255,255,255);color:rgb(0,0,0);">&nbsp;menyelesaikan&nbsp;pendidikan&nbsp;di Universitas Padjajaran. Beliau dapat memberikan&nbsp;pelayanan&nbsp;medis&nbsp;/&nbsp;konsultasi&nbsp;terkait&nbsp;kondisi penyakit pada anak.&nbsp;</span></p>'.replace(
                      /&nbsp;/g,
                      " "
                    ),
                }}
              />
              <div className="flex justify-end">
                <h4 className="text-white text-sm bg-primary font-semibold px-4 py-2 rounded-full my-2">
                  Rp 200.000
                </h4>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
