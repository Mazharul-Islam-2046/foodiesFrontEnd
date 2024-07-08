import PropTypes from 'prop-types'

const CardSlider = (options) => {

    const cardType = options.cardType;

    return (
        <div>
            {
                cardType === "food" ? <div>food</div> : <div>cat</div>
            }
        </div>
    );
};

export default CardSlider;


CardSlider.propTypes = {
    options: PropTypes.object
}