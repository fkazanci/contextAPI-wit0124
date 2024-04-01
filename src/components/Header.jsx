import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { BasketContext } from "../contexts/BasketContext";

export default function Header() {
  const { user } = useContext(UserContext);
  const { getCount } = useContext(BasketContext);
  return (
    <header>
      <nav>
        <a href="#">Ana Sayfa</a>
        <a href="#">Projelerim</a>
        <a href="#">Hakkımda</a>
      </nav>
      <div>{user.firstName}</div>
      <div>sepette {getCount()} ürün var</div>
    </header>
  );
}
