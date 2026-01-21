const HowWeWork = () => {
    const steps = [
      {
        number: "01",
        title: "Step One",
        desc: "Easily book your desired services online on our website",
      },
      {
        number: "02",
        title: "Step Two",
        desc: "We send over our best maids to your location and clean as you relax",
      },
      {
        number: "03",
        title: "Step Three",
        desc: "You can pay after the service by cash, card, bank transfer or online payment",
      },
    ];
  
    return (
      <section className="py-20 text-center bg-gray-50">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-20">
          How we work
        </h2>
  
        {/* Cards */}
        <div className="grid grid-cols-1 place-items-center md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
          {steps.map((step, index) => (
            <div key={index} className="relative flex justify-center h-44 max-w-72.5">
              {/* Number Badge */}
              <div className="absolute -top-6 left-8 bg-white border-2 text-primary w-16 h-16 rounded-xl flex items-center justify-center text-xl font-bold rotate-[-8deg] z-10">
                {step.number}
              </div>
  
              {/* Card */}
              <div className="bg-primary text-white rounded-2xl p-8 pt-12 w-full max-w-sm shadow-lg">
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-sm opacity-90">{step.desc}</p>
  
                {/* Bottom underline */}
                {/* <div className="mt-6 h-2 w-24 bg-blue-600 rounded-full mx-auto"></div> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default HowWeWork;
  