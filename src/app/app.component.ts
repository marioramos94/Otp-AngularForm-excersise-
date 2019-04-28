import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Store';
  code="123456"
  verifyModal =false 
  timeToVerify=10
  verificationCodeInput =""
  verify=false
  idInterval


  openVerifyModal(){
    this.verifyModal=true
    this.sendOtp()    
  }

  sendOtp(){
    console.log("otp sended")
    this.runTime()
  }

  runTime(){
    this.timeToVerify=10
    this.idInterval=setInterval(()=>{ 
      console.log("keep on")
      if(this.timeToVerify>0){
        this.timeToVerify= this.timeToVerify-1
      }else if(this.timeToVerify==0){
        if( !this.verify){
        alert("Code has expired")
        clearInterval(this.idInterval)
      }
      }
    }, 1000);
  }


  resendOtp(){   
    clearInterval(this.idInterval) 
    this.sendOtp()
    alert("otp has been re-sended")
  }
  confirmVerification(e){
    if(e.length==6){
      console.log(e)
      if(e==this.code){
        this.verify=true
      }
    }
  }
  ApprovedVerification(){
    alert("verified")
  }




}
