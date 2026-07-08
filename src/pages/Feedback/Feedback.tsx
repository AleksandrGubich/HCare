import FeedbackBG from "../../assets/FeedbackBG.png";
import { PageCard } from "../../components/PageCard";
import { RatingQuestion } from "../../components/RatingQuestion";

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
        <RatingQuestion question="How satisfied are you with making an appointment?" />
        <RatingQuestion question="How satisfied are you with the doctor?" />
      </div>
    </PageCard>
  );
};
