import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Abhishek Yadav: fullstack developer';
  @ViewChild('technologies', { static: true }) technologies: ElementRef;
  
  @ViewChild('workex', { static: true }) workex: ElementRef;
  
  @ViewChild('aboutme', { static: true }) aboutme: ElementRef;

  public showButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showButton = window.scrollY > 1000;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  public open = () => {
    window.open("../assets/abhishekyadav-resume.pdf","_blank");
  }

  scrollToTech=()=> {
    let techDiv = this.technologies.nativeElement as HTMLDivElement;
    this.scroll(techDiv);
  }

  scrollToWorkEx=()=> {
    let workExDiv = this.workex.nativeElement as HTMLDivElement;
    this.scroll(workExDiv);
  }

  scrollToAbout = () => {
    let aboutDiv = this.aboutme.nativeElement as HTMLDivElement;
    this.scroll(aboutDiv);
  }

  scroll = (divRef:any) => {
    if (divRef) {
      divRef.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

  
}

