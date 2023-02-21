import { Story } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  (
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  );
