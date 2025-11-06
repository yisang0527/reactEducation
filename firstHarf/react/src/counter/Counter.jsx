import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        console.log('construct...');
    }

    componentDidMount() {
        console.log('마운트 된다.');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(`컴포넌트가 업데이트: 카운트가 ${prevState.count} 에서 ${this.state.count}로 변경되었습니다.`);
    }

    componentWillUnmount() {
        console.log('언마운트 된다.');
    }

    handleClick1 = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    handleClick2 = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

    render() {
        console.log('render');
        return (
            <div>
                <h1>카운터: {this.state.count}</h1>
                <button onClick={this.handleClick1}>증가</button>
                <button onClick={this.handleClick2}>감소</button>
            </div>
        );
    }
}

export default Counter;