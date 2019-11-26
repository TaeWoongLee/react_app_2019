import React from 'react';
import PropTypes from 'prop-types';

const bg = [
{
  id:1,
  name: "Mountain",
  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  ,rating : 5
},{
  id:2,
  name : "Lake",
  image : "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  ,rating : 5
},{
  id:3,
  name : "Field",
  image : "https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  ,rating :  5
}
];


function Nature({id,name,picture,rating}){
  return (
  <div>
    <h2> i Like {name}</h2>
    <h4>평점 : {rating}</h4>
    <img src={picture} alt={name} />
  </div>
  )
}

Nature.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating: PropTypes.number
}


function App() {
  return (
    <div>
      {bg.map(photo => (
        <Nature key={photo.id} name={photo.name} picture={photo.image} rating={photo.rating} />
      ))}
    </div>
  );
}

export default App;
