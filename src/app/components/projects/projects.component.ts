import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as bootstrap from 'bootstrap';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects: any[] = []; // Ensure this is initialized

  ngOnInit(): void {
    // Simulate API or service data
    this.loadProjects();
  }

  loadProjects(): void {
    // Replace this with your API/service call
    this.projects = [
      {
        title: 'IDMACS Application',
        image: 'images/idmacs.jfif',
        description: 'IDMACS is a WireLess Access Control System Project.',
        details: 'Part of a team to Develop IDMACS, an innovative access control application for both web and mobile platforms, utilizing .NET Core and QR code technology to enable secure and seamless door access The system includes features such as time-sensitive QR codes user management, real-time notifications, audit logs, and multi-door support. Designed for scalability, IDMACS enhances security and convenience for various environments including offices, residential complexes, and healthcare facilities.Personally handled saving data in the database, backend process using JavaScript and AngularJS, and also designed several pages of the application. ',
      },
      { title: 'VCard Application', description: 'The VCard Application is For Sending Visitor Card To Visitors', image: 'images/vCardApp.jfif', details:'Developed a VCard application that facilitates adding visitors and sending their profiles via email, allowing recipients to save the profiles in their digital wallets, including iPhone Wallet. This application streamlines the process of sharing visitor information, ensuring that recipients can easily store and access these profiles directly from their mobile devices. Personally handled Designing of Several Pages using Angular and saving data in the database, a backend process using JavaScript and AngularJS. ' },
    { title: 'Banking Application', description: 'The Banking Application is For Transfering of Money.', image: 'images/banking.jfif' , details:'The Bank Account Management System is an application for maintaining a persons account in a bank. In this project I tried to show the working of a banking account system and cover the basic functionality of a Bank Account Management System. To develop a project for solving financial applications of a customer in banking environment in order to nurture the needs of an end banking user by providing various ways to perform banking tasks. Also to enable the users workspace to have additional functionalities which are not provided under a conventional banking project.'},
    ];
  }




  selectedProject: any = null;

  openModal(project: any): void {
    this.selectedProject = project;
    const modalElement = document.getElementById('projectModal')!;
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
}
