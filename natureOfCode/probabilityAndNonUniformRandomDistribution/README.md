
# Target Pemahaman
    - memahamni probabilitas
    - memahami udistribusi data
    - mengimplementasikan dalam studi kasus kode

# About Probability

    Secara sederhana, probabilitas adalah peluang atau kemungkinan terjadinya suatu peristiwa. Ini adalah cara matematis untuk mengukur kemungkinan.
Dalam angka, probabilitas selalu berkisar antara 0 hingga 1 (atau 0% hingga 100%):

0: Peristiwa yang mustahil terjadi (contoh: muncul angka 7 pada dadu standar).
1: Peristiwa yang pasti terjadi (contoh: matahari terbit dari timur).

Rumus Dasar ProbabilitasJika kita menganggap setiap hasil memiliki peluang yang sama (distribusi seragam), rumusnya adalah:

                                P(A) = n(A)/n(S)
Keterangan:
P(A): Peluang kejadian A.
n(A): Jumlah titik sampel yang diinginkan.
n(S): Jumlah seluruh ruang sampel (total kemungkinan).

Contoh: Peluang muncul angka genap pada lemparan dadu. Kejadian A = {2, 4, 6} -> n(A) = 3. Total ruang sampel S = {1, 2, 3, 4, 5, 6} -> n(S) = 6. P(A) = 3/6 = 0.5 (atau 50%).


# Distribusi data
    Distribusi data adalah pola penyebaran data. pada uniform distribution jenis data tersebar secara merata sebagai contoh {1,2,3,4,5} namun dalam non uniform distributon jenis data tertentu bisa memiliki frekuensi yang lebih banyak dibanding jenis data lain sebagai contoh {1,1,1,,2,3,4,5}, dalam contoh tersebut angka 1 lebih sering muncul dibanding angka lain. sehingga setiap jenis distribusi, probabilitas kemunculan setiap jenis data didalamnya berbeda". ada yang semua memiliki probabilitas yang sama (pada uniform distribution) atau ada jenis data tertentu saja yang memiliki probabilitas lebih besar dibanding jenis data lain (pada himpunan nonUniform Distribution).

    so this is about the matter of probability distribution from every kind of data.

    nah terdapat suatu nonUniform distribution yang memiliki pola cantik dimana angka-angka lebih banyak berkumpul di sekitar nilai rata-rata,(atau yang memiliki probabilitas paling sering) adalah nilai" yang berdekatan dengan rata" dari himpunan data tersebut.Ini disebut dengan normal Distribution(distribusi ini juga banyak merpresentasikan sebaran data di kehidupan nyata). Jika kita menggambar data distribusi normal ke dalam grafik, bentuknya akan menyerupai lonceng yang simetris.

        Bagian tengah yang tinggi berarti nilai tersebut paling sering muncul.
        Semakin ke kiri atau ke kanan, grafiknya semakin landai, artinya nilai tersebut semakin jarang terjadi.

    tingkat kelengkungan atau sebaran data (standar deviasi/simpaangan baku) akan berbeda" setiap datanya.Dalam kasus nilai tinggi badan dari 200 hingga 300, Anda mungkin memiliki pemahaman intuitif tentang nilai rata-rata (mean) yaitu 250. Namun, bagaimana jika saya mengatakan bahwa simpangan bakunya adalah 3? Atau 15? Apa artinya ini bagi angka-angka tersebut?

    nah setiap pola sebaran ini jika kita gunakan sebagai dasar untuk menentukan nilai acak akan membentuk perilaku yang berbeda".

    untuk membuat data yang terdistribusi normal terhadap mean(rata-rata) atau standar deviasi yang kita harapkan, kita dapat memetakan standar distribusi normal kedalam distribusi berdasarkan mean dan standar deviasi yang kita harapkan, persamaannya bisa  dengan Probability Density Function (PDF). Namu didalam P5.js kita sudah disediakan fungsi gaussianRandom() untuk menghasilkan nilai acak dari distribusi normal yang kita definisikan nilai mean dan standar deviasinya.
    

# strategi implementasi

    1. Didalam p5 js fungsi random() dapat memilih secara acak pada sebuah himpunan, sehingga kita bisa menggunakan himpunan untuk menyimpan data dengan data tertentu memiliki frekuensi lebih banyak dibanding data lain, ini akan menghasilkan efek distribusi nonUniform. sebagai contoh:

        let stuff = [1, 1, 2, 3, 3];
        let value = random(stuff);
        print(value);

    dalam contoh diatas setiap data memiliki probabilitas sebesar 20% namun karena komposisi angka 1 adalah 2 dari 5 data maka probabilitas angka 1 menjadi 40%

    2. "Kita bisa memanfaatkan rentang nilai tertentu dari hasil acak yang ada,di mana seluruh rentang nilai acak yang tersedia (contoh desimal: 0 sampai 1) mewakili ruang sampel total sebesar 100%.. sebagai contoh:

    let probability = 0.1;  //A probability of 10%

    let r = random(1);      //A random floating point from 0 to 1

    if (r < probability) {
    print("Sing!");
    }                       //If the random number is less than 0.1, sing!

    dalam contoh tersebut, hasil dari nilai acak desimal yang memiliki rentang 0-1, apabila yang terpilih kurang dari 0.1(10%) maka lakukan sesuatu.kia bisa menaruh kondisi lainnya juga misal rentang 0.2 hingga 0.4(20%) maka lakukan sesuatu





# kesimpulan 

    Ada berbagai jenis distribusi data, seperti Uniform, Normal (Gaussian), dan distribusi nonUniform lainnya. Setiap jenis memiliki pola penyebaran jenis data dengan frekuensi yang berbeda, yang menentukan probabilitas kemunculan suatu jenis data berbeda" pula. Hal ini memengaruhi bagaimana kita memprediksi perilaku suatu jenis data dalam suatu himpunan yang acak.