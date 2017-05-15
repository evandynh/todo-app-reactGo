import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { onIncompletion, onDestroy } from '../components/TopicItem';
import styles from '../css/components/scoreboard';

const cx = classNames.bind(styles);

const Scoreboard = ({topics, onIncompletion, onDestroy}) => {
  const topicListItems = topics.map((topic, key) => {

    const incomplete = () => {
      onIncompletion(topic.id);
    };
    const destroy = () => {
      onDestroy(topic.id);
    };

    if(topic.complete){
      return (
        <li className={cx('item')} key={key}>
          <span className={cx('topic')}>{topic.text}</span>
          <button
            className={cx('button', 'decrement')}
            onClick={incomplete}>+</button>
          <button
            className={cx('button', 'destory')}
            onClick={destroy}>{String.fromCharCode(215)}</button>
        </li>
      );
    }
  });
  return (
    <div className={cx('scoreboard')}>
      <h3 className={cx('header')}>Completed Tasks</h3>
      <ul className={cx('list')}>
        {topicListItems}
      </ul>
    </div>
  );
};

Scoreboard.propTypes = {
  topics: PropTypes.array.isRequired
};

export default Scoreboard;
