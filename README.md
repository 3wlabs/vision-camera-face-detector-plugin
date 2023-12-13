# vision-camera-face-detector-plugin

A Face detector plugin used for react-native-vision-camera

## Requirement
# Android Minsdk: 26
# IOS target platform: 13

## Download

```sh
npm install https://github.com/lenhathieu96/vision-camera-face-detector.git
```
or

```sh
yarn add https://github.com/lenhathieu96/vision-camera-face-detector.git
```

for Yarn 3+

```sh
yarn add vision-camera-face-detector-plugin@https://github.com/lenhathieu96/vision-camera-face-detector.git
```

## Installation


```sh
brew install jq
```
If you already had jq, ignore the script above:

```sh 
yarn
```

## Usage

```js
import { detectFace } from 'vision-camera-face-detector-plugin';

// ...

const frameProcessor = useFrameProcessor((frame) => {
'worklet';
const response = detectFace(frame);
}, []);

// ...
```

## Run example

Android:
```sh 
yarn example android
```

iOS:
```sh 
yarn example ios
```

## License

MIT
