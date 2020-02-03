import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = { incorrectAns: false };
    }
    handleClick(buttonText) {
        if (buttonText === this.props.quiz_question.answer) {
            this.state.incorrectAns = false;
            this.props.showNextQuestionHandler()
        } else {
            this.setState({incorrectAns : true});
        }
    }
    render() {
        return (
            <main>
                <section>
                    <p>
                        {this.props.quiz_question.instruction_text}
                    </p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map((option, index) => {
                            return <QuizQuestionButton key={index} button_text={option}
                                clickHandler={this.handleClick.bind(this)} />
                        })}
                    </ul>
                </section>
                {this.state.incorrectAns ? <p className='error'>Sorry, incorrect answer!</p> : null}
            </main>
        );
    }

}

export default QuizQuestion;