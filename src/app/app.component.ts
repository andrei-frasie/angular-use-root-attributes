import { Component, ElementRef, NgZone, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1>app.component.ts</h1>
    <p>Title: {{ title }}</p>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  title = "angular-use-root-attributes";
  observer = new MutationObserver((mutation) => {
    this.zone.run(() => {
      this.update();
    });
  });

  public constructor(private elementRef: ElementRef, private zone: NgZone) {
    this.observer.observe(this.elementRef.nativeElement, { attributes: true });
  }

  ngOnInit(): void {
    this.update();
  }

  private update() {
    const prefix = this.elementRef.nativeElement.getAttribute("appendix");
    this.title = prefix + " --- " + "angular-use-root-attributes";
  }
}
