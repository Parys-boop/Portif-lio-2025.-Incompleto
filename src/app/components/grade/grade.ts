import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Discipline {
  title: string;
  hasLink: boolean;
  link?: string;
}

@Component({
  selector: 'app-grade',
  imports: [CommonModule],
  templateUrl: './grade.html',
  styleUrl: './grade.css'
})
export class GradeComponent {
  disciplines: Discipline[] = [
    { title: 'Projeto Integrador', hasLink: true, link: 'disciplinas/projetoIntegrado.html' },
    { title: 'Banco de Dados', hasLink: true, link: 'disciplinas/bancoDeDados.html' },
    { title: 'Estrutura de Dados', hasLink: true, link: 'disciplinas/estruturaDados.html' },
    { title: 'Engenharia de Software', hasLink: true, link: './disciplinas/engenhariaSoftware.html' },
    { title: 'Interação Humano Computador', hasLink: true, link: './disciplinas/interaçãoHumanoComputador.html' },
    { title: 'Técnicas Avançadas de Programação', hasLink: true, link: './disciplinas/tecnicasAvancadasdeProgramacao.html' },
    { title: 'Técnicas Avançadas de Programação Web e Mobile', hasLink: false },
    { title: 'Inteligência Corporativa e Modelos de Negócios na Era Digital', hasLink: false },
    { title: 'Gestão Ágil de Projetos de Software', hasLink: false },
    { title: 'Organização de Computadores e Sistemas', hasLink: false },
    { title: 'Organização de Computadores e Sistemas Operacionais', hasLink: false },
    { title: 'Língua Inglesa', hasLink: false },
    { title: 'Matemática Discreta', hasLink: false }
  ];
}
