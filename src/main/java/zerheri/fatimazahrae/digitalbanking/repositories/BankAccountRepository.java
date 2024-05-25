package zerheri.fatimazahrae.digitalbanking.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import zerheri.fatimazahrae.digitalbanking.entities.BankAccount;

public interface BankAccountRepository extends JpaRepository<BankAccount,String> {
}
