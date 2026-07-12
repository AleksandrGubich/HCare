const ratingColors = [
  "#FF0000",
  "#FF240C",
  "#FF4919",
  "#FF6D25",
  "#FF9232",
  "#E3AE47",
  "#AAC266",
  "#71D785",
  "#39EBA3",
  "#00FFC2",
];

type RatingQuestionProps = {
  question: string;
};

export const RatingQuestion = ({ question }: RatingQuestionProps) => {
  return (
    <div className="flex flex-col rounded-xl border border-[#ECECED] p-4 sm:p-6 lg:p-8">
      <h2 className="mb-6 font-poppins text-base font-medium text-[#171725] sm:mb-8 sm:text-lg">
        {question}
      </h2>
      <div className="mb-6 flex flex-wrap gap-3 sm:gap-4">
        {ratingColors.map((color, index) => {
          return (
            <button
              key={color}
              type="button"
              style={{ borderColor: color }}
              className="flex aspect-square w-10 shrink-0 items-center justify-center rounded-full border font-roboto text-sm sm:w-12 md:w-14 lg:w-17.25"
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <div className="flex flex-col gap-2 font-roboto text-sm sm:flex-row sm:items-center sm:justify-between sm:text-base">
        <p className="text-[#FF0000] sm:text-[#92929D]">
          Absolutely not satisfied
        </p>
        <p className="text-[#00FFC2] sm:text-[#92929D]">Absolutely satisfied</p>
      </div>
    </div>
  );
};
