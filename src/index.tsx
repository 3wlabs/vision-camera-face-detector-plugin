import { type Frame, VisionCameraProxy } from 'react-native-vision-camera';

const plugin = VisionCameraProxy.initFrameProcessorPlugin('detectFace', {});

export function detectFace(frame: Frame) {
  'worklet';
  if (!plugin) {
    return {
      error: {
        code: 102,
        message: 'Plugin not found',
      },
    };
  }
  //@ts-ignore
  return plugin.call(frame);
}
