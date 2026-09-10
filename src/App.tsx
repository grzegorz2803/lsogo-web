import { Layout } from "./app/Layout";
import { AppRouter } from "./AppRouter";
import { ScrollToTop } from "./components/Layout/ScrollToTop";
function App() {
  return (
    <Layout>
      <ScrollToTop />
      <AppRouter />
    </Layout>
  );
}

export default App;
