import React, { Component } from 'react';

class LifecycleExample extends Component {
    changeData(){
        console.log('changeData....');
        this.setState ({
            num : Math.floor(Math.random()*3)
        });
    }
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps 호출');
        console.log('props :', props);
        state = props;
        console.log('state :', state);
        return props;  // 리턴값으로 state를 변경
    }
    constructor(props) {
        super(props);
        // getDerivedStateFromProps() 함수를 사용하므로
        // 경고 메세지를 건너 뛰기 위해 state 초기값을 설정합니다.
        this.state = {
            num : 0
        };
        console.log('constructor 호출');
    }
    componentDidMount() {
        console.log('componentDidMount 호출');
        console.log(this.state)
    }
    componentDidUpdate() {
        console.log('componentDidUpdate 호출');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount 호출');
    }
    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate 호출');
        return {};
    }

    // 업데이트시 화면을 새로 출력할지를 판단
    shouldComponentUpdate(nextProps, nextState) { 
        console.log('shouldComponentUpdate 호출');
        console.log(this.props, nextProps);
        console.log(this.state, nextState);
        if(this.state.num === nextState.num){
            return false;
        }
        return true;  // 업데이트 여부를 판단 true or false
    }
    render() {
        console.log('render 호출');
        return (
            <div>
                <button onClick={ () => {this.changeData()} }>체인지</button>
                {this.state.num}
            </div>
        )
    }
}

export default LifecycleExample;