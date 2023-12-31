import React, { PureComponent } from 'react';
import ButtonWithLoadingContext from './ButtonWithContext';
import LoadingProvider from './LoadingProvider';
import Button from '../04/Button';

function RowBComponent() {
    return <Button>버튼</Button>;
}

function RowCComponent() {
    return <ButtonWithLoadingContext>버튼</ButtonWithLoadingContext>;
}

function TableComponent() {
    return (
        <table>
            <RowBComponent />
            <RowCComponent />
        </table>
    );
}

class HomePageComponent extends PureComponent {
    render() {
        return (
            <LoadingProvider>
                <TableComponent />
                <ButtonWithLoadingContext label="상태변경" />
            </LoadingProvider>
        );
    }
}

// export default HomePageWithProvider;