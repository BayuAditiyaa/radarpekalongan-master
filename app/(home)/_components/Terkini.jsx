import Image from "next/image";

export default function Terkini() {
  return (
    <div>
      <h1 className="text-xl font-bold my-4">TERKINI</h1>
      <div className="flex flex-col gap-2">
        <div className="flex gap-4 items-center">
          <div className="relative min-w-40 sm:min-w-28 h-32 object-cover">
            <Image
              src="https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/Pj_Bupati_Batang_Minta_Gen_Z_Bumikan_Nilai-nilai_Pancasila.jpg"
              alt="Judul_1"
              fill
              objectFit="cover"
              objectPosition="center"
              placeholder="blur"
              loading="eager"
              blurDataURL="/logo-disway-head.png"
            />
          </div>
          <div className="flex flex-col justify-between">
            <h2 className="text-sm font-bold">percobaan untuk menambah data</h2>
            <div className="text-xs text-red-500 uppercase">PENDIDIKAN</div>
            <div className="text-xs text-gray-500">2024-07-08</div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="relative min-w-40 sm:min-w-28 h-32 object-cover">
            <Image
              src="https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/warga%20randudongkal%20pemalang%20curi%20hp.jpg"
              alt="Judul_1"
              fill
              objectFit="cover"
              objectPosition="center"
              placeholder="blur"
              loading="eager"
              blurDataURL="/logo-disway-head.png"
            />
          </div>
          <div className="flex flex-col justify-between">
            <h2 className="text-sm font-bold">
              Warga Randudongkal Pemalang Curi Hp dan Dompet di Desa Kalipancur
              Pekalongan
            </h2>
            <div className="text-xs text-red-500 uppercase">KAJEN</div>
            <div className="text-xs text-gray-500">2024-07-05</div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="relative min-w-40 sm:min-w-28 h-32 object-cover">
            <Image
              src="https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/post%207%20HL.jpg"
              alt="Judul_1"
              fill
              objectFit="cover"
              objectPosition="center"
              placeholder="blur"
              loading="eager"
              blurDataURL="/logo-disway-head.png"
            />
          </div>
          <div className="flex flex-col justify-between">
            <h2 className="text-sm font-bold">
              Kita coba untuk mengupload berita
            </h2>
            <div className="text-xs text-red-500 uppercase">BISNIS</div>
            <div className="text-xs text-gray-500">2024-07-05</div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="relative min-w-40 sm:min-w-28 h-32 object-cover">
            <Image
              src="https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/Yuk_Ajak_Si_Kecil_Liburan__Inilah_Rekomendasi_Wisata_di_Batang_yang_Cocok_untuk_Anak-Anak__Tiketnya_Murah.png"
              alt="Judul_1"
              fill
              objectFit="cover"
              objectPosition="center"
              placeholder="blur"
              loading="eager"
              blurDataURL="/logo-disway-head.png"
            />
          </div>
          <div className="flex flex-col justify-between">
            <h2 className="text-sm font-bold">
              Yuk Ajak Si Kecil Liburan! Inilah Rekomendasi Wisata di Batang
              yang Cocok untuk Anak-Anak, Tiketnya Murah
            </h2>
            <div className="text-xs text-red-500 uppercase">LifeStyle</div>
            <div className="text-xs text-gray-500">2024-07-03</div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="relative min-w-40 sm:min-w-28 h-32 object-cover">
            <Image
              src="https://zdgnipjmpjiqktbpdvjj.supabase.co/storage/v1/object/public/news-image/Inilah_Rekomendasi_TWS_100_Ribuan_Terbaik_yang_Sayang_Dilewatkan__Kualitas_Audionya_Joss___.jpg?t=2024-07-10T03%3A31%3A27.694Z  "
              alt="Judul_1"
              fill
              objectFit="cover"
              objectPosition="center"
              placeholder="blur"
              loading="eager"
              blurDataURL="/logo-disway-head.png"
            />
          </div>
          <div className="flex flex-col justify-between">
            <h2 className="text-sm font-bold">
              Inilah Rekomendasi TWS 100 Ribuan Terbaik yang Sayang Dilewatkan,
              Kualitas Audionya Joss!{" "}
            </h2>
            <div className="text-xs text-red-500 uppercase">LifeStyle</div>
            <div className="text-xs text-gray-500">2024-07-03</div>
          </div>
        </div>
      </div>
    </div>
  );
}
