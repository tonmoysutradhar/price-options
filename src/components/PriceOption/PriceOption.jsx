import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, currency, features } = option;

  return (
    <div className="bg-blue-300 rounded-xl p-4 mt-6 flex flex-col">
      <h2 className="text-center">
        <span className="text-4xl">
          {price} {currency}
        </span>
        <span className="text-xl">/mon</span>
      </h2>
      <h4 className="text-2xl text-center">{name}</h4>
      <div className="pl-5 flex-grow">
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature}></Feature>
        ))}
      </div>
      <button className="mt-10 bg-green-600 w-full py-2 rounded-xl hover:bg-green-700 font-bold">Buy Now</button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
