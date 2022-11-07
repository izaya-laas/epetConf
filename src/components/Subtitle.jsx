const Subtitle = ({ children, className }) => {
  return (
    <h2
      className={`pb-12 font-bold text-transparent text-3xl desktop:text-5xl bg-clip-text bg-gradient-to-r from-fourth-color via-primary-color to-fourth-color ${className}`}
    >
      {children}
    </h2>
  );
};

export default Subtitle;
