import FeedbackBG from "../../assets/FeedbackBG.png";
import { PageCard } from "../../components/PageCard";

export const Feedback = () => {
  return (
    <PageCard>
      <div className="flex items-center justify-between p-5 sm:p-8 lg:p-10">
        <h1 className="font-poppins text-xl font-semibold text-[#171725] sm:text-2xl">
          Feedback
        </h1>
      </div>
      <img
        src={FeedbackBG}
        alt="Feedback"
        className="h-40 w-full object-cover sm:h-56 lg:h-auto"
      />
      <div className="flex flex-col items-center justify-center gap-3.5 px-5 py-6 text-center sm:px-8 lg:px-16 xl:px-33 xl:py-8">
        <h1 className="font-poppins text-xl font-semibold text-[#171725] sm:text-2xl">
          We value your feedback!
        </h1>
        <p className="font-roboto text-sm text-[#92929D] sm:text-base">
          Share your opinion on the quality of our services
        </p>
      </div>
      <div className="flex flex-col gap-4 px-5 py-2 pb-6 sm:px-8 lg:px-16 xl:px-33">
        <div className="flex flex-col rounded-xl border border-[#ECECED] p-4 sm:p-6 lg:p-8">
          <h2 className="mb-6 font-poppins text-base font-medium text-[#171725] sm:mb-8 sm:text-lg">
            How satisfied are you with making an appointment?
          </h2>
          <div className="mb-6 flex flex-wrap gap-3 sm:gap-4">
            <button
              type="button"
              className="flex aspect-square w-10 shrink-0 items-center justify-center rounded-full border border-[#FF0000] font-roboto text-sm sm:w-12 md:w-14 lg:w-17.25"
            >
              1
            </button>
            <button
              type="button"
              className="flex aspect-square w-10 shrink-0 items-center justify-center rounded-full border border-[#FF240C] font-roboto text-sm sm:w-12 md:w-14 lg:w-17.25"
            >
              2
            </button>
            <button
              type="button"
              className="flex aspect-square w-10 shrink-0 items-center justify-center rounded-full border border-[#FF4919] font-roboto text-sm sm:w-12 md:w-14 lg:w-17.25"
            >
              3
            </button>
            <button
              type="button"
              className="flex aspect-square w-10 shrink-0 items-center justify-center rounded-full border border-[#FF6D25] font-roboto text-sm sm:w-12 md:w-14 lg:w-17.25"
            >
              4
            </button>
            <button
              type="button"
              className="flex aspect-square w-10 shrink-0 items-center justify-center rounded-full border border-[#FF9232] font-roboto text-sm sm:w-12 md:w-14 lg:w-17.25"
            >
              5
            </button>
            <button
              type="button"
              className="flex aspect-square w-10 shrink-0 items-center justify-center rounded-full border border-[#E3AE47] font-roboto text-sm sm:w-12 md:w-14 lg:w-17.25"
            >
              6
            </button>
            <button
              type="button"
              className="flex aspect-square w-10 shrink-0 items-center justify-center rounded-full border border-[#AAC266] font-roboto text-sm sm:w-12 md:w-14 lg:w-17.25"
            >
              7
            </button>
            <button
              type="button"
              className="flex aspect-square w-10 shrink-0 items-center justify-center rounded-full border border-[#71D785] font-roboto text-sm sm:w-12 md:w-14 lg:w-17.25"
            >
              8
            </button>
            <button
              type="button"
              className="flex aspect-square w-10 shrink-0 items-center justify-center rounded-full border border-[#39EBA3] font-roboto text-sm sm:w-12 md:w-14 lg:w-17.25"
            >
              9
            </button>
            <button
              type="button"
              className="flex aspect-square w-10 shrink-0 items-center justify-center rounded-full border border-[#00FFC2] font-roboto text-sm sm:w-12 md:w-14 lg:w-17.25"
            >
              10
            </button>
          </div>
          <div className="flex flex-col gap-2 font-roboto text-sm sm:flex-row sm:items-center sm:justify-between sm:text-base">
            <p className="text-[#FF0000] sm:text-[#92929D]">
              Absolutely not satisfied
            </p>
            <p className="text-[#00FFC2] sm:text-[#92929D]">
              Absolutely satisfied
            </p>
          </div>
        </div>
        <div className="flex flex-col rounded-xl border border-[#ECECED] p-4 sm:p-6 lg:p-8">
          <h2 className="mb-6 font-poppins text-base font-medium text-[#171725] sm:mb-8 sm:text-lg">
            How satisfied are you with the doctor?
          </h2>
          <div className="mb-6 flex flex-wrap gap-3 sm:gap-4">
            <button
              type="button"
              className="flex aspect-square w-10 shrink-0 items-center justify-center rounded-full border border-[#FF0000] font-roboto text-sm sm:w-12 md:w-14 lg:w-17.25"
            >
              1
            </button>
            <button
              type="button"
              className="flex aspect-square w-10 shrink-0 items-center justify-center rounded-full border border-[#FF240C] font-roboto text-sm sm:w-12 md:w-14 lg:w-17.25"
            >
              2
            </button>
            <button
              type="button"
              className="flex aspect-square w-10 shrink-0 items-center justify-center rounded-full border border-[#FF4919] font-roboto text-sm sm:w-12 md:w-14 lg:w-17.25"
            >
              3
            </button>
            <button
              type="button"
              className="flex aspect-square w-10 shrink-0 items-center justify-center rounded-full border border-[#FF6D25] font-roboto text-sm sm:w-12 md:w-14 lg:w-17.25"
            >
              4
            </button>
            <button
              type="button"
              className="flex aspect-square w-10 shrink-0 items-center justify-center rounded-full border border-[#FF9232] font-roboto text-sm sm:w-12 md:w-14 lg:w-17.25"
            >
              5
            </button>
            <button
              type="button"
              className="flex aspect-square w-10 shrink-0 items-center justify-center rounded-full border border-[#E3AE47] font-roboto text-sm sm:w-12 md:w-14 lg:w-17.25"
            >
              6
            </button>
            <button
              type="button"
              className="flex aspect-square w-10 shrink-0 items-center justify-center rounded-full border border-[#AAC266] font-roboto text-sm sm:w-12 md:w-14 lg:w-17.25"
            >
              7
            </button>
            <button
              type="button"
              className="flex aspect-square w-10 shrink-0 items-center justify-center rounded-full border border-[#71D785] font-roboto text-sm sm:w-12 md:w-14 lg:w-17.25"
            >
              8
            </button>
            <button
              type="button"
              className="flex aspect-square w-10 shrink-0 items-center justify-center rounded-full border border-[#39EBA3] font-roboto text-sm sm:w-12 md:w-14 lg:w-17.25"
            >
              9
            </button>
            <button
              type="button"
              className="flex aspect-square w-10 shrink-0 items-center justify-center rounded-full border border-[#00FFC2] font-roboto text-sm sm:w-12 md:w-14 lg:w-17.25"
            >
              10
            </button>
          </div>
          <div className="flex flex-col gap-2 font-roboto text-sm sm:flex-row sm:items-center sm:justify-between sm:text-base">
            <p className="text-[#FF0000] sm:text-[#92929D]">
              Absolutely not satisfied
            </p>
            <p className="text-[#00FFC2] sm:text-[#92929D]">
              Absolutely satisfied
            </p>
          </div>
        </div>
      </div>
    </PageCard>
  );
};
