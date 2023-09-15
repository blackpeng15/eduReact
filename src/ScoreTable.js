import React from "react";
import TableBody from "./TableBody";

class ScoreTable extends React.Component {
    // printStudent(){
    //     console.log(this.printStudent);
    // }
    render() {
        const name = this.props.name;
        const stu = this.props.stu;
        console.log(stu);
        return(
            <div>
                <center>
                    {name}
                    <table style={{
                        margin: "20px",
                        fontSize: "30px"
                    }}>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>이름</th>
                                <th>국어</th>
                                <th>영어</th>
                                <th>수학</th>
                            </tr>
                        </thead>
                        <TableBody stu={stu}/>
                    </table>
                </center>    
            </div>
        )
    }
}

export default ScoreTable;