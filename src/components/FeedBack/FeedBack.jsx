import FeedbackButton from "components/FeedbackButton/FeedbackButton";
import React from "react";
import Section from 'components/Section/Section'
import Statistics from "components/Statistics/Statistics";
import Notification from "components/Notification/Notification";
import PropTypes from 'prop-types'; 


class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        percentage: 0,
    }

    handleClickBtn = e => {
        const value = e.target.value;
        this.setState(prev => {
            if (value === 'good') {
                return { good: prev.good + 1 }
            }
            if (value === 'bad') {
                return { bad: prev.bad + 1 }
            }
            if (value === 'neutral') {
                return { neutral: prev.neutral + 1 }
            }
        })
    }

    countTotal = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    }
    countPositiveFeedbackPercentage = () => {
        let percentage = 0;
        if (this.countTotal() !== 0) {
            percentage = Number.parseInt((this.state.good / this.countTotal()) * 100)
        }
        console.log(percentage);
        return percentage;
    }

    render() {
        return (
            
            <>
                <Section title='Make you feedback'>
                    <FeedbackButton onClickBtn={this.handleClickBtn} options={['good', 'neutral', 'bad']}></FeedbackButton>
                </Section>
                <Section title="Statistics">

                {this.countTotal() > 0 ? ( <Statistics
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={this.countTotal()}
                        percentage={this.countPositiveFeedbackPercentage()}
                    ></Statistics>) : <Notification message={'There is no feedback'}/>}
                </Section>
            </>


        )
    }
}

export default Feedback;

Feedback.propTypes = {
    good: PropTypes.number,
    bad: PropTypes.number,
    neutral: PropTypes.number,
}