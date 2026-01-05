import React from 'react';

const GridPage = ({ title, subtitle, items, columns = 3, CardComponent }) => {
  const gridClass = `grid grid-${columns}`;
  
  return (
    <StandardPage title={title} subtitle={subtitle}>
      <div className={gridClass}>
        {items.map((item, index) => (
          <div
            key={item.id || index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <CardComponent {...item} />
          </div>
        ))}
      </div>
    </StandardPage>
  );
};

export default GridPage;