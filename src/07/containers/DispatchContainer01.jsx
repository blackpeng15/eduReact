import { connect } from 'react-redux';
import ActionComponent from '../ActionComponent01';
import { setAge } from '../actions/collectionActions02';

// const mapDispatchToProps = dispatch => {
//     return {
//         setAge: (id, age) => dispatch(setAge(id, age)),
//     };
// };

// 위 코드의 경우 mapDispatchToProps() 함수가 인자로 받는 dispatch() 함수는 id, age를 setAge() 함수에
// 그대로 전달만 합니다. 이런 경우 dispatch를 생략할 수 있습니다. (아래처럼 mapDispatchToProps에 객채를 대입)

const mapDispatchToProps =  {
    // setAge: setAge
    setAge
    // setAge: setAge는 키와 키값이 같으므로 객체 확장 표현식에 따라 위와 같이 표기해도 됨
};

export default connect(null, mapDispatchToProps)(ActionComponent);
