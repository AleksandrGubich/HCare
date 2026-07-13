type ContactMethodProps = {
  label: string;
  enabled?: boolean;
};

export const ContactMethod = ({ label, enabled }: ContactMethodProps) => {
  return (
    <div className="flex flex-col gap-2 px-4.75 py-2 sm:flex-row sm:items-center sm:justify-between">
      <div>{label}</div>
      <div className="flex items-center gap-4 text-xs">
        <span className="text-[#70707A]">DENY</span>
        <button
          type="button"
          className="relative h-4 w-8.5 rounded-full bg-[#D9D9D9]"
          aria-label={`${label} preference ${enabled ? "enabled" : "disabled"}`}
        >
          <span
            className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full ${!enabled ? "left-0 bg-[#FC1C1C]" : "right-0 bg-[#1F7A46]"}`}
          />
        </button>
        <span className="text-[#1F7A46]">ALLOW</span>
      </div>
    </div>
  );
};
