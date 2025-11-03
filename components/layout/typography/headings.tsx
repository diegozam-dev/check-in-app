export const H2 = ({ label }: { label: string }) => {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {label}
    </h2>
  );
};

export const TypographyH3 = ({ label }: { label: string }) => {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {label}
    </h3>
  );
};
