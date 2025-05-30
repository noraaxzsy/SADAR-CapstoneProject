import { getAccessToken, parseJwt } from '../utils/auth';

export function generateNavbarTemplate() {
  return `
  <div class="bg-[#42A7C3]">
    <div class="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <!-- Logo -->
      <a class="text-white font-bold text-lg" href="#">Logo Sadar</a>

      <!-- Desktop Navbar -->
      <nav class="hidden md:flex justify-center flex-1">
        <ul class="flex items-center gap-6 text-sm">
          <li>
            <a class="text-base font-semibold text-white transition hover:text-[#163741]" href="#">CekAjaDulu</a>
          </li>
          <li class="relative group">
            <a href="#/module-overview" class="flex items-center gap-1 text-base font-semibold text-white transition hover:text-[#163741] focus:outline-none">
              AntiTertipu
              <svg class="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <ul class="absolute left-0 mt-2 w-56 rounded-md bg-white shadow-xl ring-1 ring-black/5 border border-gray-200 z-50 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-200">
              <li><a href="#" class="block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AntiTertipu Umum</a></li>
              <li><a href="#" class="block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AntiTertipu Phising</a></li>
              <li><a href="#" class="block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AntiTertipu Pharming</a></li>
              <li><a href="#" class="block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AntiTertipu Sniffing</a></li>
              <li><a href="#" class="block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AntiTertipu Social Engineering</a></li>
              <li><a href="#" class="block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AntiTertipu Money Rule</a></li>
            </ul>
          </li>
          <li>
            <a class="text-base font-semibold text-white transition hover:text-[#163741]" href="#/quiz">TipuMeter</a>
          </li>
        </ul>
      </nav>

      <!-- Login/Register desktop -->
      <div class="hidden md:flex gap-2">
        <a href="#/login" class="text-sm font-medium text-white bg-[#2C6F82] px-4 py-2 rounded">Login</a>
        <a href="#/register" class="text-sm font-medium text-[#2C6F82] bg-white px-4 py-2 rounded hover:bg-gray-100">Register</a>
      </div>

      <!-- Mobile toggle and menu -->
      <div class="relative md:hidden flex items-center">
        <input type="checkbox" id="menu-toggle" class="peer hidden">
        
        <label for="menu-toggle" class="cursor-pointer rounded bg-gray-100 p-2.5 text-gray-600 z-50">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>

        <!-- Mobile menu -->
        <div class="peer-checked:flex hidden absolute right-0 top-full mt-2 w-56 flex-col gap-2 rounded-md bg-white p-4 shadow-lg z-40">
          <a href="#" class="block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-gray-200">CekAjaDulu</a>
          <a href="#" class="block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-gray-200">AntiTertipu</a>
          <a href="#/quiz" class="block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-gray-200">TipuMeter</a>

          <div class="border-t pt-2 mt-2 flex flex-col gap-2">
            <a href="#/login" class="text-sm font-medium text-white bg-[#2C6F82] px-4 py-2 rounded text-center">Login</a>
            <a href="#/register" class="text-sm font-medium text-[#2C6F82] border border-[#2C6F82] px-4 py-2 rounded text-center hover:bg-gray-100 active:bg-gray-200">Register</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
}

export function generateNavbarAuthTemplate() {
  const token = getAccessToken();
  let name = 'User';
  let email = '-';
  let avatarUrl = 'https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff';

  if (token) {
    const decoded = parseJwt(token);
    if (decoded && decoded.email) {
      email = decoded.email;
      name = email.split('@')[0];
      avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0E2148&color=fff`;
    }
  }

  return `
  <div class="bg-[#42A7C3]">
    <div class="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <!-- Logo -->
      <a class="text-white font-bold text-lg" href="#">Logo Sadar</a>

      <!-- Desktop Navbar -->
      <nav class="hidden md:flex justify-center flex-1">
        <ul class="flex items-center gap-6 text-sm">
          <li>
            <a class="text-base font-semibold text-white transition hover:text-[#163741]" href="#">CekAjaDulu</a>
          </li>
          <li class="relative group">
              <a href="#/module-overview" class="flex items-center gap-1 text-base font-semibold text-white transition hover:text-[#163741] focus:outline-none">
              AntiTertipu
              <svg class="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <ul class="absolute left-0 mt-2 w-56 rounded-md bg-white shadow-xl ring-1 ring-black/5 border border-gray-200 z-50 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-200">
              <li><a href="#" class="block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AntiTertipu Umum</a></li>
              <li><a href="#" class="block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AntiTertipu Phising</a></li>
              <li><a href="#" class="block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AntiTertipu Pharming</a></li>
              <li><a href="#" class="block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AntiTertipu Sniffing</a></li>
              <li><a href="#" class="block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AntiTertipu Social Engineering</a></li>
              <li><a href="#" class="block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AntiTertipu Money Rule</a></li>
            </ul>
          </li>
          <li>
            <a class="text-base font-semibold text-white transition hover:text-[#163741]" href="#/quiz">TipuMeter</a>
          </li>
        </ul>
      </nav>

      <!-- Desktop Profile -->
      <div class="relative hidden md:flex items-center">
        <button
          type="button"
          class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
          id="user-menu-button"
          aria-expanded="false">
          <span class="sr-only">Open user menu</span>
          <img class="w-8 h-8 rounded-full" src="${avatarUrl}" alt="${name}" />
        </button>

        <!-- Dropdown -->
        <div
          id="user-dropdown"
          class="absolute right-0 top-full mt-2 z-50 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow">
          <div class="px-4 py-3">
            <span class="block text-sm text-gray-900">${name}</span>
            <span class="block text-sm text-gray-500 truncate">${email}</span>
          </div>
          <ul class="py-2" aria-labelledby="user-menu-button">
            <li>
              <a href="#" id="logout-btn" class="block px-4 py-2 text-sm text-red-500 hover:bg-gray-100">Sign out</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Mobile Navbar -->
      <div class="relative md:hidden flex items-center">
        <input type="checkbox" id="menu-toggle" class="peer hidden">
        <label for="menu-toggle" class="cursor-pointer rounded bg-gray-100 p-2.5 text-gray-600 z-50">
          <svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
        <div class="peer-checked:flex hidden absolute right-0 top-full mt-2 w-56 flex-col gap-2 rounded-md bg-white p-4 shadow-lg z-40">
          <a href="#" class="block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">CekAjaDulu</a>
          <a href="#" class="block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AntiTertipu</a>
          <a href="#/quiz" class="block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">TipuMeter</a>
          <div class="border-t pt-2 mt-2 flex flex-col gap-2">
            <a href="#" class="text-sm font-medium text-[#2C6F82] text-center">Hi, ${name}</a>
            <a href="#" id="logout-btn" class="text-sm font-medium text-white bg-[#2C6F82] px-4 py-2 rounded text-center">Logout</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
}

export function generateLeaderboardTemplate() {
  return `
        <section class="leaderboard flex flex-col md:flex-row gap-8 px-4 md:px-16 py-10">
          <div class="md:w-1/2 flex justify-center md:justify-start items-center">
            <div>
              <h2 class="text-4xl md:text-4xl font-semibold text-black">Tautan Mencurigakan yang<br/>Sering dicari</h2>
              <p class="mt-4 text-gray-500 text-base">
                Berikut merupakan tautan mencurigakan yang paling sering dicari oleh pengguna. 
                Berhati-hatilah setiap kali mengunjungi tautan mencurigakan yang belum anda ketahui secara pasti keamanannya.
              </p>
            </div>
          </div>

          <div class="md:w-1/2">
            <div class="flex gap-2 justify-end mb-4">
              <button class="px-4 py-1 border border-[#42A7C3] bg-[#42A7C3] text-white text-base font-regular rounded-4xl">semua</button>
              <button class="px-4 py-2 border border-[#42A7C3] bg-white text-gray-600 text-base font-regular rounded-4xl hover:bg-gray-200">bulan ini</button>
            </div>

            <ul class="space-y-3">
              <li class="flex items-start gap-3 p-4 border rounded-xl bg-white shadow-sm">
                <div class="w-12 h-12 rounded-lg bg-[#FFF1AA] text-[#2C6F82] text-xl font-bold flex items-center justify-center">1</div>
                <div>
                  <h3 class="text-xl text-gray-800 font-regular">http://tungtungtung sahur</h3>
                  <p class="text-base font-regular text-gray-500">telah dicari sebanyak 36 kali</p>
                </div>
              </li>
              <li class="flex items-start gap-3 p-4 border rounded-xl bg-white shadow-sm">
                <div class="w-12 h-12 rounded-lg bg-[#FFF1AA] text-[#2C6F82] text-xl font-bold flex items-center justify-center">2</div>
                <div>
                  <h3 class="text-xl text-gray-800 font-regular">http://tungtungtung sahur</h3>
                  <p class="text-base font-regular text-gray-500">telah dicari sebanyak 36 kali</p>
                </div>
              </li>
              <li class="flex items-start gap-3 p-4 border rounded-xl bg-white shadow-sm">
                <div class="w-12 h-12 rounded-lg bg-[#FFF1AA] text-[#2C6F82] text-xl font-bold flex items-center justify-center">3</div>
                <div>
                  <h3 class="text-xl text-gray-800 font-regular">http://tungtungtung sahur</h3>
                  <p class="text-base font-regular text-gray-500">telah dicari sebanyak 36 kali</p>
                </div>
              </li>
              <li class="flex items-start gap-3 p-4 border rounded-xl bg-white shadow-sm">
                <div class="w-12 h-12 rounded-lg bg-[#FFF1AA] text-[#2C6F82] text-xl font-bold flex items-center justify-center">4</div>
                <div>
                  <h3 class="text-xl text-gray-800 font-regular">http://tungtungtung sahur</h3>
                  <p class="text-base font-regular text-gray-500">telah dicari sebanyak 36 kali</p>
                </div>
              </li>
              <li class="flex items-start gap-3 p-4 border rounded-xl bg-white shadow-sm">
                <div class="w-12 h-12 rounded-lg bg-[#FFF1AA] text-[#2C6F82] text-xl font-bold flex items-center justify-center">5</div>
                <div>
                  <h3 class="text-xl text-gray-800 font-regular">http://tungtungtung sahur</h3>
                  <p class="text-base font-regular text-gray-500">telah dicari sebanyak 36 kali</p>
                </div>
              </li>
              <!-- Ulangi li untuk item 2-5 dengan nomor berbeda -->
            </ul>
          </div>
        </section>
    `;
}

export function generateFooterTemplate() {
  return `
        <footer class="bg-[#DFF0F5] font-jakarta text-[#858995] px-18 pt-12 pb-6">
          <div class="max-w-7xl mx-auto space-y-12">
            <div class="bg-white rounded-2xl px-14 py-18 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 class="text-2xl md:text-4xl font-semibold text-[#2C6F82] mb-4">Daftar untuk Pemberitauan Kami!</h2>
                <p class="text-sm md:text-base text-[#858995] max-w-xl">Dapatkan informasi terkini mengenai wawasan penipuan digital, layanan, dan penawaran eksklusif dengan berlangganan buletin kami.</p>
              </div>
              <div class="flex justify-end">
                <form class="flex flex-col gap-4 w-full max-w-md">
                  <input type="email" placeholder="Masukkan Email Anda" class="text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none">
                  <button type="submit" class=" text-base bg-[#42A7C3] text-white px-4 py-2 rounded-lg hover:bg-[#2C6F82] transition">Langganan Sekarang</button>
                </form>
              </div>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
              <div>
                <h3 class="font-semibold text-base mb-2">LOGO SADAR</h3>
                <p>Saring, Amankan, Deteksi,<br />Anti-Rugi</p>
              </div>
              <div>
                <h4 class="font-semibold mb-6 text-xl text-[#2C6F82]">Perusahaan</h4>
                <ul class="space-y-3 text-base">
                  <li><a href="#">Beranda</a></li>
                  <li><a href="#">CekAjaDulu</a></li>
                  <li><a href="#">AntiTertipu</a></li>
                  <li><a href="#">TipuMeter</a></li>
                  <li><a href="#">Tentang</a></li>
                </ul>
              </div>
              <div class="space-y-2">
                <h4 class="font-semibold mb-6 text-xl text-[#2C6F82]">Info Kontak</h4>
                <p>Capstone — Coding Camp Powered by DBS Foundation<br />CC25-CF265, ID</p>
                <a href="mailto:info@sadar.com" class="text-[#0081A7] hover:underline block mt-1">info@sadar.com</a>
                <p>0341–123–45–678</p>
              </div>
              <div>
                 <h4 class="font-semibold mb-6 text-xl text-[#2C6F82]">Ikuti Kami</h4>
                <ul class="space-y-3 text-base">
                  <li>Instagram</li>
                  <li>Facebook</li>
                  <li>LinkedIn</li>
                  <li>Twitter</li>
                </ul>
              </div>
              <div>
                 <h4 class="font-semibold mb-6 text-xl text-[#2C6F82]">Anggota Tim</h4>
                <ul class="space-y-3 text-base">
                  <li>Dwi Cahya Nurani</li>
                  <li>Kurniawan Chandra Wijaya</li>
                  <li>DzulFahmi Dzakia Ahmad</li>
                  <li>Alya Maisa Hudanis</li>
                  <li>Puti Narita Adzra</li>
                  <li>Jessica Bunga Yuniartha</li>
                </ul>
              </div>
            </div>

            <div class="border-t border-gray-300 pt-6 mt-6">
              <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-[#2C6F82]">
                <p>Copyright © 2025 Sadar, All rights reserved.</p>
                <div class="flex space-x-4 mt-2 md:mt-0">
                  <ul class="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
                    <li>
                      <a
                        href="#"
                        rel="noreferrer"
                        target="_blank"
                        class="text-gray-700 transition hover:opacity-75"
                      >
                        <span class="sr-only">Facebook</span>

                        <svg class="size-6" fill="#2C6F82" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fill-rule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        rel="noreferrer"
                        target="_blank"
                        class="text-gray-700 transition hover:opacity-75"
                      >
                        <span class="sr-only">Instagram</span>

                        <svg class="size-6" fill="#2C6F82" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fill-rule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        rel="noreferrer"
                        target="_blank"
                        class="text-gray-700 transition hover:opacity-75"
                      >
                        <span class="sr-only">Twitter</span>

                        <svg class="size-6" fill="#2C6F82" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                          />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        rel="noreferrer"
                        target="_blank"
                        class="text-gray-700 transition hover:opacity-75"
                      >
                        <span class="sr-only">GitHub</span>

                        <svg class="size-6" fill="#2C6F82" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fill-rule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        rel="noreferrer"
                        target="_blank"
                        class="text-gray-700 transition hover:opacity-75"
                      >
                        <span class="sr-only">Dribbble</span>

                        <svg class="size-6" fill="#2C6F82" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fill-rule="evenodd"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
    `;
}

export function generateScamTypeTemplate() {
  return `
        //isi disini...
    `;
}

export function generateQuizNavTemplate() {
  return `

  `;
}

export function generateQuizFooterTemplate() {
  return `
        <footer class="bg-white font-jakarta text-[#858995] px-18 pt-8 pb-6">
          <div class="border-t border-gray-300 pt-6">
                <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-[#2C6F82]">
                  <p>Copyright © 2025 Sadar, All rights reserved.</p>
                  <div class="flex space-x-4 mt-2 md:mt-0">
                    <ul class="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
                      <li>
                        <a
                          href="#"
                          rel="noreferrer"
                          target="_blank"
                          class="text-gray-700 transition hover:opacity-75"
                        >
                          <span class="sr-only">Facebook</span>

                          <svg class="size-6" fill="#2C6F82" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                              fill-rule="evenodd"
                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          rel="noreferrer"
                          target="_blank"
                          class="text-gray-700 transition hover:opacity-75"
                        >
                          <span class="sr-only">Instagram</span>

                          <svg class="size-6" fill="#2C6F82" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                              fill-rule="evenodd"
                              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          rel="noreferrer"
                          target="_blank"
                          class="text-gray-700 transition hover:opacity-75"
                        >
                          <span class="sr-only">Twitter</span>

                          <svg class="size-6" fill="#2C6F82" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                              d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                            />
                          </svg>
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          rel="noreferrer"
                          target="_blank"
                          class="text-gray-700 transition hover:opacity-75"
                        >
                          <span class="sr-only">GitHub</span>

                          <svg class="size-6" fill="#2C6F82" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                              fill-rule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          rel="noreferrer"
                          target="_blank"
                          class="text-gray-700 transition hover:opacity-75"
                        >
                          <span class="sr-only">Dribbble</span>

                          <svg class="size-6" fill="#2C6F82" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                              fill-rule="evenodd"
                              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
    `;
}

export function generateModuleFooterTemplate() {
  return `
        //isi disini...
    `;
}

export function generateProgressQuizTemplate() {
  const dots = Array(12)
    .fill(`<span class="w-2 h-2 rounded-full bg-[#42A7C3] opacity-100 inline-block"></span>`)
    .join('');

  return `
    <div class="w-full max-w-xl md:max-w-[640px] mx-auto mt-6 px-4">
      <div class="flex flex-col gap-2 text-left">
        <div>
          <p class="text-sm font-semibold text-gray-500">TipuMeter</p>
          <p id="progress-text" class="text-base font-semibold text-[#42A7C3]">0/12 telah dijawab</p>
        </div>

        <div class="relative w-full h-4 bg-[#E0E0E0] rounded-lg overflow-hidden border border-gray-300 shadow-sm">
          <div id="progress-bar"
            class="absolute top-0 left-0 h-full bg-[#42A7C3] rounded-lg transition-all duration-300 z-0"
            style="width: 0%;">
          </div>

          <div id="progress-dots"
            class="absolute top-1/2 left-0 w-full flex justify-between px-1 -translate-y-1/2 pointer-events-none z-20">
            ${dots}
          </div>
        </div>
      </div>
    </div>
  `;
}

export function generateQuizQuestionMcqTemplate({ id, question, options, multiple = false }) {
  const inputType = multiple ? 'checkbox' : 'radio';
  const inputName = multiple ? `question-${id}[]` : `question-${id}`;

  return `
    <div class="quiz-container w-full max-w-[600px] mx-auto p-6 space-y-8">
      <h2 class="text-md font-regular text-[#000000] text-justify leading-relaxed">${question}</h2>

      <form class="space-y-3 mt-5 mb-8" data-question-id="${id}">
        ${options
          .map(
            (option, index) => `
          <label class="flex items-center gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-yellow-400 transition-all peer-checked:border-yellow-400">
            <div class="flex-shrink-0">
              <input
                type="${inputType}"
                name="${inputName}"
                value="${option}"
                id="${inputName}-${index}"
                class="peer hidden"
              />
              <span class="
                block w-5 h-5 border-2
                ${multiple ? 'rounded-md' : 'rounded-full'}
                border-gray-300
                peer-checked:border-yellow-400
                relative
              ">
                <span class="
                  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                  ${multiple ? 'w-2 h-2' : 'w-2.5 h-2.5 rounded-full'}
                  bg-yellow-400 scale-0 peer-checked:scale-100
                  transition-transform duration-200
                "></span>
              </span>
            </div>
            <span class="text-md font-regular text-[#000000] leading-snug">${option}</span>
          </label>
        `,
          )
          .join('')}
      </form>

      <p id="error-message" class="text-sm text-red-500 mt-2 hidden">*Pilih jawaban sebelum melanjutkan.</p>

      <div class="pt-4 text-center">
        <button
          class="bg-[#42A7C3] hover:bg-[#2C6F82] text-white font-semibold py-2 px-6 rounded-md shadow transition-all"
          id="next-button"
        >
          Berikutnya
        </button>
      </div>
    </div>
  `;
}

export function generateQuizQuestionDragdropTemplate({ id, question, options, dropZones }) {
  const shuffled = options.map((item) => ({ ...item })).sort(() => Math.random() - 0.5);

  return `
    <div class="quiz-container w-full max-w-[600px] mx-auto p-6 space-y-8">
      <h2 class="text-md font-regular text-gray-800 text-justify mb-4">${question}</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-4">
        ${shuffled
          .map(
            (item, index) => `
          <div
            class="bg-[#DFF0F5] text-gray-800 text-sm text-center px-3 py-2 rounded-md cursor-move shadow-md draggable"
            data-value="${item.text}"
            data-category="${item.category}"
            data-id="option-${index}"
          >
            ${item.text}
          </div>
        `,
          )
          .join('')}
      </div>

      <div class="flex flex-col md:flex-row gap-6 mt-4">
        ${dropZones
          .map((label, i) => {
            const zoneKey = label.toLowerCase().replace(/\s+/g, '-'); // contoh: "Tidak Setuju" → "tidak-setuju"
            return `
            <div class="w-full border border-gray-300 rounded-lg p-4 space-y-3">
              <p class="text-center text-base font-medium text-gray-700 mb-2">${label}</p>
              <div
                class="drop-zone flex flex-col gap-2 p-2 w-full min-h-[300px] border-2 border-dashed border-gray-300 rounded-lg overflow-auto"
                data-accept="${zoneKey}"
                id="zone-${zoneKey}"
              >
                <span class="placeholder text-sm text-gray-400 text-center select-none pointer-events-none">Tarik ke sini</span>
              </div>
            </div>
          `;
          })
          .join('')}
      </div>

      <p id="error-message" class="text-sm text-red-500 mt-2 hidden">*Pilih jawaban sebelum melanjutkan.</p>

      <div class="text-center pt-6">
        <button
          class="bg-[#42A7C3] hover:bg-[#2C6F82] text-white font-semibold py-2 px-6 rounded-md shadow transition-all"
          id="next-button"
        >
          Berikutnya
        </button>
      </div>
    </div>
  `;
}

export function generateResultTemplate(characterData, recommendedModules) {
  const resultContainer = document.getElementById('app');
  resultContainer.innerHTML = `
    <section class="px-4 py-8 max-w-4xl mx-auto">
      <div class="flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl shadow-md p-6">
        <img src="/images/character/${characterData.image}" alt="${characterData.name}" class="w-32 h-32 object-contain"/>
        <div>
          <h2 class="text-2xl font-bold mb-2">${characterData.name}</h2>
          <div class="flex flex-wrap gap-2 mb-3">
            ${characterData.traits
              .map(
                (trait) => `
              <span class="px-4 py-2 border border-[#42A7C3] bg-white text-[#42A7C3] text-sm font-regular rounded-4xl">${trait}</span>
            `,
              )
              .join('')}
          </div>
          <p class="text-gray-700">${characterData.description}</p>
        </div>
      </div>

      <div class="mt-12">
        <h3 class="text-xl font-semibold mb-2">Rekomendasi Modul Belajar</h3>
        <p class="text-gray-600 mb-6">
          Wah, sepertinya kamu perlu memperkuat pemahaman soal topik-topik berikut ini.
          Yuk pelajari lebih lanjut lewat modul di bawah ini.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${recommendedModules
            .map(
              (module) => `
            <div class="flex items-start gap-4 p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
              <img src="/images/modules/${module.image}" alt="${module.title}" class="w-12 h-12 object-contain"/>
              <div>
                <h4 class="text-lg font-semibold mb-1">${module.title}</h4>
                <p class="text-sm text-gray-600 mb-2">${module.description}</p>
                <a href="${module.link}" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#2C6F82] bg-[#DFF0F5] rounded-lg hover:bg-[#2C6F82] hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Mulai Belajar
                  <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
              </div>
            </div>
          `,
            )
            .join('')}
        </div>
      </div>

      <!-- Tombol Kembali -->
      <div class="mt-10 text-center">
        <button id="btn-back-home" class=" text-base bg-[#42A7C3] text-white px-8 py-2 rounded-lg hover:bg-[#2C6F82] transition">
          Kembali Ke Beranda
        </button>
      </div>
    </section>
  `;

  document.getElementById('btn-back-home').addEventListener('click', () => {
    window.location.hash = ''; // atau kamu bisa redirect ke halaman landing
  });
}

export function generateQuizResolveTemplate() {}
