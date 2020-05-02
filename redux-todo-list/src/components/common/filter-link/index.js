import React from 'react';

const FilterLink = ({ action, activeFilter, label, onClick }) => {

  const span = {tag: 'span'}
  const a = {tag: 'a', href: '#'}

  const Component = action === activeFilter ? span : a

  if (action === activeFilter) {
    return <span style={{ marginRight: 10 }}>{ label }</span>
  }

  return (
    <Component.tag
      href={Component.href}
      style={{ marginRight: 10 }}
      onClick={ onClick }
    >
    
    { label }
    </Component.tag>
  )
}

export default FilterLink;