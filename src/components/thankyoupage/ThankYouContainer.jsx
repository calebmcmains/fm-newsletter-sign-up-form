import Button from "../Button";
import imgUrl from "../../assets/images/icon-success.svg";

function ThankYouContainer({ email, onClick }) {
  return (
    <>
      <div className="flex w-[35%] lg:w-1/2 md:w-full md:h-full md:rounded-none bg-white rounded-4xl items-center">
        <section className="mx-16 py-16 text-neutral-gray-700 md:mx-8">
          <img className="mb-10" src={imgUrl} alt="" />
          <h1 className="font-bold text-5xl leading-none mb-7 xl:text-4xl">
            Thanks for subscribing!
          </h1>
          <p className="mb-10 md:mb-60">
            A confirmation email has been sent to{" "}
            <span className="font-bold">{email}</span>. Please open it and click
            the button inside to confirm your subscription.
          </p>

          <Button text={"Dismiss message"} type={"button"} onClick={onClick} />
        </section>
      </div>
    </>
  );
}

export default ThankYouContainer;
