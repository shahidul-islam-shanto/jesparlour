import { Link } from "react-router-dom";
import PrimaryButton from "../Buttons/PrimaryButton";

const AuthShell = ({
  title,
  subtitle,
  eyebrow,
  buttonText,
  alternateText,
  alternateLink,
  alternateLinkText,
  children,
}) => {
  return (
    <main className="min-h-screen bg-primary1 py-16 lg:py-24">
      <div className="container-2 grid items-center gap-10 lg:grid-cols-[0.9fr_1fr]">
        <section className="wow fadeInLeft">
          <p className="text-[15px] font-semibold uppercase tracking-[3px] text-secondary1">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-[520px] text-[38px] font-bold leading-tight text-nu20 md:text-[52px]">
            {title}
          </h1>
          <p className="mt-5 max-w-[480px] text-[16px] leading-8 text-nu40">
            {subtitle}
          </p>
        </section>

        <section className="wow fadeInRight rounded-md bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.08)] sm:p-8 lg:p-10">
          <form className="grid gap-5">
            {children}
            <PrimaryButton type="submit" className="mt-2 w-full">
              {buttonText}
            </PrimaryButton>
          </form>

          <p className="mt-6 text-center text-[15px] text-nu40">
            {alternateText}{" "}
            <Link
              to={alternateLink}
              className="font-semibold text-secondary1 transition hover:text-[#d92e68]"
            >
              {alternateLinkText}
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
};

export default AuthShell;
