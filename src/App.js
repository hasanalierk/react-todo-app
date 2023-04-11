import Content from "./components/Content";
import Footer from "./components/Footer";
import { TodoProvider } from "./contexts/TodoContext";
import Header from "./components/Header";

function App() {
  return (
    <TodoProvider>
      <section className="todoapp">
        <Header />
        <Content />
      </section>
      <Footer />
    </TodoProvider>
  );
}

export default App;
// En basta söyliyim bu asagıda yazdıklarımı incelerken context le baglantılı git yoksa anlayamayabilirsin, ben zaten elimden geldiğinde command satırı ekledım gerekli yerlere ama genede bu uyarıyı yapıyım dedim
// Her şeyi burda anlatıcam sen ihtiyaç olursa sırayla gider okursun. İlk başta Header klasörünü incele orda validasyon işlemleri sonra yeni todo ekleme işlemleri falan yaptım anlarsın zaten incelersen.
// Daha sonra List klasörünü incele sakince orda da map olaylarını sonra checbox olaylarını todo silme olaylarını falan yaptım
// Daha sonra Footer ları incele ordada filtreleme olaylarını falan yaptım bakınca anlarsın zaten
