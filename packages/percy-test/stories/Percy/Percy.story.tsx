import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Percy } from 'percy-test';

const getIsPercyContext = () => {
  const urlParams = new URLSearchParams(document.location.search);
  const isPercy = urlParams.get('isPercy');

  return Boolean(isPercy);
};

export default {
  title: 'Components/Percy',
  component: Percy,
  parameters: {
    percy: {
      queryParams: { isPercy: true },
      // widths: PERCY_DEFAULT_WIDTHS,
      // waitForTimeout: 4000,
    },
  },
} as Meta;

const Template: Story = function Template(args: any) {
  const {
    menuIsOpen,
  } = args;

  return (
    <Percy>
      {menuIsOpen ?  'testing in percy' : 'testing'}
    </Percy>
  );
};

export const Regular = Template.bind({});
Regular.args = {
  menuIsOpen: getIsPercyContext() || undefined,
};

export const AnotherStory = Template.bind({});
AnotherStory.args = {
  menuIsOpen: getIsPercyContext() || undefined,
};
