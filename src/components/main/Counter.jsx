const Counter = () => {
  return (
    <section>
      <h2 className="text-xl">#epetConf comienza en:</h2>
      <div className="flex gap-x-4 justify-center text-3xl mt-4 text-[#121f3d]">
        <div className="flex flex-col w-16">
          <p className="">00</p>
          <span className="text-sm">Dias</span>
        </div>
        <div className="flex flex-col w-16">
          <p>00</p>
          <span className="text-sm">Horas</span>
        </div>
        <div className="flex flex-col w-16">
          <p>00</p>
          <span className="text-sm">Minutos</span>
        </div>
        <div className="flex flex-col w-16">
          <p>00</p>
          <span className="text-sm">Segundos</span>
        </div>
      </div>
    </section>
  );
};

export default Counter;
