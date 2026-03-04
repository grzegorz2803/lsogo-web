import { Layout } from "./app/Layout";
import { AppRouter } from "./AppRouter";
import { ScrollToTop } from "./components/ScrollToTop";
function App() {
  return (
    <Layout>
      <ScrollToTop />
      <AppRouter />
    </Layout>
  );
}

export default App;
