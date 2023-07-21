import { Notification } from './Feedback/Notification/Notification';
import { Statistics } from './Feedback/Statistics/Statistics';
import { Section } from './Feedback/Section/Section';
import { FeedbackOptions } from './Feedback/FeedbackOptions/FeedbackOptions';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positives, setPositives] = useState(0);

  const countTotalFeedback = () => {
    setTotal(total + 1);
  };

  const countPositiveFeedbackPercentage = good => {
    const t = total + 1;
    setPositives(Number((t === 0 ? 0 : (good / t) * 100).toFixed(0)));
  };

  const increase = mood => {
    switch (mood) {
      case 'good':
        setGood(good + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      default:
        console.log('Default');
    }
  };

  const buttonEvent = ({ currentTarget: target }) => {
    const mood = target.getAttribute('data-mood');

    increase(mood);
    countTotalFeedback();

    if (mood === 'good') countPositiveFeedbackPercentage(good + 1);
    else countPositiveFeedbackPercentage(good);
  };

  return (
    <main className="main">
      <div className="feedback-box">
        <Section
          title="Please leave us feedback"
          className={'feedback'}
          titleClassName={'feedback-title'}
        >
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={buttonEvent}
          />
        </Section>
        <Section
          title={'Statistics'}
          className={'statistics'}
          titleClassName={'statistics-title'}
        >
          {total ? (
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={total}
              positives={positives}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </div>
    </main>
  );
};
