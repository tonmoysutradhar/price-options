import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

  const PriceOptions = [
    {
      id: 1,
      name: "Basic Plan",
      price: 20,
      currency: "USD",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free water refills",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 50,
      currency: "USD",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free water refills",
        "Access to group fitness classes",
        "One free personal training session per month",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 100,
      currency: "USD",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free water refills",
        "Unlimited group fitness classes",
        "Weekly personal training sessions",
        "Access to sauna and pool",
        "Priority booking for classes and trainers",
      ],
    },
    {
      id: 4,
      name: "Family Plan",
      price: 150,
      currency: "USD",
      features: [
        "Access to gym equipment for up to 4 family members",
        "Locker room access",
        "Free water refills",
        "Access to group fitness classes",
        "Monthly family wellness consultation",
        "Kid-friendly fitness zones",
      ],
    },
  ];

  return (
    <div>
        <div>
            <h2 className="text-5xl">Best prices in the town</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    PriceOptions.map(option => <PriceOption 
                    key={option.id}
                    option={option}
                    ></PriceOption>)
                }
            </div>
        </div>
    </div>
  );
};

export default PriceOptions;
