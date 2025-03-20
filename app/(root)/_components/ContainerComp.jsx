import React from 'react';

const ContainerComp = ({ children }) => {
  
  return (
    <main>
      <section className="mt-10 rounded-3xl shadow-sm p-6 bg-card">
        <section className="mt-6">{children}</section>
      </section>
    </main>
  );
};

export default ContainerComp;
