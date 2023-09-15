
function Snack(obj) {
    const users = {
        '홍길동' : ['새우깡', '고래밥', '콘칩', '포테이토칩'],
        '이순신' : ['고구마깡', '치토스', '썬칩', '홈런볼']
    };
    function printSnacks(){
        var result = [];
        if(users[obj.name]){ // Shopping.js의 프로퍼티에 없는 이름이 들어갈 경우 오류가 안 뜨게 하기 위해 if문을 이용
            for(let i=0; i<obj.cnt; i++){
                result.push(<h3 key={i}>{users[obj.name][i]}</h3>)
            };
        }

        return result;
    };
    return(
        <div>{printSnacks()}</div>
    );
}

export default Snack;