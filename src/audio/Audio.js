import React from "react";

export function getVolumeLevel(setVolumeLevel) {
  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then((stream) => {
      var audioContext = new AudioContext();
      var analyser = audioContext.createAnalyser();
      var microphone = audioContext.createMediaStreamSource(stream);
      var javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);
      analyser.smoothingTimeConstant = 0.8;
      analyser.fftSize = 1024;
      microphone.connect(analyser);
      analyser.connect(javascriptNode);
      javascriptNode.connect(audioContext.destination);
      javascriptNode.onaudioprocess = () => {
        var array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
        var values = 0;

        var length = array.length;
        for (var i = 0; i < length; i++) {
          values += array[i];
        }

        var average = values / length;

        if (Math.round(average) > 15) {
          console.log(Math.round(average));
          var res = Math.round(average) - 16;
          setVolumeLevel(res);
        }
      };
    })
    .catch((err) => {
      // alert(`Error ${err} 초를 끄는 것 때문에 잠시 마이크 권한이 필요해요!`);
      alert(
        `초를 끄는 것 때문에 잠시 마이크 권한이 필요해요! 새로고침 후 권한을 주세요!`
      );
    });
  //   return volumeLevel;
}

// export function getVolumeLevel(setVolumeLevel: Function) {}
