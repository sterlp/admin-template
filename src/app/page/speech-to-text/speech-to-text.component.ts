import { Component, NgZone, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
declare const annyang: any;
import {VoiceRecognitionService} from '../../service/voice-recognition.service'
@Component({
  selector: 'app-speech-to-text',
  templateUrl: './speech-to-text.component.html',
  styleUrls: ['./speech-to-text.component.scss']
})
export class SpeechToTextComponent implements OnInit {
  voiceActiveSectionDisabled: boolean = true;
	voiceActiveSectionError: boolean = false;
	voiceActiveSectionSuccess: boolean = false;
	voiceActiveSectionListening: boolean = false;
  private vText = new BehaviorSubject<string>('');
	voiceText: any;
  constructor(private voiceRecognitionService:VoiceRecognitionService) { }

  ngOnInit(): void {
  }

  getNewVoiceText(){
    return this.vText.asObservable();
 }

  startVoiceRecognition(): void {
    this.voiceActiveSectionDisabled = false;
		this.voiceActiveSectionError = false;
		this.voiceActiveSectionSuccess = false;
    this.voiceText = '';

		if (annyang) {
			let commands = {
				'demo-annyang': () => { }
			};

			annyang.addCommands(commands);

      this.voiceText=this.voiceRecognitionService.initializeVoiceRecognitionCallback();
      console.log(this.voiceText);

			annyang.start({ autoRestart: false });
		}
	}

  closeVoiceRecognition(): void {
    this.voiceActiveSectionDisabled = true;
		this.voiceActiveSectionError = false;
		this.voiceActiveSectionSuccess = false;
		this.voiceActiveSectionListening = false;
		this.voiceText = undefined;

		if(annyang){
      annyang.abort();
    }
	}

}
