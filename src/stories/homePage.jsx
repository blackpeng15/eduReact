import React, { } from 'react';
import PropTypes from 'prop-types';
import HomePageComponent from '../06/HomePageComponent';

export const HomePage = ({ name, ...props }) => {
    return (
        <HomePageComponent />
    );
};

HomePage.propTypes = {
    name: PropTypes.string
};

HomePage.defaultProps = {
    name: '무제'
};