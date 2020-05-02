import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {FirstComponent} from './first/first.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'untitled1';
  @ViewChild('target', {static: false})
  target;
  @ViewChild(FirstComponent, {static: false})
  firstcompn: FirstComponent;

  constructor() {
  }

  ngAfterViewInit(): void {
    console.log(this.target.nativeElement.innerText);
    console.log(this.firstcompn);
    this.firstcompn.hello();
  }
}
