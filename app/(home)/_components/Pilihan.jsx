import Link from "next/link";

function Pilihan() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-bold">Pilihan</h2>
      <div className="flex flex-col gap-2 bg-white text-black p-4">
        <Link
          aria-label="link to post page"
          href={`/post/11962`}
          className="flex items-start justify-start gap-2"
        >
          <p>percobaan untuk menambah data</p>
        </Link>
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
        <Link
          aria-label="link to post page"
          href={`/post/11960`}
          className="flex items-start justify-start gap-2"
        >
          <p>Kita coba untuk mengupload berita</p>
        </Link>
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

export default Pilihan;
