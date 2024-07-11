import React from 'react'
import { UncontrolledCarousel}from 'reactstrap';
function HomeSlider() {
  return (
    <div><UncontrolledCarousel
    items={[
      {
        altText: 'welcome to our website',
        caption: 'Slide 1',
        key: 1,
        src: 'https://picsum.photos/id/123/1200/600'
        
      },
      {
        altText: 'welcome to our website',
        caption: 'Slide 2',
        key: 2,
        src: 'https://picsum.photos/id/456/1200/600'
      },
      {
        altText: 'welcome to our website',
        caption: 'Slide 3',
        key: 3,
        src: 'https://picsum.photos/id/678/1200/600'
      }
    ]}
   /></div>
  )
}

export default HomeSlider