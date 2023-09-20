import React from "react";
import PropTypes from 'prop-types';
import Button from '../04/Button';
import withLoadingContextAndKey, { loadingPropsTypes } from "./withLoadingContextAndKey";

function ButtonWithLoadingContext({children, loading, setLoading}){
    return(
        <Button onPress={()=>setLoading(!loading)}>
            {loading ? '로딩중': children}
        </Button>
    );
}

ButtonWithLoadingContext.propTypes = {
    ...loadingPropsTypes,
    children: PropTypes.string,
};

// export const ButtonWithDefaultLoadingContext = withLoadingContextAndKey()(ButtonWithDefaultLoadingContext);
export const ButtonWithLoading2Context = withLoadingContextAndKey('loading2')(ButtonWithLoadingContext);