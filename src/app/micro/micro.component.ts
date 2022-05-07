import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import DecibelMeter from 'decibel-meter';
import { buffer } from 'rxjs';
@Component({
  selector: 'app-micro',
  templateUrl: './micro.component.html',
  styleUrls: ['./micro.component.scss']
})
export class MicroComponent implements OnInit {

  aCtx: any;
  constructor() { }

  ngOnInit(): void {
    var analyser;
    var microphone;

    navigator.mediaDevices.getUserMedia({audio: true}).then((stream) => {
            this.aCtx = new AudioContext();
            analyser = this.aCtx.createAnalyser();
            microphone = this.aCtx.createMediaStreamSource(stream);
            microphone.connect(analyser);
            analyser.connect(this.aCtx.destination);
            // analyser.connect(aCtx.destination);
            
            process();
      });

    function process(){
        setInterval(function(){
            this.FFTData = new Float32Array(analyser.frequencyBinCount);
            analyser.getFloatFrequencyData(this.FFTData);
            //console.log(this.FFTData[0]);
            analyser.minDecibels = -90;
            analyser.maxDecibels = -10;
            analyser.fftSize = 256;
            var bufferLength = analyser.frequencyBinCount;
            console.log(bufferLength);
            var dataArray = new Uint8Array(bufferLength);
            analyser.getByteFrequencyData(dataArray);
            console.log(bufferLength[0]);
            console.log(dataArray[0]);

        },10);

    }
    

  }
}
  
   
    

  
  




