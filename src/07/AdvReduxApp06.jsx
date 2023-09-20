import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { setCollection } from './actions/collectionActions01';
import { setAge } from './actions/collectionActions02';
import PresentationComponent from './PresentationComponent';
import ContainerComponent from './containers/ContainerComponent';
import DispatchContainer01 from './containers/DispatchContainer01';
import DispatchContainer03 from './containers/DispatchContainer03';

class AdvReduxApp extends PureComponent {
    store = configureStore({ loading: false, user: {name: 'aaa'} });

    componentDidMount() {
        this.store.dispatch(
            setCollection([
                { id: 1, name: 'John', age: 20 },
                { id: 2, name: 'Park', age: 35 },
            ]),
        );

        const { collection } = this.store.getState();
        const { ids, entities } = collection;
        const originalPayload = ids.map(id => entities[id]);
        console.log(originalPayload);
        console.log(entities[1]);  // [ ] 안에 key를 써서 value를 탐색
        console.log(entities[2]); 
        console.log(entities[3]);  // 3은 없으니 결과값은 undefinded

        this.store.dispatch(setAge(2, 55));
    }

    render() {
        // return <Provider store={this.store}>AdvReduxApp03 리덕스 예제</Provider>
        return (
            <Provider store={this.store}>
                <PresentationComponent userName="화면 컴포넌트" />
                <br />
                <ContainerComponent id={2} userName="데이터 컴포넌트" />
                <br />
                <DispatchContainer01 userName="액션 데이터 컴포넌트" />
                <br />
                <DispatchContainer03 userName="최종 액션 데이터 컴포넌트" />
            </Provider>
        )
    }
}

export default AdvReduxApp;