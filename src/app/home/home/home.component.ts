import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { HomeBodyComponent } from "../../components/home-body/home-body.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { AboutMeComponent } from "../../components/about-me/about-me.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [NavBarComponent, HomeBodyComponent, FooterComponent, AboutMeComponent]
})
export class HomeComponent {

}
