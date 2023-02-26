import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LoginForm } from "./LoginForm";

export default {
  title: "features/LoginForm",
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <LoginForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};