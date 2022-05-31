
// import { ThemeConfig } from "@cew/nui/src"
// import { Container } from "@mantine/core";
// import { useDarkMode } from 'storybook-dark-mode';
// import { MemoryRouter } from "react-router-dom";

// export const parameters = {
//   layout: 'fullscreen',
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
//   options: {
//     storySort: {
//       method: '',
//       order: ['Welcome'],
//       locales: '',
//     },
//   },
// }

// function ThemeWrapper(props: { children: React.ReactNode }) {
//   return (
//     <ThemeConfig theme={{
//       colorScheme: useDarkMode() ? 'dark' : 'light',
//     }}>
//       <Container>
//         <MemoryRouter>
//           {props.children}
//         </MemoryRouter>
//       </Container>
//     </ThemeConfig>
//   );
// }

// export const decorators = [(renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];
export const decorators = [(renderStory: Function) => {renderStory()}];
