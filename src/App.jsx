import { DarkLight, ThemeProvider } from "./DarkLight/darklight";

export const App = () => {
  return (
    <>  
      <ThemeProvider>
        <DarkLight />
      </ThemeProvider>
    </>
  );
}
