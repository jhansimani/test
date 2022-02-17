import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-division',
  templateUrl: './dynamic-division.component.html',
  styleUrls: ['./dynamic-division.component.css'],
})
export class DynamicDivisionComponent implements OnInit {
  val = 10;
  constructor(private el: ElementRef) {}
  @HostListener('wheel', ['$event'])
  onWindowScroll(event: WheelEvent) {
    if (
      this.el.nativeElement.offsetHeight + this.el.nativeElement.scrollTop >=
        this.el.nativeElement.scrollHeight &&
      event.deltaY > 0
    ) {
      console.log(event.deltaY > 0);

      console.log('Scroll end recieved');
      let lastbox = this.el.nativeElement.getElementsByClassName('box');
      console.log(lastbox);
      let lastboxvalue = lastbox.length - 1;
      for (let i = 0; i < 5; i++) {
        let newDiv = document.createElement('div');
        let button = document.createElement('button');
        lastboxvalue = lastboxvalue + 1;
        button.innerText = 'Button' + lastboxvalue;
        newDiv.style.width = '200px';
        newDiv.style.height = '200px';
        newDiv.style.display = 'flex';
        newDiv.style.alignItems = 'center';
        newDiv.style.textAlign = 'center';
        newDiv.style.justifyContent = 'center';
        newDiv.style.backgroundColor = '#663399';
        newDiv.classList.add('box');
        newDiv.appendChild(button);
        let id = document.getElementById('dynamic-div');
        id?.appendChild(newDiv);
        newDiv.addEventListener('click', (event: any) => {
          alert(event.target.innerText + ' is clicked');
        });
      }
    }
  }
  ngOnInit(): void {}
  insertAfter(newNode: any, existingNode: any) {
    existingNode?.parentNode.insertBefore(newNode, existingNode.nextSibling);
  }
  scroll(e: any) {
    console.log(e);
  }
  buttonClicked(event: any) {
    console.log(event);
    alert(event.target.innerText + ' is clicked');
  }
}
