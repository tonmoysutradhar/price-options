import PropTypes from 'prop-types';
import { FaCheckCircle } from "react-icons/fa";

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center gap-3'> 
                <FaCheckCircle className='text-red-500'></FaCheckCircle>
                {feature}
            </p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;