import React, { Component } from 'react';

export default function HouseList({
  houses,
}) {
  return (
    <div>
      {houses.map(house => <div key={house.name}>{house.name}</div>)}
    </div>
  )
}