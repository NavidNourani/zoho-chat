import { Meta, Story } from '@storybook/react';
import React from 'react';
import { useZohoChat, ZohoChat } from '../src';

const meta: Meta = {
  title: 'Zoho chat test',
  component: ZohoChat,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => {
  const { click, ready } = useZohoChat();
  console.log(args);
  return (
    <>
      {/* @ts-ignore */}
      <ZohoChat {...args} />
      {ready && (
        <button onClick={click}>
          {'It is a custom component => click to Open'}
        </button>
      )}
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  url: 'https://salesiq.zoho.eu/widget',
  widgetCode:
    '79ed575bf537837f71a78c6ebf68b41ca2539fb20ec6b9dcc5e45afb54082da4',
  language: 'en',
  position: 'bottomright',
  visible: 'show',
  onlineIcon: undefined,
  offlineIcon: undefined,
};
