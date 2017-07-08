import { Component, OnInit, Inject, ViewEncapsulation, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'app-menu-navbar',
    templateUrl: './menu-navbar.component.html',
    styleUrls: ['./menu-navbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MenuNavbarComponent implements OnInit {

    constructor(@Inject(DOCUMENT) private document: Document) { }

    ngOnInit() {
    }

    @HostListener('window:scroll')
    private onScroll() {
        console.log(this.document.body.scrollTop);
    }

}
