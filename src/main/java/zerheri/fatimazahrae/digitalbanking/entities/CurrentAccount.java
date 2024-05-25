package zerheri.fatimazahrae.digitalbanking.entities;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;



@Entity
@DiscriminatorValue("CA")
@Data @NoArgsConstructor @AllArgsConstructor
public class CurrentAccount extends BankAccount {
    private double overDraft;
}
/*
Pour heritage il existe 3 strategitie pour faire le mapping :
1. single table -> va creer une seul table qui contient ts les columns plus un
discriminator column qu est le type
2. Table Per Class
3. Joined table
 */

