const Subtitle = ({ children, className }) => {
  return (
    <h2
      className={`pb-12 font-bold text-transparent text-3xl desktop:text-5xl bg-clip-text bg-gradient-to-r font-poppins from-white via-[var(--primary-color)] to-white ${className}`}
    >
      {children}
    </h2>
  );
};

export default Subtitle;
