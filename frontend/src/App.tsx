import AppRouter from "./routes/AppRouter";
import Background from "./presentation/components/Background";

export default function App() {
  return (
    <Background>
      <AppRouter />
    </Background>
  );
}
