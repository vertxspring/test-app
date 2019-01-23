import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  xyz = "Bye!"
  abc = false;
  test(){
    console.log("Button clicked");
  }


  test2(){
    console.log("2 Button clicked");
this.xyz = "qwerty";
this.abc = true;
  }



  test3(){
    this.xyz = "CHanged!"
    console.log("3 Button clicked");
    this.abc = false;
  }

  test4(){
    console.log("Blurred!");
  }
}
