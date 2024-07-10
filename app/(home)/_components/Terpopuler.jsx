import Link from "next/link";
import React from "react";

function Terpopuler() {
  return (
    <div className="my-4">
      <h2 className="text-lg font-bold">TERPOPULER</h2>
      <div className="bg-slate-400 text-black flex flex-col gap-2 p-4">
        <Link
          aria-label="link to post page"
          href={`/post/11962`}
          className="flex items-start justify-start gap-2"
        >
          <p>percobaan untuk menambah data</p>
        </Link>
      </div>
      <div className="bg-slate-400 text-black flex flex-col gap-2 p-4">
        <Link
          aria-label="link to post page"
          href={`/post/11961`}
          className="flex items-start justify-start gap-2"
        >
          <p>
            Warga Randudongkal Pemalang Curi Hp dan Dompet di Desa Kalipancur
            Pekalongan
          </p>
        </Link>
      </div>
      <div className="bg-slate-400 text-black flex flex-col gap-2 p-4">
        <Link
          aria-label="link to post page"
          href={`/post/11960`}
          className="flex items-start justify-start gap-2"
        >
          <p>Kita coba untuk mengupload berita</p>
        </Link>
      </div>
      <div className="bg-slate-400 text-black flex flex-col gap-2 p-4">
        <Link
          aria-label="link to post page"
          href={`/post/11949`}
          className="flex items-start justify-start gap-2"
        >
          <p>
            Yuk Ajak Si Kecil Liburan! Inilah Rekomendasi Wisata di Batang yang
            Cocok untuk Anak-Anak, Tiketnya Murah
          </p>
        </Link>
      </div>
      <div className="bg-slate-400 text-black flex flex-col gap-2 p-4">
        <Link
          aria-label="link to post page"
          href={`/post/11948`}
          className="flex items-start justify-start gap-2"
        >
          <p>
            Inilah Rekomendasi TWS 100 Ribuan Terbaik yang Sayang Dilewatkan,
            Kualitas Audionya Joss!{" "}
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Terpopuler;
