import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  title = 'owlcarouselinAngular';  
  Images = ['../assets/images/Carousel1.jpeg', '../assets/images/Carousel2.jpeg', '../assets/images/Carousel3.jpeg'];  
  
  SlideOptions = { items: 1, dots: true, nav: true };  
  CarouselOptions = { items: 3, dots: true, nav: true };  
  constructor(private renderer2:Renderer2, private el:ElementRef) { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {

    let scriptEl = document.createElement('script');
    scriptEl.src = "https://platform.twitter.com/widgets.js"

    this.renderer2.appendChild(this.el.nativeElement, scriptEl);
   $('.twitter-timeline').css('margin-top','3%');
}
public menuChange() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
}
