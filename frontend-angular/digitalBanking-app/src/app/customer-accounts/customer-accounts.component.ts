import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../model/consumer.model";
import {CostumerService} from "../services/costumer.service";

@Component({
  selector: 'app-customer-accounts',
  templateUrl: './customer-accounts.component.html',
  styleUrl: './customer-accounts.component.css'
})
export class CustomerAccountsComponent implements OnInit {
  customerId!: number;
  customer!: Customer;

  constructor(private route: ActivatedRoute,
              private customerService: CostumerService,
              private router :Router) {
    this.customer=this.router.getCurrentNavigation()?.extras.state as Customer;
  }

  ngOnInit(): void {
    // Récupérer l'ID du client depuis les paramètres de l'URL
    this.customerId = this.route.snapshot.params['id'];

  }
}
