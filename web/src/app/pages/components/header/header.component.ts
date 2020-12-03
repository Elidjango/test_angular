import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    public location: Location,
  ) { }

  ngOnInit(): void {
    const _ContentNav = (<HTMLInputElement>document.querySelector(`#ToggleNav`));
    const _NavC = window.localStorage.getItem("nav-contraido");

    if (_NavC != undefined || _NavC != "") {
      if (_NavC === "true") {
        if (_ContentNav) {
          if (!_ContentNav.classList.contains("__contraer")) {
            _ContentNav.classList.add("__contraer");
            window.localStorage.setItem("nav-contraido", "true");
          }
        }
        console.log("CONTRAE - TRUE");
      }

      if (_NavC === "false") {
        if (_ContentNav) {
          if (_ContentNav.classList.contains("__contraer")) {
            _ContentNav.classList.remove("__contraer");
            window.localStorage.setItem("nav-contraido", "false");
          }
        }
        console.log("CONTRAE - FALSE");
      }
    }
  }

  getTitle() {
    const titlee = this.location.prepareExternalUrl(this.location.path());
    const _t = titlee.replace("#/Web/", "");

    return _t;
  }

  ToggleNav() {
    const _ContentNav = (<HTMLInputElement>document.querySelector(`#ToggleNav`));

    if (_ContentNav) {
      if (!_ContentNav.classList.contains("__contraer")) {
        _ContentNav.classList.add("__contraer");
        window.localStorage.setItem("nav-contraido", "true");
      } else if (_ContentNav.classList.contains("__contraer")) {
        _ContentNav.classList.remove("__contraer");
        window.localStorage.setItem("nav-contraido", "false");
      }
    }
  }
}
