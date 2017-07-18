import {Hero} from './hero';
import {Component, Input} from '@angular/core';

@Component({
    selector: 'hero-detail',
    templateUrl: './hero.component.html',
})

export class HeroDetailComponent {
    @Input() hero: Hero;
}
