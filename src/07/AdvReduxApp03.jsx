import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { setCollection } from './actions/collectionActions01';
import { setAge } from './actions/collectionActions02';

class AdvReduxApp extends PureComponent {
    store = configureStore({ loading: false });

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
        return <Provider store={this.store}>AdvReduxApp03 리덕스 예제</Provider>
    }
}

export default AdvReduxApp;