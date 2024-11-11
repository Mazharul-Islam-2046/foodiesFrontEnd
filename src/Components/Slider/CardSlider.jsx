import PropTypes from 'prop-types'
import FoodCard from '../Card/FoodCard';

const CardSlider = (options) => {

    const cardType = options.cardType;

    return (
        <div>
            {
                cardType === "food" ? <FoodCard/> : <div>cat</div>
            }
        </div>
    );
};

export default CardSlider;


CardSlider.propTypes = {
    options: PropTypes.object
}