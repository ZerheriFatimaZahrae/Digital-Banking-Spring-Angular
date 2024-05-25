package zerheri.fatimazahrae.digitalbanking.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import zerheri.fatimazahrae.digitalbanking.enums.AccountStatus;


import java.util.Date;
import java.util.List;
@Entity
//ici on choisi type d strategie qd va appliquer ici ona choisi single table
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
//ici on determine le discriminateur column de name c est type
@DiscriminatorColumn(name = "TYPE",length = 4)
@Data @NoArgsConstructor @AllArgsConstructor
public abstract class BankAccount {
    @Id
    private String id;
    private double balance;
    private Date createdAt;
    //enumerated pour enregistrer status sous forme de string et non pas un nombre
    @Enumerated(EnumType.STRING)
    private AccountStatus status;
    @ManyToOne
    private Customer customer;
    //mapped by c a d cette relation deja presente dans classe bankAccount
    @OneToMany(mappedBy = "bankAccount",fetch = FetchType.LAZY)
    private List<AccountOperation> accountOperations;
}