import Homepage from '../pages/homepage/homepage-page';
import QuizPage from '../pages/tipumeter/quiz/quiz-page';
import Result from '../pages/tipumeter/result/result-page';
import QuizIntroPage from '../pages/tipumeter/quiz/quiz-intro-page';
import LoginPage from '../pages/auth/login/login-page';
import RegisterPage from '../pages/auth/register/register-page';
import ForgotPasswordPage from '../pages/auth/forgot-password/password-page';
import ResetPasswordPage from '../pages/auth/reset-password/reset-page';
import ModuleIntroPage from '../pages/antitertipu/intro-antitertipu';
import ModuleDetailPage from '../pages/antitertipu/detailModul/detailAt-page';
import ModuleLayoutPage from '../pages/antitertipu/layoutMateri/layout-page';
import QuizMateriPage from '../pages/antitertipu/quizMateri/QuizMateri-page';
import HasilQuizMateri from '../pages/antitertipu/hasilQuiz/HQMateri-page';

const routes = {
  '/login': () => new LoginPage(),
  '/register': () => new RegisterPage(),
  '/forgot-password': () => new ForgotPasswordPage(),
  '/reset-password': () => new ResetPasswordPage(),
  '/': () => new Homepage(),
  '/quiz': () => new QuizIntroPage(),
  '/quiz/take-quiz': () => new QuizPage(),
  '/result': () => new Result(),
  '/module-overview': () => new ModuleIntroPage(),
  '/detail-module-penipuan-online': () => new ModuleDetailPage(),
  '/modul-belajar': () => new ModuleLayoutPage(),
  '/quiz-modul': () => new QuizMateriPage(),
  '/result-module': () => new HasilQuizMateri(), 
};

export default routes;
