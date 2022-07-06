import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {AppState} from 'react-native';

function CountDown(props) {
  const {children, millisInFuture, countDownInterval, onTick, onFinish} = props;

  if (millisInFuture <= 0) {
    throw new Error('millisInFuture == null');
  }
  if (countDownInterval <= 0) {
    throw new Error('countDownInterval == null');
  }

  const _millisInFuture = Math.round(millisInFuture);
  const _countDownInterval = Math.round(countDownInterval);
  const initialCount = Math.round(_millisInFuture / _countDownInterval);

  const [count, setCount] = useState(initialCount);
  const [leaveAt, setLeaveAt] = useState(0);

  const performTick = () => {
    const currentCount = count - 1;
    setCount(currentCount);
    if (currentCount <= 0) {
      onFinish && onFinish();
    } else {
      onTick && onTick(currentCount);
    }
  };

  const handleAppStateChanged = appState => {
    switch (appState) {
      case 'active':
        const leaveTime = new Date().getTime() - leaveAt;
        const leaveCount = Math.round(leaveTime / _countDownInterval);
        if (leaveCount > 0) {
          const remainingCount = count - leaveCount;
          if (remainingCount > 0) {
            setCount(remainingCount);
          } else {
            onFinish && onFinish();
          }
        } else {
          onFinish && onFinish();
        }
        break;
      case 'background':
        setLeaveAt(new Date().getTime());
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const eventSubscription = AppState.addEventListener(
      'change',
      handleAppStateChanged,
    );
    const cancelId = setInterval(performTick, countDownInterval);
    return () => {
      clearInterval(cancelId);
      eventSubscription.remove();
    };
  });

  return children;
}

CountDown.defaultProps = {
  millisInFuture: 60 * 1000,
  countDownInterval: 1000,
  onTick: () => {},
  onFinish: () => {},
};

CountDown.propTypes = {
  millisInFuture: PropTypes.number,
  countDownInterval: PropTypes.number,
  onTick: PropTypes.func,
  onFinish: PropTypes.func,
};

export default CountDown;
export {CountDown};
