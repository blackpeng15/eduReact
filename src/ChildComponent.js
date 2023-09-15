import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends Component {
    constructor() {  // 생성자
        super();  // 부모의 생성자(Component) 호출
        console.log('ChildComponent constructor');
        this.state = {  // 기존에 존재하였음
            loading : true,
            data : 'hello'
        }
        this.abcd = {  // 새로 만들었음
            aaaa : 1111,
            bbbb : 2222
        }
        console.log(this);
    }
    changeData(){
        console.log('changeData....');
        this.setState = ({    // 화면 갱신까지 내부적으로 해줌
            loading : false,
            data : 'apple'
        });
        // this.State = {   // 값 자체만 바꿀 땐 이런 방식도 사용 가능
        //     loading : false,
        //     data : 'apple'
        // };
        // this.forceUpdate();
        console.log(this);
    }
    render() {
        const { args01, args02, args03, args04, args05, args06 } = this.props;
        console.log(args01);
        console.log(args02);
        console.log(args03); // 5개의 배열
        const [n1, n2, ...nn] = args03;
        console.log(n1);
        console.log(n2);
        console.log(nn);
        console.log(args04);
        console.log(args05);
        console.log(args06());
        return (
            <div>
                <button onClick={ () => {this.changeData()} }>체인지</button>
                {this.state.data};
            </div>
        );
    }
    // 프로퍼티 타입 정의
    static propTypes = {
        arge01:PropTypes.bool.isRequired,
        arge02:propTypes.number,
        args03:arrayOf(PropTypes.number),
        args04:propTypes.node,
        args05:propTypes.object,
        args06:propTypes.func
        // .isRequired : 필수 입력 (데이터가 들어오지 않으면 경고 메세지)
    }
    static defalutProps = {
        arge02:0
    }
}

export default ChildComponent;