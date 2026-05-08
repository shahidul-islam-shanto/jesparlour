import AuthShell from "../../Components/Auth/AuthShell";
import { inputClass } from "../../Components/Auth/authStyles";

const Login = () => {
  return (
    <AuthShell
      eyebrow="Welcome back"
      title="Log in to manage your beauty appointments."
      subtitle="Access bookings, saved services, and personalized treatment notes from one calm, polished space."
      buttonText="Login"
      alternateText="New to Jerin's Parlour?"
      alternateLink="/registration"
      alternateLinkText="Create an account"
    >
      <label className="grid gap-2">
        <span className="text-[15px] font-semibold text-nu20">Email</span>
        <input
          type="email"
          placeholder="you@example.com"
          className={inputClass}
        />
      </label>

      <label className="grid gap-2">
        <span className="text-[15px] font-semibold text-nu20">Password</span>
        <input
          type="password"
          placeholder="Enter your password"
          className={inputClass}
        />
      </label>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <label className="flex items-center gap-2 text-[14px] text-nu40">
          <input type="checkbox" className="h-4 w-4 accent-secondary1" />
          Remember me
        </label>
        <a href="/" className="text-[14px] font-semibold text-secondary1">
          Forgot password?
        </a>
      </div>
    </AuthShell>
  );
};

export default Login;
