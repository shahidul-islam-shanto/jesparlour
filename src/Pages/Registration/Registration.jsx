import AuthShell from "../../Components/Auth/AuthShell";
import { inputClass } from "../../Components/Auth/authStyles";
import useAuth from "../../hooks/useAuth";

const Registration = () => {
  const { createUser } = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle registration logic here
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(firstName, lastName, email, password)
    .then((result) => {
      console.log(result.user);
    })
    .catch((error) => {
      console.error(error);
    });
  };
  return (
    <AuthShell
      eyebrow="Join us"
      title="Create your salon account in a few simple steps."
      subtitle="Save your details, book faster, and keep every treatment plan neatly connected to your profile."
      buttonText="Create Account"
      alternateText="Already have an account?"
      alternateLink="/login"
      alternateLinkText="Login"
    >
      <form>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-[15px] font-semibold text-nu20">
              First name
            </span>
            <input
              type="text"
              placeholder="First name"
              className={inputClass}
            />
          </label>

          <label className="grid gap-2">
            <span className="text-[15px] font-semibold text-nu20">
              Last name
            </span>
            <input type="text" placeholder="Last name" className={inputClass} />
          </label>
        </div>
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
            placeholder="Create a password"
            className={inputClass}
          />
        </label>
        <label className="flex items-start gap-2 text-[14px] leading-6 text-nu40">
          <input type="checkbox" className="mt-1 h-4 w-4 accent-secondary1" />I
          agree to receive booking updates and salon care reminders.
        </label>
      </form>
    </AuthShell>
  );
};

export default Registration;
