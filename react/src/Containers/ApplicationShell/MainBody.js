import React from 'react';

import TwixtFlexBox from '../FlexBox';
import TwixtHeading from '../../Heading';

function ApplicationShellBody({ content, pageTitle, appendClass = '' }) {
  return (
    <TwixtFlexBox grow={true} overwriteClass={`mt-[3.5rem] transition-all duration-300 ${appendClass}`}>
      <main className="flex-grow p-4 overflow-y-auto">
        {pageTitle != '' && <TwixtHeading type="h2">
          {pageTitle}
        </TwixtHeading>}
        {content}
      </main>
    </TwixtFlexBox>
  );
}

export default ApplicationShellBody;
