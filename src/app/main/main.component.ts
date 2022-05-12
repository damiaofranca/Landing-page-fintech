import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Testimonials } from '../interfaces/all';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  ContainerTestimontials: any;
  initialTestimonials: any;
  actualTestimonial: number = 1;
  isPressedMenu: boolean = false;
  isInStartPage: boolean = true;
  isOpenModal: boolean = true;

  testimonials: Testimonials[] = [
    {
      name: 'Julia Pazolli',
      image: '../../assets/images/Woman-reading-cuate.svg',
      imgCompany: '../assets/icons/segment.svg',
      description:
        'Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.',
      role: 'CEO Segment',
      stars: 5,
    },
    {
      name: 'Christina Martins',
      image: '../../assets/images/Woman-reading-pana.svg',
      imgCompany: '../assets/icons/monday.svg',
      description:
        'Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.',
      role: 'CEO Monday',
      stars: 5,
    },
    {
      name: 'Camila Hernandes',
      image: '../../assets/images/Publish-article-cuate.svg',
      imgCompany: '../assets/icons/oracle.svg',
      description:
        'Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now.',
      role: 'CEO Oracle',
      stars: 4,
    },
  ];

  constructor(private renderer2: Renderer2) {}

  ngOnInit(): void {
    this.renderer2.setStyle(document.body, 'overflow-y', 'hidden');
    this.initialTestimonials = this.testimonials[0];
    setInterval(() => {
      if (this.actualTestimonial === 3) {
        this.actualTestimonial = 0;
        this.initialTestimonials = this.testimonials[1];
      } else {
        this.initialTestimonials = this.testimonials[this.actualTestimonial];
        this.actualTestimonial++;
      }
    }, 10000);

    fromEvent(document, 'scroll').subscribe((event: Event) => {
      window.scrollY > 60
        ? (this.isInStartPage = false)
        : (this.isInStartPage = true);
    });

    fromEvent(window, 'resize').subscribe((event: Event) => {
      if (window.innerWidth > 769) {
        this.isPressedMenu = false;
        this.renderer2.removeStyle(document.body, 'overflow-y');
      }
    });
  }

  pressMenu() {
    this.isPressedMenu = !this.isPressedMenu;
    if (this.isPressedMenu) {
      this.renderer2.setStyle(document.body, 'overflow-y', 'hidden');
    } else {
      this.renderer2.removeStyle(document.body, 'overflow-y');
    }
  }

  countStars(stars: number) {
    return Array(stars).fill(1);
  }

  closeModal() {
    this.isOpenModal = false;
    this.renderer2.removeStyle(document.body, 'overflow-y');
  }
}
