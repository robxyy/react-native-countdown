# react-native-countdown

A simple countdown component for React Native.

### Props

| Prop              | Description                                                 |
|-------------------|-------------------------------------------------------------|
| millisInFuture    | The number of millis in the future.                         |
| countDownInterval | The interval along the way to receive `onTick()` callbacks. |
| onTick            | Callback fired on regular interval.                         |
| onFinish          | Callback fired when the time is up.                         |

### Setup

```bash
yarn add @robxyy/react-native-countdown
```

### Usage

```js
function Sample() {
  const [showCountdown, setShowCountdown] = useState(false);
  const [remainingCount, setRemainingCount] = useState(60);
  return (
      <View>
        {showCountdown ? (
            <CountDown
                millisInFuture={60 * 1000}
                countDownInterval={1000}
                onTick={value => {
                  setRemainingCount(value);
                }}
                onFinish={() => {
                  setShowCountdown(true);
                }}>
              <Text>{`${remainingCount}s`}</Text>
            </CountDown>
        ) : (
            <Text>Done</Text>
        )}
      </View>
  );
}
```

### License

    Copyright 2022 Rob X

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

