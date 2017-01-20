import React, { Component } from 'react';
import House from './house-info';

export default function HouseInfo ({
  name,
}) {
  return <div key={name}>{name}</div>
}