import PerkList from "./PerkList";
import EmailInput from "./EmailInput";
import imgUrlDesktop from "../../assets/images/illustration-sign-up-desktop.svg";
import imgUrlMobile from "../../assets/images/illustration-sign-up-mobile.svg";
import { forwardRef } from "react";

const SignUpContainer = forwardRef(function SignUpContainer(
  { email, error, onSubmit, onChange },
  ref,
) {
  return (
    <>
      <div className="grid grid-cols-2 gap-16 w-[65%] max-w-[80rem] md:w-full md:h-full md:rounded-none md:grid-rows-3 md:gap-0 md:grid-cols-1 lg:grid-cols-3 lg:gap-8 lg:w-[90%] xl:w-[75%] bg-white rounded-4xl justify-between items-center lg:items-start">
        <section className="ps-16 py-16 text-neutral-gray-700 md:row-start-2 md:px-8 md:pt-5 md:row-span-2 lg:col-span-2">
          <h1 className="text-5xl font-bold mb-4 tracking-wide sm:text-4xl">
            Stay updated!
          </h1>
          <p className="mb-6">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <PerkList />
          <EmailInput
            ref={ref}
            email={email}
            error={error}
            onSubmit={onSubmit}
            onChange={onChange}
          />
        </section>
        <section className="py-6 pe-6 h-full md:py-0 md:pe-0 ">
          <picture className="flex h-full w-full overflow-hidden rounded-2xl md:rounded-t-none">
            <source media="(max-width: 768px)" srcSet={imgUrlMobile} sizes="" />
            <img className="object-cover w-full" src={imgUrlDesktop} alt="" />
          </picture>
        </section>
      </div>
    </>
  );
});

export default SignUpContainer;
