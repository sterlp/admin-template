import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

declare const annyang: any;

@Injectable({
  providedIn: 'root'
})
export class VoiceRecognitionService {

  voiceActiveSectionDisabled: boolean = true;
	voiceActiveSectionError: boolean = false;
	voiceActiveSectionSuccess: boolean = false;
	voiceActiveSectionListening: boolean = false;
	voiceText: any;
  private vText = new BehaviorSubject<string>('');
 
   constructor(private ngZone: NgZone) { }
 
   init() {}

   getNewVoiceText(){
    return this.vText.asObservable();
  }

 
  public initializeVoiceRecognitionCallback(): any{
    
    annyang.addCallback('error', (err:any) => {
      if(err.error === 'network'){
        this.voiceText = "Internet is require";
        annyang.abort();
       
        this.ngZone.run(() => this.voiceActiveSectionSuccess = true);
      } else if (this.voiceText === undefined) {
				this.ngZone.run(() => this.voiceActiveSectionError = true);
				annyang.abort();
			}
      this.vText.next(this.voiceText);
      return this.voiceText;
		});

		annyang.addCallback('soundstart', (res:any) => {
      this.ngZone.run(() => this.voiceActiveSectionListening = true);
      this.vText.next(this.voiceText);
		});

		annyang.addCallback('end', () => {
      if (this.voiceText === undefined) {
        this.ngZone.run(() => this.voiceActiveSectionError = true);
				annyang.abort();
			}
      this.vText.next(this.voiceText);
		});

		annyang.addCallback('result', (userSaid:any):any => {
			this.ngZone.run(() => this.voiceActiveSectionError = false);

     
			let queryText: any = userSaid[0];
      annyang.abort();

      this.voiceText = queryText;
      console.log('aa'+ queryText);
      

			this.ngZone.run(() => this.voiceActiveSectionListening = false);
      this.ngZone.run(() => this.voiceActiveSectionSuccess = true);
      this.vText.next(this.voiceText);
		});
    
	}

}
 