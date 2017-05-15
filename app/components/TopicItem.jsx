import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from '../css/components/topic-item';

const cx = classNames.bind(styles);

const TopicItem = ({ text, id, incrementCount, decrementCount, complete, incomplete, destroyTopic }) => {
  const onIncrement = () => {
    incrementCount(id);
  };
  const onDecrement = () => {
    decrementCount(id);
  };
  const onCompletion = () => {
    complete(id);
  };
  const onIncompletion = () => {
    incomplete(id);
  };
  const onDestroy = () => {
    destroyTopic(id);
  };

  return (
    <li className={cx('topic-item')} key={id}>
      <span className={cx('topic')}>{text}</span>
      <button
        className={cx('button', 'increment')}
        onClick={onCompletion}>✓</button>
      <button
        className={cx('button', 'destroy')}
        onClick={onDestroy}>{String.fromCharCode(215)}</button>
    </li>
  );
};

TopicItem.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  destroyTopic: PropTypes.func.isRequired
};

export default TopicItem;
