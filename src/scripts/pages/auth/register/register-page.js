import RegisterPresenter from './register-presenter';
export default class RegisterPage {
  #presenter = null;

  async render() {
    return `
      <section class="login-container flex flex-col items-center gap-0 md:flex-row xl:gap-10">
        <aside class="hidden flex flex-col items-center justify-start md:block items-start border border-gray-300 rounded-lg border-1 m-5 pt-10 md:px-8 md:pb-15 w-full md:w-1/2 max-w-xl xl:block items-start border border-gray-300 rounded-lg border-1 m-5 pt-10 px-15 pb-15 w-full">
            <img src="images/logo-sadar-dark.svg" class="w-[150px] h-auto" alt="Logo"">
            <h1 class="text-2xl xl:text-3xl font-bold mt-4 text-center md:text-left">Bergabung dengan SADAR</h1>
            <h2 class="text-lg font-regular text-[#2C6F82] mt-2">Mulai langkahmu melawan penipuan dan ancaman online</h2>
            <img src="images/register-illustration.svg" class="max-w-100 mt-6" alt="ilustasi registrasi">
        </aside>
      
        <div class="w-full max-w-xl flex flex-col items-center p-8 sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <img src="images/logo-sadar-dark.svg" class="w-[120px] mt-10 h-auto md:hidden" alt="Logo"">
            <form class="space-y-5" action="#">
                <h1 class="mt-5 text-2xl text-center font-bold md:text-3xl md:font-medium text-gray-900 dark:text-white">Buat Akun</h1>
                <h2 class="text-center md:text-md md:font-regular text-gray-500">Daftarkan dirimu dan jadi bagian dari gerakan SADAR</h2>
                <div>
                    <label for="email" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                </div>
                <div>
                    <label for="password" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>
                <div>
                    <label for="confirm_password" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Konfirmasi password</label>
                    <input type="password" id="confirm_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                </div>
                
                <button type="submit" class="w-full text-white bg-[#378BA2] hover:bg-[#2C6F82] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Daftar Sekarang</button>
                <div class="text-sm font-regular text-gray-500 dark:text-gray-300">
                    Sudah punya akun? <a href="#/login" class="text-[#378BA2] hover:font-medium hover:underline dark:text-blue-500">Buat akun</a>
                </div>
            </form>
        </div>
      </section>
    `;
  }

  afterRender() {
    this.#presenter = new RegisterPresenter();
  }
}
