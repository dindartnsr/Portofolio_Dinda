

import SectionTitle from "./SectionTitle";


function SkillGroup({ title, description, items }) {
  return (
    // flex flex-col → isi kartu tersusun vertikal
    <div className='flex flex-col rounded-2xl bg-white p-6 shadow-sm'>
      <h3 className='text-lg font-bold'>{title}</h3>
      <p className='mt-2 text-sm leading-relaxed text-muted'>{description}</p>

      {/* Garis pemisah tipis antara deskripsi dan daftar keahlian */}
      <hr className='my-5 border-slate-100' />

      {/* flex flex-wrap → label berjajar dan otomatis turun ke baris baru jika penuh */}
      <ul className='flex flex-wrap gap-2'>
        {/* items berisi teks biasa, jadi teksnya sendiri bisa dipakai sebagai key */}
        {items.map((item) => (
          <li
            key={item}
            // border + bg-white → chip bergaris tepi
            // hover → berubah warna saat kursor di atasnya
            className='rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-brand hover:text-brand'>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ----- KOMPONEN UTAMA: Skills -----
export default function Skills({ skills }) {
  return (
   
    <section id='skills' className='bg-slate-50 py-20 sm:py-28'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <SectionTitle
          eyebrow='Skills'
          title='What I bring to the table'
          subtitle='A blend of pedagogy and technology, built through years of designing and delivering learning programs.'
        />

        {/* Grid kartu: 1 kolom di ponsel, 3 kolom mulai layar md */}
        <div className='grid gap-6 md:grid-cols-3'>
          {/* Satu SkillGroup untuk setiap kelompok */}
          {/* {...group} → SPREAD PROPS: kirim semua properti objek sekaligus,   */}
          {/*              sama dengan menulis title={group.title}                */}
          {/*              description={group.description} items={group.items}  */}
          {skills.map((group) => (
            <SkillGroup key={group.title} {...group} />
          ))}
        </div>
      </div>
    </section>
  );
}