const Subtitle = ({ children, className }) => {
  return (
    <h2
      className={`font-bold text-transparent text-4xl desktop:text-5xl bg-clip-text bg-gradient-to-r from-fourth-color via-primary-color to-fourth-color ${className} pt-12 desktop:pt-16`}
    >
      {children}
    </h2>
  );
};

export default Subtitle;
